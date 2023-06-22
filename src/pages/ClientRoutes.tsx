import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./Home";

function ClientRoutes() {
    return (
        <Routes>
            <Route path='/home' Component={Home}/>
        </Routes>
    );
}

export default ClientRoutes;
