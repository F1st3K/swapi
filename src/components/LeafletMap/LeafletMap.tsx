import {MapContainer, Marker, TileLayer, useMap} from "react-leaflet";
import React, {useEffect} from "react";
import L, {LatLngExpression} from "leaflet";


const markerIcon = L.icon({
    iconUrl: 'marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
});

type PropsLeafLet = {
    position: LatLngExpression;
}

const ChangeMapView = ({position}: PropsLeafLet) => {
    const map = useMap();

    useEffect(() => {
        map.setView(position);
    });

    return null;
}

const LeafletMap = ({position}: PropsLeafLet) => {
    return (
        <>
            <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{width: '100%', height: '100%'}}>
                <ChangeMapView position={position}/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={markerIcon}/>
            </MapContainer>
        </>
    );
}

export default LeafletMap;