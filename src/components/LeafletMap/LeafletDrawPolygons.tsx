import React, {useEffect, useState} from "react";
import {Polygon, useMapEvents} from "react-leaflet";
import L from 'leaflet';
import useEarthPolygonValidation, {ValidationRules} from "../../Hooks/useEarthPolygonValidation";

type PolygonInfo = {
    coordinates: [number, number][];
    fillColor?: string;
}

type PropsTaskRefactorMapLeafLet = {
    onError: (error: string) => void;
    changeNext: boolean;
    initialPolygons?: PolygonInfo[];
    defaultColor?: string;
    rules?: ValidationRules;
}

const LeafletDrawPolygons = ({changeNext, onError, rules, initialPolygons = [], defaultColor = ""}: PropsTaskRefactorMapLeafLet) => {
    const [polygons, setPolygons] = useState<PolygonInfo[]>(initialPolygons);
    const [polygonInfo, setPolygonInfo] = useState<PolygonInfo | null>(null);

    const validate = useEarthPolygonValidation;

    const handleMapClick = (ev: L.LeafletMouseEvent) => {
        if (polygonInfo === null) return;
        try {
            validate({points: [...polygonInfo.coordinates, [ev.latlng.lat, ev.latlng.lng]], rules});
            setPolygonInfo(prevState => {
                return {coordinates: [...polygonInfo.coordinates, [ev.latlng.lat, ev.latlng.lng]], fillColor: prevState?.fillColor}
            });
        } catch (e) {
            if (e && typeof e === 'object' && 'message' in e && typeof e.message === 'string')
                onError(e.message);
        }
    }

    const handleNextPolygon = (toggle: boolean) => {
        if (toggle) {
            setPolygonInfo({coordinates: [], fillColor: defaultColor});
        } else {
            setPolygons(prevState => polygonInfo ? [...prevState, polygonInfo] : [...prevState]);
            setPolygonInfo(null);
        }
    }

    useEffect(() => {
        handleNextPolygon(changeNext);
    }, [changeNext])

    useMapEvents({ click: handleMapClick });
    return (
        <>
            {polygons?.map((polygon, i) => {
                return (<Polygon positions={polygon.coordinates} color={polygon.fillColor || defaultColor}/>);
            })}
            {polygonInfo
                ? (<Polygon positions={polygonInfo.coordinates} color={polygonInfo.fillColor || defaultColor}/>)
                : (<></>)
            }
        </>
    );
}

export default LeafletDrawPolygons;