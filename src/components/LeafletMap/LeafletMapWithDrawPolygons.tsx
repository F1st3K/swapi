import {LatLngExpression} from "leaflet";
import LeafletMap from "./LeafletMap";
import React, {useEffect, useRef, useState} from "react";
import {Polygon, useMapEvent, useMapEvents} from "react-leaflet";
import DataPolygon from "../../Types/Polygon";
import L from 'leaflet';
import {Button} from "@mui/material";
import RulePolygon from "../../Types/RulePolygon";

type PolygonInfo = {
    coordinates: [number, number][];
    fillColor?: string;
}

type PropsTaskRefactorMapLeafLet = {
    initialPolygons?: PolygonInfo[];
    defaultColor?: string;
}

const LeafletMapWithDrawPolygons = ({initialPolygons = [], defaultColor = "blue"}: PropsTaskRefactorMapLeafLet) => {
    const [polygons, setPolygons] = useState<PolygonInfo[]>(initialPolygons);
    const [polygonInfo, setPolygonInfo] = useState<PolygonInfo | null>(null);
    const handleMapClick = (ev: L.LeafletMouseEvent) => {
        // if (!polygonInfo) return;
        try {
            setPolygonInfo(prevState => {
                if (prevState)
                    return {coordinates: [...prevState.coordinates, [ev.latlng.lat, ev.latlng.lng]]};
                return {coordinates: [[ev.latlng.lat, ev.latlng.lng]]};
            });
        } catch (e) {

        }
    }

    const handleNextPolygon = () => {
        setPolygons(prevState => polygonInfo ? [...prevState, polygonInfo] : [...prevState]);
        setPolygonInfo(null);
    }

    const map = useMapEvents({ click: handleMapClick });
    return (
        <>
            {polygons?.map((polygon, i) => {
                return (<Polygon positions={polygon.coordinates} color={polygon.fillColor || defaultColor}/>);
            })}
            {polygonInfo
                ? (<Polygon positions={polygonInfo.coordinates} color={polygonInfo.fillColor || defaultColor}/>)
                : (<></>)
            }
            <Button onClick={handleNextPolygon}><span>Next</span></Button>
        </>
    );
}

export default LeafletMapWithDrawPolygons;