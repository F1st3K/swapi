import React from 'react';
import {Box, Tab, Tabs} from "@mui/material";
import {useNavigate} from "react-router-dom";
import Home from "./Home";

const Swapi = (page: string) => {
    const navigate = useNavigate();
    const handleChange = (event: React.SyntheticEvent, newUrl: string) => {
        if (page === newUrl)
            navigate('/swapi');
        navigate(newUrl);
    };
    const homeTabs = Home("/swapi")
    return (
        <>
            {homeTabs}
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={page} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label={"People"} value={"/swapi/people"}/>
                    <Tab label={"Planets"} value={"/swapi/planets"}/>
                    <Tab label={"Films"} value={"/swapi/films"}/>
                    <Tab label={"Species"} value={"/swapi/species"}/>
                    <Tab label={"Vehicles"} value={"/swapi/vehicles"}/>
                    <Tab label={"Starships"} value={"/swapi/starships"}/>
                </Tabs>
            </Box>
        </>
    );
}

export default Swapi;
