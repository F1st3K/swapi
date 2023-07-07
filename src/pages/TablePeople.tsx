import React from "react";
import MuiDataView from "../components/MuiDataView/MuiDataView";
import {getPeople} from "../services/Swapi";
import Swapi from "./Swapi";


const TablePeople = () => {
    const swapiTabs = Swapi("/swapi/people");
    return (
        <>
            {swapiTabs}
            <MuiDataView
                getTableData={getPeople}
                countRows={83}
                varsRowsPerPage={[10]}
            />
        </>
    );
}

export default TablePeople;