import React from 'react';
import {Box, Tab, Tabs} from "@mui/material";
import {useLocation, useNavigate} from "react-router-dom";

const Home = (page: string) => {
    const navigate = useNavigate();
    const handleChange = (event: React.SyntheticEvent, newUrl: string) => {
        navigate(newUrl);
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={page} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label={"People"} value={"/home/people"}/>
                    <Tab label={"Planets"} value={"/home/planets"}/>
                </Tabs>
            </Box>
        </>
    );
}

export default Home;
