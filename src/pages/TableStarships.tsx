import React from "react";
import MuiDataView from "../components/MuiDataView/MuiDataView";
import {getStarships} from "../services/Swapi";
import Swapi from "./Swapi";


const TableStarships = () => {
    const swapiTabs = Swapi("/swapi/starships");
    return (
        <>
            {swapiTabs}
            <MuiDataView
                getTableData={getStarships}
                countRows={83}
                varsRowsPerPage={[10]}
            />
        </>
    );
}

export default TableStarships;