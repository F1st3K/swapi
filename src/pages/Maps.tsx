import React from 'react';
import Home from "./Home";
import {MapContainer, TileLayer} from "react-leaflet";
import {LatLngExpression} from "leaflet";

const Maps = () => {
    const homeTabs = Home("/maps")

    const position: LatLngExpression = [51.505, -0.09]
    return (
        <>
            {homeTabs}
            <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </>
    );
}

export default Maps;
