import React from "react";
import MuiDataView from "../components/MuiDataView/MuiDataView";
import {getPeople, getVehicles} from "../services/Swapi";
import Home from "./Home";


const TableVehicles = () => {
    const tabs = Home("/home/vehicles")
    return (
        <>
            {tabs}
            <MuiDataView
                getTableData={getVehicles}
                countRows={83}
                varsRowsPerPage={[10]}
            />
        </>
    );
}

export default TableVehicles;