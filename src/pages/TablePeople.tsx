import React, {useState} from "react";
import InfoPeople, {toTableFormat} from "../services/PeopleSwapi";
import PagingTable from "../components/PagingTable/PagingTable";
import DataTable from "../components/DataTable/DataTable";
import StringTable, {Cell, Column} from "../Types/StringTable";

const TablePeople = () => {
    const [currentPage, setCurrentPage] = useState<number>(0);
    const { data, loading, countPage } = InfoPeople(currentPage + 1);
    const dataTable = toTableFormat(data ? data : []);
    const columns = dataTable[0].map((column: string ) => {
        return {name: column} as Column
    })
    const table = new StringTable(columns);
    dataTable.slice(1).map((row) => {
        table.Rows.push(row as Array<Cell>);
    })

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
            <DataTable data={table} countRows={countPage} varsRowsPerPage={[10]}
                       onPageChanged={setCurrentPage}
           />
        </div>
    );
}

export default TablePeople;