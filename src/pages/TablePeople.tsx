import React, {useState} from "react";
import MuiDataView from "../components/MuiDataView/MuiDataView";
import MuiPagination from "../components/MuiPagination/MuiPagination";
import {getPeople} from "../services/Swapi";
import DataTable from "../Types/DataTable";


const TablePeople = () => {
    return (
        <>
            {/*<MuiDataView*/}
            {/*    getTableData={getPeople}*/}
            {/*    countRows={83}*/}
            {/*    varsRowsPerPage={[10]}*/}
            {/*/>*/}
        </>
    );
}

export default TablePeople;