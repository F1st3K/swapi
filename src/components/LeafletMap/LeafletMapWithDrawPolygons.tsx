import {LatLngExpression} from "leaflet";
import LeafletMap from "./LeafletMap";
import React, {useEffect, useRef} from "react";
import {Polygon, useMapEvent, useMapEvents} from "react-leaflet";
import L from 'leaflet';

type PolygonInfo = {
    coordinates: [number, number][];
    fillColor?: string;
}

type PropsTaskRefactorMapLeafLet = {
    initialPolygons?: PolygonInfo[];
    defaultColor?: string;
}

const LeafletMapWithDrawPolygons = ({ initialPolygons = [], defaultColor = "blue"}: PropsTaskRefactorMapLeafLet) => {
    const map = useMapEvents({
        click: (event) => {

        }
    });


    return (
        <LeafletMap>
            {initialPolygons?.map((polygon) => {
                return (<Polygon positions={polygon.coordinates} color={polygon.fillColor || defaultColor}/>);
            })}
        </LeafletMap>
    );
}

export default LeafletMapWithDrawPolygons;