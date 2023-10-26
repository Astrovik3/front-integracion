'use client'

import React, {useState, useEffect} from 'react'
import Snackbar from '@mui/material/Snackbar';
import { postRobot } from '../networking/endpoints/robots';
import MuiAlert from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

function CreateRobotForm({handleCont}) {

    const [openAlert, setOpenAlert] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenAlert(false);
    };

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
            });
    }

    useEffect(() => {
        setDisabled(name === '' || type === '' || !battery || !batteryConsumption || !velocity)
    },[name, type, battery, batteryConsumption, velocity]);

    return (
        <div className='flex flex-col w-4/12'>
            <h2 className='text-center'>Crear Nuevo Robot</h2>

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
            <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    ¡Nuevo Robot creado con éxito!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default CreateRobotForm
