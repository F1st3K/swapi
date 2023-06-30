import React from 'react';
import {Box, Tab, Tabs} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Home = (page: string) => {
    const navigate = useNavigate();
    const handleChange = (event: React.SyntheticEvent, newUrl: string) => {
        if (page === newUrl)
            navigate('/home');
        navigate(newUrl);
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={page} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label={"People"} value={"/home/people"}/>
                    <Tab label={"Planets"} value={"/home/planets"}/>
                    <Tab label={"Films"} value={"/home/films"}/>
                    <Tab label={"Species"} value={"/home/species"}/>
                    <Tab label={"Vehicles"} value={"/home/vehicles"}/>
                    <Tab label={"Starships"} value={"/home/starships"}/>
                </Tabs>
            </Box>
        </>
    );
}

export default Home;
