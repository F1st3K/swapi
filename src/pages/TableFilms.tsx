import React from "react";
import MuiDataView from "../components/MuiDataView/MuiDataView";
import {getFilms} from "../services/Swapi";
import Home from "./Home";


const TableFilms = () => {
    const tabs = Home("/home/films")
    return (
        <>
            {tabs}
            <MuiDataView
                getTableData={getFilms}
                countRows={83}
                varsRowsPerPage={[10]}
            />
        </>
    );
}

export default TableFilms;