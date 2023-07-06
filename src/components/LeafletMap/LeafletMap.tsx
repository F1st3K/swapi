import {MapContainer, Marker, TileLayer, useMap} from "react-leaflet";
import React, {useEffect} from "react";
import L, {LatLngExpression} from "leaflet";


const markerIcon = L.icon({
    iconUrl: 'marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12.5, 41],
    popupAnchor: [0, -41],
});

type PropsChangeMap = {
    position: LatLngExpression;
}

type PropsLeafLet = {
    position?: LatLngExpression;
    children?: React.ReactNode;
}

const ChangeMapView = ({position}: PropsChangeMap) => {
    const map = useMap();

    useEffect(() => {
        map.setView(position);
    });

    return null;
}

const defaultPosition: LatLngExpression = [51.505, -0.09];

const LeafletMap = ({position, children}: PropsLeafLet) => {
    position = position || defaultPosition;
    return (
        <>
            <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{width: '100%', height: '100%'}}>
                <ChangeMapView position={position}/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {
                    position ?
                    (<Marker position={position} icon={markerIcon}/>) :
                    (<></>)
                }
                {children}
            </MapContainer>
        </>
    );
}

export default React.memo(LeafletMap);