import React from "react";
import MuiDataView from "../components/MuiDataView/MuiDataView";
import {getPeople} from "../services/Swapi";
import Home from "./Home";


const TablePeople = () => {
    const tabs = Home("/home/people")
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

export default TablePeople;