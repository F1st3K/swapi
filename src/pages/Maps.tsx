import React from 'react';
import Home from "./Home";
import {LatLngExpression} from "leaflet";
import {Box} from "@mui/material";
import "leaflet/dist/leaflet.css";
import useCurrentGeoPosition from "../Hooks/UseCurrentGeoPosition";
import LeafletMapUL from "../components/LeafletMap/LeafletMapUL";

const defaultPosition: LatLngExpression = [51.505, -0.09];

const Maps = () => {
    const homeTabs = Home("/maps");

    return (
        <>
            {homeTabs}
            <Box sx={style}>
                <LeafletMapUL defaultPosition={defaultPosition} getYouLocation={useCurrentGeoPosition}/>
            </Box>
        </>
    );
}

const style = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: '70%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default Maps;
