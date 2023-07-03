import React from "react";
import MuiDataView from "../components/MuiDataView/MuiDataView";
import {getSpecies} from "../services/Swapi";
import Swapi from "./Swapi";


const TableSpecies = () => {
    const tabs = Swapi("/home/swapi/species")
    return (
        <>
            {tabs}
            <MuiDataView
                getTableData={getSpecies}
                countRows={83}
                varsRowsPerPage={[10]}
            />
        </>
    );
}

export default TableSpecies;