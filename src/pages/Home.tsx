import React from 'react';
import {Box, Tab, Tabs} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Home = (page: string) => {
    const navigate = useNavigate();
    const handleChange = (event: React.SyntheticEvent, newUrl: string) => {
        if (page === newUrl)
            navigate('/');
        navigate(newUrl);
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={page} onChange={handleChange}
                      aria-label="basic tabs example"
                      textColor="inherit"
                      indicatorColor="secondary">
                    <Tab label={"Star Wors API"} value={"/swapi"}/>
                    <Tab label={"Maps LeafLet"} value={"/maps"}/>
                </Tabs>
            </Box>
        </>
    );
}

export default Home;
