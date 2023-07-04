import LeafletMap from "./LeafletMap";
import {LatLngExpression} from "leaflet";
import {GetPositionState} from "../../Hooks/UseCurrentGeoPosition";
import React from "react";

type PropsLeafLetUL = {
    defaultPosition: LatLngExpression;
    getYouLocation: () => GetPositionState;
}

const LeafletMapUL = ({defaultPosition, getYouLocation}: PropsLeafLetUL) => {
    let youLocation :GetPositionState = {data: null, isLoading: false, error: null};
    let position:LatLngExpression = youLocation.data
        ? [youLocation.data.coords.latitude, youLocation.data.coords.longitude]
        : defaultPosition;
    const handleGetLocation = () => {
        youLocation = getYouLocation();
    }



    if (youLocation.isLoading || youLocation.error)
        return <>Loading...</>
    return (
        <>
            <LeafletMap position={position}/>
        </>
    );
}

export default LeafletMapUL;