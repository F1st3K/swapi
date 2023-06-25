import React, {useState} from "react";
import InfoPeople, {toTableFormat} from "../services/PeopleSwapi";
import PagingTable from "../components/PagingTable/PagingTable";
import MuiTable from "../components/DataTable/MuiTable";
import DataTable, {DataColumn, DataRow, DataType} from "../Types/DataTable";
import {type} from "os";

const TablePeople = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const { data, loading, countPage } = InfoPeople(currentPage + 1);
    const dataTable = toTableFormat(data ? data : []);
    const table = new DataTable(dataTable[0].map((column) => {
        return {title: column, type: typeof column} as DataColumn} ))
    dataTable.slice(1).map((row) => { table.addRow(row)})
    if (loading) {
        return <div>Loading...</div>;
    }
    // if (!data) {
    //     return <div>No data available</div>;
    // }
    return (
        <div>
            <PagingTable data={dataTable} countPage={countPage/10} currentPage={currentPage}
                         nextHandler={()=>{ setCurrentPage(currentPage + 1);}}
                         prevHandler={()=>{ setCurrentPage(currentPage - 1);}}
            />
            <MuiTable data={table} countRows={countPage} varsRowsPerPage={[10]}
                      onPageChanged={setCurrentPage}
           />
        </div>
    );
}

export default TablePeople;