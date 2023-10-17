'use client'

import React, {useState} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

function EditRobotForm({selectedBot}) {

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const [openAlert, setOpenAlert] = useState(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        borderRadius: 1,
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <h2 className='text-center'>Edit Mode</h2>
            <p>{selectedBot}</p>
            <div className='flex flex-row justify-between'>
                <button className='p-2 rounded bg-gray-600 w-36' onClick={handleOpenModal}>Eliminar Robot</button>
                <button className='p-2 rounded bg-gray-400 w-36' onClick={()=> setOpenAlert(true)}>Guardar Cambios</button>
            </div>
            <Collapse in={openAlert}>
                <Alert
                action={
                    <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                        setOpenAlert(false);
                    }}
                    >
                    <CloseIcon fontSize="inherit" />
                    </IconButton>
                }
                sx={{ my: 2 }}
                >
                ¡Cambios guardados con éxito!
                </Alert>
            </Collapse>
            <Modal
                open={openModal}
                onClose={handleCloseModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={openModal}>
                    <Box sx={style}>
                        <h3>¿Esta seguro que quiere eliminar el Robot: {selectedBot}?</h3>
                        <div className='flex flex-row justify-end mt-2'>
                            <button className='p-2 rounded bg-gray-400'>Cancelar</button>
                            <button className='p-2 rounded bg-gray-600 ml-2'>Eliminar</button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default EditRobotForm