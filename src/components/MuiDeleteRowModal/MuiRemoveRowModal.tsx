import {Box, Button, Modal} from "@mui/material";

type PropsMuiRemoveRowModal = {
    open: boolean;
    setOpen: (open: boolean) => void;
    removeRow: () => void;
}

const MuiRemoveRowModal = ({open, setOpen, removeRow}: PropsMuiRemoveRowModal) => {
    const handleRemove = () => {
        removeRow();
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
                Are you sure you want to remove this row?
                <Button onClick={handleRemove} variant="outlined" color="success">Remove</Button>
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
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default MuiRemoveRowModal;