import React, {useState} from 'react';
import Home from "./Home";
import {Box, Button, Popover} from "@mui/material";
import "leaflet/dist/leaflet.css";
import LeafletDrawPolygons from "../components/LeafletMap/LeafletDrawPolygons";
import LeafletMap from "../components/LeafletMap/LeafletMap";
import LeafletMapUL from "../components/LeafletMap/LeafletMapUL";
import useCurrentGeoPosition from "../Hooks/UseCurrentGeoPosition";



const Maps = () => {
    const homeTabs = Home("/maps");
    const [change, setChange] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const onError = (message: string | null) => {
        setError(message);
    }

    const onClick = () => {
        setChange(prevState => !prevState);
    }
    const getCurrent = useCurrentGeoPosition;
    return (
        <>
            {homeTabs}
            <Box sx={style}>
                <LeafletMapUL getYouLocation={() => {
                    return getCurrent();
                }}>
                    <LeafletDrawPolygons changeNext={change} onError={onError}/>
                </LeafletMapUL>
                <Button onClick={onClick}>Next</Button>
                <Popover open={error !== null} sx={{
                    display: 'flex',
                    position: 'absolute' as 'absolute',
                    top: '30%',
                    left: '30%',
                }} color={"error"} onClick={() => setError(null)}>
                    {error}
                </Popover>
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
