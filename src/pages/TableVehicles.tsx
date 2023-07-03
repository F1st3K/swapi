import React from "react";
import MuiDataView from "../components/MuiDataView/MuiDataView";
import {getVehicles} from "../services/Swapi";
import Swapi from "./Swapi";


const TableVehicles = () => {
    const swapiTabs = Swapi("/swapi/vehicles");
    return (
        <>
            {swapiTabs}
            <MuiDataView
                getTableData={getVehicles}
                countRows={83}
                varsRowsPerPage={[10]}
            />
        </>
    );
}

export default TableVehicles;