import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import TablePeople from "./TablePeople";
import TablePlanets from "./TablePlanets";
import TableFilms from "./TableFilms";
import TableSpecies from "./TableSpecies";
import TableStarships from "./TableStarships";
import TableVehicles from "./TableVehicles";
import Home from "./Home";

function ClientRoutes() {
    return (
        <>
            <Routes>
                <Route path='/home' Component={() => Home("")}/>
                <Route path='/home/people' Component={TablePeople}/>
                <Route path='/home/planets' Component={TablePlanets}/>
                <Route path='/home/films' Component={TableFilms}/>
                <Route path='/home/species' Component={TableSpecies}/>
                <Route path='/home/vehicles' Component={TableVehicles}/>
                <Route path='/home/starships' Component={TableStarships}/>
                <Route path='/home/people*' element={<Navigate to={"/home/people"}/>}/>
                <Route path='/home/planets*' element={<Navigate to={"/home/planets"}/>}/>
                <Route path='/home/films*' element={<Navigate to={"/home/films"}/>}/>
                <Route path='/home/species*' element={<Navigate to={"/home/species"}/>}/>
                <Route path='/home/vehicles*' element={<Navigate to={"/home/vehicles"}/>}/>
                <Route path='/home/starships*' element={<Navigate to={"/home/starships"}/>}/>
                <Route path="*" element={<Navigate to={"/home"}/>}/>
            </Routes>
        </>
    );
}

export default ClientRoutes;
