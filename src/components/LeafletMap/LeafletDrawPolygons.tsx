import React, {useEffect, useState} from "react";
import {Polygon, useMapEvents} from "react-leaflet";
import L from 'leaflet';
import DataPolygon from "../../Types/Polygon";
import RulePolygon from "../../Types/RulePolygon";

type PolygonInfo = {
    coordinates: [number, number][];
    fillColor?: string;
}

type PropsTaskRefactorMapLeafLet = {
    onError: (error: string) => void;
    changeNext: boolean;
    initialPolygons?: PolygonInfo[];
    defaultColor?: string;
}

const LeafletDrawPolygons = ({changeNext, onError, initialPolygons = [], defaultColor = "blue"}: PropsTaskRefactorMapLeafLet) => {
    const [polygons, setPolygons] = useState<PolygonInfo[]>(initialPolygons);
    const [polygonInfo, setPolygonInfo] = useState<PolygonInfo | null>(null);

    const handleMapClick = (ev: L.LeafletMouseEvent) => {
        if (polygonInfo === null) return;
        try {
            const p = new DataPolygon([...polygonInfo.coordinates, [ev.latlng.lat, ev.latlng.lng]],
                new RulePolygon({maxSquare: 3}));
            setPolygonInfo(prevState => {
                return {coordinates: p.PolygonPoints, fillColor: prevState?.fillColor}
            });
        } catch (e) {
            if (e && typeof e === 'object' && 'message' in e && typeof e.message === 'string')
                onError(e.message);
        }
    }

    const handleNextPolygon = () => {
        if (polygonInfo === null) {
            setPolygonInfo({coordinates: []});
        } else {
            setPolygons(prevState => polygonInfo ? [...prevState, polygonInfo] : [...prevState]);
            setPolygonInfo(null);
        }
    }

    useEffect(() => {
        handleNextPolygon();
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