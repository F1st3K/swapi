import React, {useEffect, useState} from "react";
import {Polygon, useMapEvents} from "react-leaflet";
import L from 'leaflet';
import DataPolygon from "../../Types/Polygon";
import RulePolygon from "../../Types/RulePolygon";
import EarthPolygon from "../../Types/EarthPolygon";

type PolygonInfo = {
    coordinates: [number, number][];
    fillColor?: string;
}

type PropsTaskRefactorMapLeafLet = {
    onError: (error: string) => void;
    changeNext: boolean;
    initialPolygons?: PolygonInfo[];
    defaultColor?: string;
    rule: RulePolygon;
}

const LeafletDrawPolygons = ({changeNext, onError, rule, initialPolygons = [], defaultColor = ""}: PropsTaskRefactorMapLeafLet) => {
    const [polygons, setPolygons] = useState<PolygonInfo[]>(initialPolygons);
    const [polygonInfo, setPolygonInfo] = useState<PolygonInfo | null>(null);

    const handleMapClick = (ev: L.LeafletMouseEvent) => {
        if (polygonInfo === null) return;
        try {
            // const p = new DataPolygon([...polygonInfo.coordinates, [ev.latlng.lat, ev.latlng.lng]],
            //     rule);
            const p = new EarthPolygon([...polygonInfo.coordinates, [ev.latlng.lat, ev.latlng.lng]]);
            rule.CheckOnRule(p);
            setPolygonInfo(prevState => {
                return {coordinates: p.Points, fillColor: prevState?.fillColor}
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