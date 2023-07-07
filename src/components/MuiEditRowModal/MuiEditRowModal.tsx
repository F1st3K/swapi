import {Box, Button, Modal, TextField} from "@mui/material";
import {DataColumn, DataRow} from "../../Types/DataTable";

type PropsMuiEditRowModal = {
    open: boolean;
    setOpen: (open: boolean) => void;
    row: DataRow;
    editRow: (row: DataRow) => void;
    columns: DataColumn[];
}

const MuiEditRowModal = ({open, setOpen, row, editRow, columns}: PropsMuiEditRowModal) => {
    let tempRow: DataRow = row.map((cell) => cell);

    const handleEdit = () => {
        editRow(tempRow);
        setOpen(false);
    }
    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                {row.map((cell, i) => {
                    return (
                        <>
                            <TextField
                                id="standard-basic"
                                label={columns[i].title}
                                onChange={(event) => {
                                    tempRow[i] = event.target.value;
                                }}
                                defaultValue={cell}
                                variant="standard"
                            />
                        </>
                    );
                })}
                <Button onClick={handleEdit} variant="outlined" color="success">Edit</Button>
                <Button onClick={handleClose} variant="outlined" color="error">Close</Button>
            </Box>
        </Modal>
    );
}

const style = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default MuiEditRowModal;