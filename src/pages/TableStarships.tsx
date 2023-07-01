import React from "react";
import MuiDataView from "../components/MuiDataView/MuiDataView";
import {getStarships} from "../services/Swapi";
import Home from "./Home";


const TableStarships = () => {
    const tabs = Home("/home/starships")
    return (
        <>
            {tabs}
            <MuiDataView
                getTableData={getStarships}
                countRows={83}
                varsRowsPerPage={[10]}
            />
        </>
    );
}

export default TableStarships;