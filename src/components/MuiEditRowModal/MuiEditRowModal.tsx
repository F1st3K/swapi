import {Box, Modal} from "@mui/material";
import {useState} from "react";

type PropsMuiEditRowModal = {
    open: boolean;
    handleClose: () => void;
}

const MuiEditRowModal = ({open, handleClose}: PropsMuiEditRowModal) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box>

            </Box>
        </Modal>
    );
}

export default MuiEditRowModal;