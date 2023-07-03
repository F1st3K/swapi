import React from "react";
import {getPlanets} from "../services/Swapi";
import MuiDataView from "../components/MuiDataView/MuiDataView";
import Swapi from "./Swapi";

const TablePlanets = () => {
    const swapiTabs = Swapi("/swapi/planets");
    return (
        <>
            {swapiTabs}
            <MuiDataView
                getTableData={getPlanets}
                countRows={90}
                varsRowsPerPage={[10]}
            />
        </>
    );
}

export default TablePlanets;