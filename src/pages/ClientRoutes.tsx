import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from "./Home";
import TablePeople from "./TablePeople";
import TablePlanets from "./TablePlanets";

function ClientRoutes() {
    return (
        <>
            <Routes>
                <Route path='/home/people*' Component={TablePeople}/>
                <Route path='/home/planets*' Component={TablePlanets}/>
            </Routes>
        </>
    );
}

export default ClientRoutes;
