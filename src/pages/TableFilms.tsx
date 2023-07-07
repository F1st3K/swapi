import React from "react";
import MuiDataView from "../components/MuiDataView/MuiDataView";
import {getFilms} from "../services/Swapi";
import Swapi from "./Swapi";


const TableFilms = () => {
    const swapiTabs = Swapi("/swapi/films");
    return (
        <>
            {swapiTabs}
            <MuiDataView
                getTableData={getFilms}
                countRows={83}
                varsRowsPerPage={[10]}
            />
        </>
    );
}

export default TableFilms;