import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./Home";

function ClientRoutes() {
    return (
        <Routes>
            <Route path='/' Component={Home}/>
            <Route path='*' Component={Home}/>
        </Routes>
    );
}

export default ClientRoutes;
