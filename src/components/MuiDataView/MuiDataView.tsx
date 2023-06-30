import React, {useState} from "react";
import DataTable from "../../Types/DataTable";
import MuiTable from "../MuiTable/MuiTable";
import MuiPagination from "../MuiPagination/MuiPagination";
import {JsonObject, JsonRecord} from "../../Types/JsonObject";

type PropsMuiDataView = {
    getTableData: <T extends JsonRecord<T>>(page: number) => {
        data: Array<JsonObject<T>> | null;
        isLoading: boolean;
        error: Error | null;
    };
    countRows: number;
    varsRowsPerPage: number[];
};

const MuiDataView = ({getTableData, countRows, varsRowsPerPage}: PropsMuiDataView) => {
    const [currentPage, setCurrentPage] = useState(0);
    const {data, isLoading, error} = getTableData(currentPage);

    if (isLoading) {
        return <div>Loading...</div>;
    }

    const table: DataTable = data ? DataTable.getTableFrom(data) : new DataTable([]);

    if (!table.rows.length || error) {
        return <div>No data available</div>;
    }

    return (
        <div>
            <MuiTable table={table} />
            <MuiPagination
                countRows={countRows}
                currentPage={currentPage}
                varsRowsPerPage={varsRowsPerPage}
                onPageChanged={setCurrentPage}
            />
        </div>
    );
}

export default MuiDataView;