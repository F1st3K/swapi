import React from 'react';
import {Box} from "@mui/material";
import Home from "./Home";

const Maps = () => {
    const homeTabs = Home("/maps")
    return (
        <>
            {homeTabs}
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            </Box>
        </>
    );
}

export default Maps;
