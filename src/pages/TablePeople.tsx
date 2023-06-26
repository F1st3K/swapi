import React, {useState} from "react";
import InfoPeople, {toTableFormat} from "../services/PeopleSwapi";
import MuiTable from "../components/MuiTable/MuiTable";
import MuiPugination from "../components/MuiPagination/MuiPugination";
import DataTable, {DataColumn} from "../Types/DataTable";


const TablePeople = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const { data, loading, countRows } = InfoPeople(currentPage);

    const dataTable = toTableFormat(data ? data : []);
    const table = new DataTable(dataTable[0].map((column) => {
        return {title: column, type: typeof column} as DataColumn} ));
    dataTable.slice(1).map((row) => { table.addRow(row)});

    if (loading) {
        return <div>Loading...</div>;
    }
    if (!data) {
        return <div>No data available</div>;
    }
    return (
        <div>
            <MuiTable table={table}/>
            <MuiPugination countRows={countRows}
                           currentPage={currentPage}
                           varsRowsPerPage={[10]}
                           onPageChanged={setCurrentPage}
            />
        </div>
    );
}

export default TablePeople;