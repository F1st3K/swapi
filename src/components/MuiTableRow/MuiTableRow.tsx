import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import {DataRow} from "../../Types/DataTable";

type PropsMuiTableRow = {
    row: DataRow;
    key: number;
}

const MuiTableRow = ({row, key}: PropsMuiTableRow) => {
    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={key}>
            {row.map((cell, i) => {
                return (
                    <TableCell key={i}>
                        {cell}
                    </TableCell>
                );
            })}
        </TableRow>
    );
}

export default MuiTableRow;