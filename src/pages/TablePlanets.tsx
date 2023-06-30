import React from "react";
import {getPlanets} from "../services/Swapi";
import MuiDataView from "../components/MuiDataView/MuiDataView";
import Home from "./Home";

const TablePlanets = () => {
    const tabs = Home("/home/planets")
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