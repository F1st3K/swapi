import React, {useState} from "react";
import {getPlanets} from "../services/Swapi";
import DataTable from "../Types/DataTable";
import MuiTable from "../components/MuiTable/MuiTable";
import MuiPagination from "../components/MuiPagination/MuiPugination";

const TablePlanets = () => {
    return <></>;
    // const [currentPage, setCurrentPage] = useState(0);
    // const { data, isLoading } = getPlanets(currentPage);
    //
    //
    // if (isLoading || data === null) {
    //     return <div>Loading...</div>;
    // }
    //
    // const table: DataTable = new DataTable(Object.keys(data.results[0]).map((key) => {return {title: key, type: typeof key}}));
    // data.results.map((row: Array<string>) => {
    //     const d: string[] = Object.values(row).map((cell) => {return cell.toString()});
    //     table.addRow(d);
    // });
    //
    //
    // if (!table.rows.length) {
    //     return <div>No data available</div>;
    // }
    //
    // return (
    //     <div>
    //         <MuiTable table={table} />
    //         <MuiPagination
    //             countRows={data.count}
    //             currentPage={currentPage}
    //             varsRowsPerPage={[10]}
    //             onPageChanged={setCurrentPage}
    //         />
    //     </div>
    // );
}

export default TablePlanets;