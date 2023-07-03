import React from "react";
import {getPlanets} from "../services/Swapi";
import MuiDataView from "../components/MuiDataView/MuiDataView";
import Swapi from "./Swapi";

const TablePlanets = () => {
    const tabs = Swapi("/home/swapi/planets")
    return (
        <>
            {tabs}
            <MuiDataView
                getTableData={getPlanets}
                countRows={90}
                varsRowsPerPage={[10]}
            />
        </>
    );
}

export default TablePlanets;