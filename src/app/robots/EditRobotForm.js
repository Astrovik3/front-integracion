'use client'

import React, {useState, useEffect} from 'react'
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Backdrop from '@mui/material/Backdrop';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { deleteRobot, updateRobot } from '../networking/endpoints/robots';
import RobotFormSelector from './RobotFormSelector';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function EditRobotForm({selectedBot, setSelectedBot, handleCont}) {

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const [openAlert, setOpenAlert] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [type, setType] = useState('');

    const [battery, setBattery] = useState(undefined);
    const handleBattery = (value) =>{
        setBattery(value < 0 ? 0 : (value > 1 ? 1 : parseFloat(value)));
    };

    const [batteryConsumption, setConsumption] = useState(undefined); 
    const handleConsumption = (value) =>{
        setConsumption(value < 0 ? 0 : (value > 1 ? 1 : parseFloat(value)));
    };

    const [velocity, setVelocity] = useState(undefined);
    const [robotStatus, setStatus] = useState('');

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
        setConsumption(parseFloat(selectedBot.batteryConsumption));
        setVelocity(selectedBot.velocity);
        setStatus(selectedBot.robotStatus);
    },[selectedBot]);

    useEffect(() => {
        setDisabled(selectedBot.id === '' || (name === selectedBot.name && type === selectedBot.type && battery === selectedBot.battery && batteryConsumption === selectedBot.batteryConsumption && velocity === selectedBot.velocity && robotStatus === selectedBot.robotStatus));
        setDeleteDisabled(selectedBot.id === '')
    },[name, type, battery, batteryConsumption, velocity, robotStatus]);

    function getRobot() {
        return {
            id: id,
            name: name,
            type: type,
            battery: battery,
            batteryConsumption: batteryConsumption,
            velocity: velocity,
            robotStatus: robotStatus
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
            })
            .finally(()=> setDeleteDisabled(false));
    }

    const onDelete = () => {
        setDeleteDisabled(true);
        setDisabled(true);
        deleteRobot(selectedBot)
            .then(res => {
                handleCloseModal();
                handleCont();
                setSelectedBot({id: '', name: '', type: '', velocity: undefined, battery: undefined, batteryConsumption: undefined, robotStatus: ''});
            });
    }

    return (
        <div className='flex flex-col w-4/12'>
            <h2 className='text-center'>Editar Robot</h2>

            <label className='block mb-3 font-[500]'>Id</label>
            <input className='w-full h-8 mb-4 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='text' name='idRobot' value={id} disabled={true}/>

            <label className='block mb-3 font-[500]'>Name</label>
            <input className='w-full h-8 mb-4 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='text' name='nameRobot' value={name} onChange={e=>{setName(e.target.value)}}/>

            <label className='block mb-3 font-[500]'>Robot Status</label>
            <select className='w-full h-8 mb-6 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' 
                name='statusRobot'
                onChange={e=> setStatus(e.target.value)}
                value={robotStatus}
            > 
                <option value= 'AVAILABLE' className='h-8'>AVAILABLE</option>
                <option value= 'LOW_BATTERY' className='h-8'>LOW BATTERY</option>
                <option value= 'BROKEN' className='h-8'>BROKEN</option>
            </select>

            <label className='block mb-3 font-[500]'>Type</label>
            <input className='w-full h-8 mb-4 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='text' name='typeRobot' value={type} onChange={e=>{setType(e.target.value)}}/>

            <label className='block mb-3 font-[500]'>Battery (Entre 0 y 1)</label>
            <input className='w-full h-8 mb-4 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='number' name='batteryRobot' value={battery} onChange={e=>{handleBattery(e.target.value)}}/>

            <label className='block mb-3 font-[500]'>Battery Consuption (Entre 0 y 1)</label>
            <input className='w-full h-8 mb-4 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='number' name='batteryConsumptionRobot' value={batteryConsumption} onChange={e=>{handleConsumption(e.target.value)}}/>

            <label className='block mb-3 font-[500]'>Velocity (m/s)</label>
            <input className='w-full h-8 mb-6 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='number' name='velocityRobot' value={velocity} onChange={e=>{setVelocity(e.target.value)}}/>
            
            <div className='flex flex-row justify-between space-x-3'>
                <button 
                    className={`${deleteDisabled ? 'bg-gray-600' : 'bg-red-600'} p-2 rounded-l-lg flex w-full justify-center font-semibold text-white`}
                    onClick={handleOpenModal} 
                    disabled={deleteDisabled}>
                        Eliminar Robot
                </button>
                <button 
                    className={`${disabled ? 'bg-gray-400' : 'bg-[#273B66]'} p-2 rounded-r-lg flex w-full justify-center font-semibold text-white`}
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

            <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    ¡Cambios guardados con éxito!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default EditRobotForm