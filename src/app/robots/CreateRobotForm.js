'use client'

import React, {useState} from 'react'
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

function CreateRobotForm() {

    const [openAlert, setOpenAlert] = useState(false);

    const [id, setId] = useState();
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [battery, setBattery] = useState();
    const [velocity, setVelocity] = useState();

    return (
        <div className='flex flex-col'>
            <h2 className='text-center'>Crear Nuevo Robot</h2>
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
                ¡Nuevo Robot creado con éxito!
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
            
            <div className='flex'>
            <button className='p-2 rounded bg-[#273B66] font-semibold text-white w-full' onClick={()=> setOpenAlert(true)}>Crear Robot</button>
            </div>
            
        </div>
    )
}

export default CreateRobotForm
