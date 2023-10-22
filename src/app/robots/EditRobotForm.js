'use client'

import React, {useState, useEffect} from 'react'
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

    const [id, setId] = useState(3);
    const [name, setName] = useState(selectedBot);
    const [type, setType] = useState('');
    const [battery, setBattery] = useState(300);
    const [velocity, setVelocity] = useState(2);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 360,
        bgcolor: 'background.paper',
        borderRadius: 3,
        boxShadow: 24,
        p: 4,
    };

    useEffect(() => {
        setName(selectedBot);
    },[selectedBot]);

    return (
        <div className='flex flex-col'>
            <h2 className='text-center'>Editar Robot</h2>
            
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
                sx={{ mb: 2 }}
                >
                ¡Cambios guardados con éxito!
                </Alert>
            </Collapse>

            <label className='block mb-3 font-[500]'>Id</label>
            <input className='w-full h-8 mb-4 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='number' name='idRobot' value={id} onChange={e=>{setId(e.target.value)}}/>

            <label className='block mb-3 font-[500]'>Name</label>
            <input className='w-full h-8 mb-4 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='text' name='nameRobot' value={name} onChange={e=>{setName(e.target.value)}}/>

            <label className='block mb-3 font-[500]'>Type</label>
            <input className='w-full h-8 mb-4 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='text' name='typeRobot' value={type} onChange={e=>{setType(e.target.value)}}/>

            <label className='block mb-3 font-[500]'>Battery</label>
            <input className='w-full h-8 mb-4 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='number' name='batteryRobot' value={battery} onChange={e=>{setBattery(e.target.value)}}/>

            <label className='block mb-3 font-[500]'>Velocity (m/s)</label>
            <input className='w-full h-8 mb-6 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='number' name='velocityRobot' value={velocity} onChange={e=>{setVelocity(e.target.value)}}/>
            
            <div className='flex flex-row justify-between'>
                <button className='p-2 rounded-l-lg bg-red-600 w-36 font-semibold text-white' onClick={handleOpenModal}>Eliminar Robot</button>
                <button className='p-2 rounded-r-lg bg-[#273B66] w-36 font-semibold text-white' onClick={()=> setOpenAlert(true)}>Guardar Cambios</button>
            </div>
            
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
                            <button className='p-2 rounded bg-gray-200' onClick={()=> setOpenModal(false)}>Cancelar</button>
                            <button className='p-2 rounded bg-red-600 text-white ml-2'>Eliminar</button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default EditRobotForm