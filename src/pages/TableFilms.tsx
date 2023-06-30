import React from "react";
import MuiDataView from "../components/MuiDataView/MuiDataView";
import {getPeople} from "../services/Swapi";
import Home from "./Home";


const TableFilms = () => {
    const tabs = Home("/home/films")
    return (
        <>
            {tabs}
            <MuiDataView
                getTableData={getPeople}
                countRows={83}
                varsRowsPerPage={[10]}
            />
        </>
    );
}

export default TableFilms;