import React from "react";
import MuiDataView from "../components/MuiDataView/MuiDataView";
import {getPeople} from "../services/Swapi";
import Home from "./Home";


const TableStarships = () => {
    const tabs = Home("/home/starships")
    return (
        <>
            {tabs}
            <MuiDataView
                getTableData={getPeople}
                countRows={83}
                varsRowsPerPage={[10]}
            />
        </>
    );
}

export default TableStarships;