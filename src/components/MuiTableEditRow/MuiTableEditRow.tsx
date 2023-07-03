import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import {DataColumn, DataRow} from "../../Types/DataTable";
import {Button} from "@mui/material";
import MuiEditRowModal from "../MuiEditRowModal/MuiEditRowModal";
import {useState} from "react";

type PropsMuiTableEditRow = {
    row: DataRow;
    columns: DataColumn[];
    key: number;
}

const MuiTableEditRow = ({row, columns, key}: PropsMuiTableEditRow) => {
    const [openModal, setOpenModal] = useState(false);
    const [editRow, setEditRow] = useState(row);
    const handleEdit = () => setOpenModal(true);

    let i = -1;
    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={key}>
            {editRow.map((cell) => {
                i++;
                return (
                    <TableCell key={i}>
                        {cell}
                    </TableCell>
                );
            })}
            <TableCell key={i+1}>
                <Button onClick={handleEdit}>Edit</Button>
            </TableCell>
            <MuiEditRowModal
                open={openModal}
                setOpen={setOpenModal}
                row={editRow}
                setRow={setEditRow}
                columns={columns}
            />
        </TableRow>
    );
}
export default MuiTableEditRow;