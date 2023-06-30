import React from "react";
import {getPlanets} from "../services/Swapi";
import MuiDataView from "../components/MuiDataView/MuiDataView";

const TablePlanets = () => {
    return (
        <>
            <MuiDataView
                getTableData={getPlanets}
                countRows={90}
                varsRowsPerPage={[10]}
            />
        </>
    );
}

export default TablePlanets;