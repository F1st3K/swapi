import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import DataTable, {DataRow} from "../../Types/DataTable";

import MuiTableEditRow from "../MuiTableEditRow/MuiTableEditRow";

type MuiTableProps = {
    table: DataTable;
}

const MuiTable = ({table}: MuiTableProps) => {
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
                            .map((row :DataRow, i) => {
                                return (<MuiTableEditRow row={row} columns={table.columns} key={i}/>);
                            })}
                    </TableBody>
                </Table>
            </TableContainer>

        </Paper>
    );
}

export default MuiTable;