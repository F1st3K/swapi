import React from 'react';
import {Box, Tab, Tabs} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Swapi = (page: string) => {
    const navigate = useNavigate();
    const handleChange = (event: React.SyntheticEvent, newUrl: string) => {
        if (page === newUrl)
            navigate('/home/swapi');
        navigate(newUrl);
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={page} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label={"People"} value={"/home/swapi/people"}/>
                    <Tab label={"Planets"} value={"/home/swapi/planets"}/>
                    <Tab label={"Films"} value={"/home/swapi/films"}/>
                    <Tab label={"Species"} value={"/home/swapi/species"}/>
                    <Tab label={"Vehicles"} value={"/home/swapi/vehicles"}/>
                    <Tab label={"Starships"} value={"/home/swapi/starships"}/>
                </Tabs>
            </Box>
        </>
    );
}

export default Swapi;
