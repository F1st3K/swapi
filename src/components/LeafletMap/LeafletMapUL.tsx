import LeafletMap from "./LeafletMap";
import {LatLngExpression} from "leaflet";
import {GetPositionState} from "../../Hooks/UseCurrentGeoPosition";
import React from "react";

type PropsLeafLetUL = {
    defaultPosition: LatLngExpression;
    getYouLocation: () => GetPositionState;
}

const LeafletMapUL = ({defaultPosition, getYouLocation}: PropsLeafLetUL) => {
    let position:LatLngExpression = defaultPosition;
    const {data, isLoading, error} = getYouLocation();

    if (isLoading)
        return <>Loading...</>
    position = data ? [data.coords.latitude, data.coords.longitude] : defaultPosition;
    return (
        <>
            <LeafletMap position={position}/>
        </>
    );
}

export default LeafletMapUL;