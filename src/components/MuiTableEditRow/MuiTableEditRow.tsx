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

    const handleEdit = () => setOpenModal(true);

    let i = -1;
    return (
        <TableRow hover role="checkbox" tabIndex={-1} key={key}>
            {row.map((cell) => {
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
            <MuiEditRowModal open={openModal} handleClose={() => setOpenModal(false)}/>
        </TableRow>
    );
}
export default MuiTableEditRow;