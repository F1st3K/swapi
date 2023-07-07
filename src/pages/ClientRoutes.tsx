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
import Maps from "./Maps";

function ClientRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' Component={() => Home("")}/>

                <Route path='/swapi' Component={() => swapi("")}/>
                <Route path='/swapi/people' Component={TablePeople}/>
                <Route path='/swapi/planets' Component={TablePlanets}/>
                <Route path='/swapi/films' Component={TableFilms}/>
                <Route path='/swapi/species' Component={TableSpecies}/>
                <Route path='/swapi/vehicles' Component={TableVehicles}/>
                <Route path='/swapi/starships' Component={TableStarships}/>
                <Route path='/swapi/people*' element={<Navigate to={"/swapi/people"}/>}/>
                <Route path='/swapi/planets*' element={<Navigate to={"/swapi/planets"}/>}/>
                <Route path='/swapi/films*' element={<Navigate to={"/swapi/films"}/>}/>
                <Route path='/swapi/species*' element={<Navigate to={"/swapi/species"}/>}/>
                <Route path='/swapi/vehicles*' element={<Navigate to={"/swapi/vehicles"}/>}/>
                <Route path='/swapi/starships*' element={<Navigate to={"/swapi/starships"}/>}/>
                <Route path="/swapi*" element={<Navigate to={"/swapi"}/>}/>

                <Route path='/maps' Component={() => Maps()}/>
                <Route path="/maps*" element={<Navigate to={"/maps"}/>}/>

                <Route path="*" element={<Navigate to={"/"}/>}/>
            </Routes>
        </>
    );
}

export default ClientRoutes;
