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
import { deleteRobot, updateRobot } from '../networking/endpoints/robots';

function EditRobotForm({selectedBot, setSelectedBot, handleCont}) {

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const [openAlert, setOpenAlert] = useState(false);

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [battery, setBattery] = useState('');
    const [velocity, setVelocity] = useState(0);

    const [disabled, setDisabled] = useState(true);
    const [deleteDisabled, setDeleteDisabled] = useState(false);

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
        setId(selectedBot.id);
        setName(selectedBot.name);
        setType(selectedBot.type);
        setBattery(parseFloat(selectedBot.battery));
        setVelocity(selectedBot.velocity);
    },[selectedBot]);

    useEffect(() => {
        setDisabled(selectedBot.id === '' || (name === selectedBot.name && type === selectedBot.type && battery === selectedBot.battery && velocity === selectedBot.velocity));
    },[name, type, battery, velocity]);

    function getRobot() {
        return {
            id: id,
            name: name,
            type: type,
            battery: battery,
            velocity: velocity
        };
    }

    const onSave = () => {
        setDisabled(true);
        setDeleteDisabled(true);
        const robot = getRobot();
        updateRobot(robot)
            .then(res=> {
                setOpenAlert(true)
                handleCont();
            });
    }

    const onDelete = () => {
        setDeleteDisabled(true);
        setDisabled(true);
        deleteRobot(selectedBot)
            .then(res => {
                handleCloseModal();
                handleCont();
                setSelectedBot({id: '', name: '', type: '', velocity: null, battery: ''});
            });
    }

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
            <input className='w-full h-8 mb-4 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='text' name='idRobot' value={id} disabled={true}/>

            <label className='block mb-3 font-[500]'>Name</label>
            <input className='w-full h-8 mb-4 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='text' name='nameRobot' value={name} onChange={e=>{setName(e.target.value)}}/>

            <label className='block mb-3 font-[500]'>Type</label>
            <input className='w-full h-8 mb-4 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='text' name='typeRobot' value={type} onChange={e=>{setType(e.target.value)}}/>

            <label className='block mb-3 font-[500]'>Battery</label>
            <input className='w-full h-8 mb-4 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='number' name='batteryRobot' value={battery} onChange={e=>{setBattery(e.target.value)}}/>

            <label className='block mb-3 font-[500]'>Velocity (m/s)</label>
            <input className='w-full h-8 mb-6 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='number' name='velocityRobot' value={velocity} onChange={e=>{setVelocity(e.target.value)}}/>
            
            <div className='flex flex-row justify-between'>
                <button 
                    className={`${deleteDisabled ? 'bg-gray-600' : 'bg-red-600'} p-2 rounded-l-lg w-36 font-semibold text-white`}
                    onClick={handleOpenModal} 
                    disabled={deleteDisabled}>
                        Eliminar Robot
                </button>
                <button 
                    className={`${disabled ? 'bg-gray-400' : 'bg-[#273B66]'} p-2 rounded-r-lg w-36 font-semibold text-white`}
                    onClick={onSave} 
                    disabled={disabled}>
                        Guardar Cambios
                </button>
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
                        <h3>¿Esta seguro que quiere eliminar el Robot: {selectedBot.name}?</h3>
                        <div className='flex flex-row justify-end mt-2'>
                            <button className='p-2 rounded bg-gray-200' onClick={handleCloseModal}>Cancelar</button>
                            <button className='p-2 rounded bg-red-600 text-white ml-2' onClick={onDelete}>Eliminar</button>
                        </div>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default EditRobotForm