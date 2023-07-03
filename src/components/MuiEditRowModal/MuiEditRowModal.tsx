import {Box, Button, Modal} from "@mui/material";
import {DataColumn, DataRow} from "../../Types/DataTable";

type PropsMuiEditRowModal = {
    open: boolean;
    setOpen: (open: boolean) => void;
    row: DataRow;
    setRow: (row: DataRow) => void;
    columns: DataColumn[];
}

const MuiEditRowModal = ({open, setOpen, row, setRow, columns}: PropsMuiEditRowModal) => {
    const handleEdit = () => {
        row[0] = "wertyuytre";
        setRow(row);
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
                <Button onClick={handleEdit}>Edit</Button>
                <Button onClick={handleClose}>Close</Button>
            </Box>
        </Modal>
    );
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default MuiEditRowModal;