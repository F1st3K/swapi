import React, {useEffect, useState} from 'react';
import Home from "./Home";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {LatLngExpression} from "leaflet";
import {Box} from "@mui/material";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import useCurrentGeoPosition, {GetPositionState} from "../Hooks/UseCurrentGeoPosition";

const markerIcon = L.icon({
    iconUrl: 'marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
});

const Maps = () => {
    const [position, setPosition] = useState<LatLngExpression | null>(null);
    let currentPosition: GetPositionState = useCurrentGeoPosition();
    const homeTabs = Home("/maps");

    useEffect(() => {
        if (currentPosition.data && !position) {
            setPosition([currentPosition.data.coords.latitude, currentPosition.data.coords.longitude]);
        }
    }, [currentPosition])

    return (
        <>
            {homeTabs}
            <Box sx={style}>
                <MapContainer center={position ? position : [51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{width: '100%', height: '100%'}}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={position ? position : [51.505, -0.09]} icon={markerIcon}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </MapContainer>
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
