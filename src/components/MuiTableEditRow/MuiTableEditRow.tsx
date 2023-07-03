import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import * as React from "react";
import {DataColumn, DataRow} from "../../Types/DataTable";
import {IconButton} from "@mui/material";
import MuiEditRowModal from "../MuiEditRowModal/MuiEditRowModal";
import EditIcon from '@mui/icons-material/Edit';
import {useState} from "react";

type PropsMuiTableEditRow = {
    row: DataRow;
    columns: DataColumn[];
    key: number;
}

const MuiTableEditRow = ({row, columns, key}: PropsMuiTableEditRow) => {
    const [openEdit, setOpenEdit] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [editRow, setEditRow] = useState(row);
    const handleEdit = () => setOpenEdit(true);

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
                <IconButton onClick={handleEdit}>
                    <EditIcon/>
                </IconButton>
                <IconButton onClick={handleEdit}>
                    <EditIcon/>
                </IconButton>
            </TableCell>
            <MuiEditRowModal
                open={openEdit}
                setOpen={setOpenEdit}
                row={editRow}
                setRow={setEditRow}
                columns={columns}
            />
            <MuiEditRowModal
                open={openEdit}
                setOpen={setOpenEdit}
                row={editRow}
                setRow={setEditRow}
                columns={columns}
            />
        </TableRow>
    );
}
export default MuiTableEditRow;