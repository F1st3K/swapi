import {MapContainer, Marker, Polygon, TileLayer, useMap} from "react-leaflet";
import React, {useEffect} from "react";
import L, {LatLngExpression} from "leaflet";
import RulePolygon from "../../Types/RulePolygon";
import DataPolygon from "../../Types/Polygon";


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
    const polygon = new DataPolygon([
        [89.4, 6.93], [66.54, 71.08], [66.01, 11.48], [-44.48, 98.81],
        // [1, 0], [0, 1], [1, 1], [0, 0],
    ], new RulePolygon({maxPerimeter: 100}));
    return (
        <>
            <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{width: '100%', height: '100%'}}>
                <ChangeMapView position={position}/>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={markerIcon}/>
                <Polygon positions={polygon.PolygonPoints} color={'green'}/>
            </MapContainer>
        </>
    );
}

export default LeafletMap;