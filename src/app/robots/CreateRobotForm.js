'use client'

import React, {useState, useEffect} from 'react'
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { postRobot } from '../networking/endpoints/robots';

function CreateRobotForm({handleCont, setMode}) {

    const [openAlert, setOpenAlert] = useState(false);

    const [name, setName] = useState('');
    const [type, setType] = useState('');

    const [battery, setBattery] = useState(null);
    const handleBattery = (value) =>{
        setBattery(value < 0 ? 0 : (value > 1 ? 1 : parseFloat(value)));
    };
    
    const [batteryConsumption, setConsumption] = useState(null); 
    const handleConsumption = (value) =>{
        setConsumption(value < 0 ? 0 : (value > 1 ? 1 : parseFloat(value)));
    };

    const [velocity, setVelocity] = useState(null);

    const [disabled, setDisabled] = useState(true);

    function getNewRobot() {
        return {
            name: name,
            type: type,
            battery: battery,
            batteryConsumption: batteryConsumption,
            velocity: velocity
        };
    }

    const onClick = () => {
        setDisabled(true);
        const robot = getNewRobot();
        postRobot(robot)
            .then(res=> {
                console.log(res);
                setOpenAlert(true);
                handleCont();
                setMode(true);
            });
    }

    useEffect(() => {
        setDisabled(name === '' || type === '' || !battery || !batteryConsumption || !velocity)
    },[name, type, battery, batteryConsumption, velocity]);

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

            <label className='block mb-3 font-[500]'>Name</label>
            <input className='w-full h-8 mb-4 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='text' name='nameRobot' value={name} onChange={e=>{setName(e.target.value)}}/>

            <label className='block mb-3 font-[500]'>Type</label>
            <input className='w-full h-8 mb-4 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='text' name='typeRobot' value={type} onChange={e=>{setType(e.target.value)}}/>

            <label className='block mb-3 font-[500]'>Battery (Entre 0 y 1)</label>
            <input className='w-full h-8 mb-4 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='number' name='batteryRobot' value={battery} onChange={e=>{handleBattery(e.target.value)}}/>

            <label className='block mb-3 font-[500]'>Battery Consuption (Entre 0 y 1)</label>
            <input className='w-full h-8 mb-4 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='number' name='batteryConsumptionRobot' value={batteryConsumption} onChange={e=>{handleConsumption(e.target.value)}}/>

            <label className='block mb-3 font-[500]'>Velocity (m/s)</label>
            <input className='w-full h-8 mb-6 rounded outline outline-[1px] outline-gray-400 outline-offset-4 p-2' type='number' name='velocityRobot' value={velocity} onChange={e=>{setVelocity(e.target.value)}}/>
            
            <div className='flex'>
            <button 
                className={`${disabled ? 'bg-gray-300' : 'bg-[#273B66]'} p-2 rounded font-semibold text-white w-full`}
                disabled={disabled} 
                onClick={onClick}
            >
                Crear Robot
            </button>
            </div>
            
        </div>
    )
}

export default CreateRobotForm
