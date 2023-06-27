import React, {useState} from "react";
import MuiTable from "../components/MuiTable/MuiTable";
import MuiPagination from "../components/MuiPagination/MuiPugination";
import {getPeople} from "../services/Swapi";
import DataTable from "../Types/DataTable";


const TablePeople = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const { data, isLoading } = getPeople(currentPage);

    if (isLoading || !data) {
        return <div>Loading...</div>;
    }
    let table: DataTable = data.results ? DataTable.getTableFrom(data.results) : new DataTable([]);

    if (!table.rows.length) {
        return <div>No data available</div>;
    }

    return (
        <div>
            <MuiTable table={table} />
            <MuiPagination
                countRows={20}
                currentPage={currentPage}
                varsRowsPerPage={[10]}
                onPageChanged={setCurrentPage}
            />
        </div>
    );
}

export default TablePeople;