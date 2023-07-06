import LeafletMap from "./LeafletMap";
import {LatLngExpression} from "leaflet";
import {GetPositionState} from "../../Hooks/UseCurrentGeoPosition";
import LoadingButton from '@mui/lab/LoadingButton';
import {MyLocation} from "@mui/icons-material";
import React, {useState} from "react";

type PropsLeafLetUL = {
    getYouLocation: () => GetPositionState;
    children?: React.ReactNode;
}

type PropsGetLocation = {
    setLoading: (loading: boolean) => void;
    setPosition: (position: LatLngExpression) => void;
    getPosition: () => GetPositionState;
}

const GetLocation = ({setLoading, setPosition, getPosition}:PropsGetLocation) => {
    const {data, isLoading, error} = getPosition();
    setLoading(isLoading);
    if (!isLoading && !error && data)
        setPosition([data.coords.latitude, data.coords.longitude]);
    return null;
}

const LeafletMapUL = ({getYouLocation, children}: PropsLeafLetUL) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [position, setPosition] = useState<LatLngExpression>();

    const handleSetPosition = () => {
        setLoading(true);
    }

    return (
        <>
            {loading
                ? (<GetLocation setLoading={setLoading} setPosition={setPosition} getPosition={getYouLocation}/>)
                : (<></>)
            }
            <LeafletMap position={position}>
                {children}
            </LeafletMap>
            <LoadingButton
                size="small"
                onClick={handleSetPosition}
                endIcon={<MyLocation />}
                loading={loading}
                loadingPosition="end"
                variant="contained"
            >
                <span>Set my location</span>
            </LoadingButton>
        </>
    );
}

export default LeafletMapUL;