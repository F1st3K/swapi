import React from "react";
import MuiDataView from "../components/MuiDataView/MuiDataView";
import {getSpecies} from "../services/Swapi";
import Swapi from "./Swapi";


const TableSpecies = () => {
    const swapiTabs = Swapi("/swapi/species");
    return (
        <>
            {swapiTabs}
            <MuiDataView
                getTableData={getSpecies}
                countRows={83}
                varsRowsPerPage={[10]}
            />
        </>
    );
}

export default TableSpecies;