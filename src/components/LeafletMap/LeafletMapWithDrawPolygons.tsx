import {LatLngExpression} from "leaflet";
import LeafletMap from "./LeafletMap";
import React from "react";
import {Polygon} from "react-leaflet";

type PropsTaskRefactorMapLeafLet = {
    position: LatLngExpression;
}


const LeafletMapWithDrawPolygons = ({position}: PropsTaskRefactorMapLeafLet) => {
    return (
        <>
            <LeafletMap position={position}>
                <Polygon positions={[[0, 0], [0, 1]]}/>
            </LeafletMap>
        </>
    );
}

export default LeafletMapWithDrawPolygons;