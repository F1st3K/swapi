import React from "react";
import MuiDataView from "../components/MuiDataView/MuiDataView";
import {getVehicles} from "../services/Swapi";
import Swapi from "./Swapi";


const TableVehicles = () => {
    const tabs = Swapi("/home/swapi/vehicles")
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