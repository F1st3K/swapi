import React, {useState} from 'react';
import Home from "./Home";
import {Box, Button, Popover, TextField} from "@mui/material";
import "leaflet/dist/leaflet.css";
import LeafletDrawPolygons from "../components/LeafletMap/LeafletDrawPolygons";
import LeafletMapUL from "../components/LeafletMap/LeafletMapUL";
import useCurrentGeoPosition from "../Hooks/UseCurrentGeoPosition";
import RulePolygon from "../Types/RulePolygon";



const Maps = () => {
    const homeTabs = Home("/maps");
    const [change, setChange] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [maxSquare, setMaxSquare] = useState<number | undefined>()
    const [maxPerimeter, setMaxPerimeter] = useState<number | undefined>()
    const [maxSide, setMaxSide] = useState<number | undefined>()
    const [color, setColor] = useState<string | undefined>()
    const onError = (message: string | null) => {
        setError(message);
    }

    const getCurrent = useCurrentGeoPosition;
    return (
        <>
            {homeTabs}
            <Box sx={style}>
                <LeafletMapUL getYouLocation={() => {
                    return getCurrent();
                }}>
                    <LeafletDrawPolygons
                        initialPolygons={[{coordinates: [[0, 0], [0, 1], [1, 0], [1, 1]]}]}
                        defaultColor={color}
                        rule={new RulePolygon({maxSquare, maxPerimeter, maxSide})}
                        changeNext={change} onError={onError}
                    />
                </LeafletMapUL>
                <TextField id="outlined-basic" label="Max Square" variant="standard"
                           onChange={(event) => {setMaxSquare(Number(event.target.value))}}
                />
                <TextField id="outlined-basic" label="Max Perimeter" variant="standard"
                           onChange={(event) => {setMaxPerimeter(Number(event.target.value))}}
                />
                <TextField id="outlined-basic" label="Max Side" variant="standard"
                           onChange={(event) => {setMaxSide(Number(event.target.value))}}
                />
                <TextField id="outlined-basic" label="Color" variant="standard"
                           onChange={(event) => {setColor(event.target.value)}}
                />
                <Button onClick={() => setChange(prevState => !prevState)} variant={change ? "outlined" : "contained"}>
                    {change ? (<>Edit polygon mode</>) : (<>Next polygon</>)}
                </Button>
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
