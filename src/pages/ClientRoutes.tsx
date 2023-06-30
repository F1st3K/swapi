import React from 'react';
import {Navigate, Route, Routes,} from 'react-router-dom';
import TablePeople from "./TablePeople";
import TablePlanets from "./TablePlanets";
import TableFilms from "./TableFilms";
import TableSpecies from "./TableSpecies";
import TableStarships from "./TableStarships";
import TableVehicles from "./TableVehicles";

function ClientRoutes() {
    return (
        <>
            <Navigate to={"/home/people"}/>
            <Routes>
                <Route path='/home/people*' Component={TablePeople}/>
                <Route path='/home/planets*' Component={TablePlanets}/>
                <Route path='/home/films*' Component={TableFilms}/>
                <Route path='/home/species*' Component={TableSpecies}/>
                <Route path='/home/vehicles*' Component={TableVehicles}/>
                <Route path='/home/starships*' Component={TableStarships}/>
                <Route/>
            </Routes>
        </>
    );
}

export default ClientRoutes;
