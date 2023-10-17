'use client'

import React, {useState} from 'react'
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

function CreateRobotForm() {

    const [openAlert, setOpenAlert] = useState(false);

    return (
        <div>
            <h2 className='text-center'>Create Mode</h2>
            <div className='flex'>
                <button className='p-2 rounded bg-gray-400 w-full' onClick={()=> setOpenAlert(true)}>Guardar</button>
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
                ¡Nuevo Robot creado con éxito!
                </Alert>
            </Collapse>
        </div>
    )
}

export default CreateRobotForm