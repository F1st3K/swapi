import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import TablePeople from "./TablePeople";
import TablePlanets from "./TablePlanets";
import TableFilms from "./TableFilms";
import TableSpecies from "./TableSpecies";
import TableStarships from "./TableStarships";
import TableVehicles from "./TableVehicles";
import Home from "./Home";
import swapi from "./Swapi";

function ClientRoutes() {
    return (
        <>
            <Routes>
                <Route path='/home' Component={() => Home("")}/>
                <Route path='/home/swapi' Component={() => swapi("")}/>
                <Route path='/home/swapi/people' Component={TablePeople}/>
                <Route path='/home/swapi/planets' Component={TablePlanets}/>
                <Route path='/home/swapi/films' Component={TableFilms}/>
                <Route path='/home/swapi/species' Component={TableSpecies}/>
                <Route path='/home/swapi/vehicles' Component={TableVehicles}/>
                <Route path='/home/swapi/starships' Component={TableStarships}/>
                <Route path='/home/swapi/people*' element={<Navigate to={"/home/swapi/people"}/>}/>
                <Route path='/home/swapi/planets*' element={<Navigate to={"/home/swapi/planets"}/>}/>
                <Route path='/home/swapi/films*' element={<Navigate to={"/home/swapi/films"}/>}/>
                <Route path='/home/swapi/species*' element={<Navigate to={"/home/swapi/species"}/>}/>
                <Route path='/home/swapi/vehicles*' element={<Navigate to={"/home/swapi/vehicles"}/>}/>
                <Route path='/home/swapi/starships*' element={<Navigate to={"/home/swapi/starships"}/>}/>
                <Route path="/home/swapi*" element={<Navigate to={"/home/swapi"}/>}/>
                <Route path="*" element={<Navigate to={"/home"}/>}/>
            </Routes>
        </>
    );
}

export default ClientRoutes;
