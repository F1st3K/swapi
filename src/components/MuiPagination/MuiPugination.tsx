import TablePagination from "@mui/material/TablePagination";
import * as React from "react";
import {useState} from "react";

type MuiPuginationProps = {
    countRows: number;
    currentPage: number;
    varsRowsPerPage: number[];
    onPageChanged?: (newPage: number) => void;
    onRowsPerPageChanged?: (newRowsPerPage: number) => void;
}

const MuiPugination = ({countRows, currentPage, varsRowsPerPage, onPageChanged, onRowsPerPageChanged}:MuiPuginationProps) => {
    const [rowsPerPage, setRowsPerPage] = useState(varsRowsPerPage[0]);

    const handleChangePage = (event: unknown, newPage: number) => {
        if (onPageChanged) onPageChanged(newPage);
    }

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        if (onRowsPerPageChanged) onRowsPerPageChanged(rowsPerPage);
    };
    return (
        <TablePagination
            rowsPerPageOptions={varsRowsPerPage}
            component="div"
            count={countRows}
            rowsPerPage={rowsPerPage}
            page={currentPage}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    );
}

export default MuiPugination;