import React from "react";
import MuiDataView from "../components/MuiDataView/MuiDataView";
import {getPeople} from "../services/Swapi";
import Swapi from "./Swapi";


const TablePeople = () => {
    const tabs = Swapi("/home/swapi/people")
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