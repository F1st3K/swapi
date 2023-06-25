import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DataTable  from "../../Types/DataTable";

type DataTableProps = {
    data: DataTable;
    countRows: number;
    varsRowsPerPage: number[];
    onPageChanged?: (newPage: number) => void;
    onRowsPerPageChanged?: (newRowsPerPage: number) => void;
}

export default function MuiTable({data, countRows, varsRowsPerPage, onPageChanged, onRowsPerPageChanged}: DataTableProps) {
    const [table, setTable] = React.useState(data);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(varsRowsPerPage[0]);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
        alert(newPage);
        if (onPageChanged) onPageChanged(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
        if (onRowsPerPageChanged) onRowsPerPageChanged(rowsPerPage);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {table.columns.map((column, i) => (
                                <TableCell key={i}>
                                    {column.title}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {table.rows
                            .map((row, i) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={i}>
                                        {table.columns.map((column, j) => {
                                            const value = row[j];
                                            return (
                                                <TableCell key={i}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={varsRowsPerPage}
                component="div"
                count={countRows}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}