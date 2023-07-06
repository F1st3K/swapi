import React, {useState} from "react";
import {Polygon, useMapEvents} from "react-leaflet";
import L from 'leaflet';
import {Button} from "@mui/material";
import DataPolygon from "../../Types/Polygon";
import RulePolygon from "../../Types/RulePolygon";

type PolygonInfo = {
    coordinates: [number, number][];
    fillColor?: string;
}

type PropsTaskRefactorMapLeafLet = {
    initialPolygons?: PolygonInfo[];
    defaultColor?: string;
}

const LeafletMapWithDrawPolygons = ({initialPolygons = [], defaultColor = "blue"}: PropsTaskRefactorMapLeafLet) => {
    const [polygons, setPolygons] = useState<PolygonInfo[]>(initialPolygons);
    const [polygonInfo, setPolygonInfo] = useState<PolygonInfo | null>(null);
    const [error, setError] = useState<string | null>(null);

    const handleMapClick = (ev: L.LeafletMouseEvent) => {
        if (polygonInfo === null) return;
        try {
            const p = new DataPolygon([...polygonInfo.coordinates, [ev.latlng.lat, ev.latlng.lng]],
                new RulePolygon({maxSquare: 3}));
            setPolygonInfo(prevState => {
                return {coordinates: p.PolygonPoints, fillColor: prevState?.fillColor}
            });
            setError(null);
        } catch (e) {
            if (e && typeof e === 'object' && 'message' in e && typeof e.message === 'string')
                setError(e.message);
        }
    }

    const handleNextPolygon = () => {
        if (polygonInfo === null) {
            setPolygonInfo({coordinates: []});
        } else {
            setPolygons(prevState => polygonInfo ? [...prevState, polygonInfo] : [...prevState]);
            setPolygonInfo(null);
        }
    }

    useMapEvents({ click: handleMapClick });
    return (
        <>
            {polygons?.map((polygon, i) => {
                return (<Polygon positions={polygon.coordinates} color={polygon.fillColor || defaultColor}/>);
            })}
            {polygonInfo
                ? (<Polygon positions={polygonInfo.coordinates} color={polygonInfo.fillColor || defaultColor}/>)
                : (<></>)
            }
            {error
                ? (<h1>{error}</h1>)
                : (<></>)
            }
            <Button onClick={handleNextPolygon}><span>Next</span></Button>
        </>
    );
}

export default LeafletMapWithDrawPolygons;