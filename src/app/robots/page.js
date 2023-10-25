'use client'

import React, {useState, useEffect} from 'react';
import RobotList from './RobotList';
import RobotFormSelector from './RobotFormSelector';
import SearchIcon from '@mui/icons-material/Search';
import { getAllRobots } from '../networking/endpoints/robots';

export default function RobotsPage() {

    const [robots, setRobots] = useState([]);
    const [editMode, setMode] = useState(true);
    const [selectedBot, setSelectedBot] = useState(
            {id: '', name: '', type: '', velocity: null, battery: ''}
        );
    const [searchedRobots, setSearchedRobots] = useState([]);

    const [cont, setCont] = useState(0);
    const handleCont = () => {
        setCont(cont + 1);
    };

    useEffect(() => {
        getAllRobots() 
            .then(bots=> {
                console.log(bots);
                setRobots(bots);
                setSearchedRobots(bots);
            });
    },[cont]);

    return (
        <main className='flex flex-row h-full overflow-auto'>
            <div className="flex flex-col p-3 bg-[#ECECEC] min-w-fit w-1/4 h-full">
                <div className="flex justify-between items-center">
                    <h2>ROBOTS:</h2>
                    <button 
                        className="p-2 rounded-full bg-[#273B66] text-white"
                        disabled={!editMode}
                        onClick={()=> setMode(false)}
                    >Nuevo Bot</button>
                </div>
                <div className="mb-4">
                    <div className='w-full flex flex-row bg-white rounded p-2'>
                        <input 
                            type='search'  
                            placeholder="Buscar..." 
                            className='w-full outline-none' 
                            onChange={e=> setSearchedRobots(robots.filter(bot=> bot.name.toLowerCase().includes(e.target.value.toLowerCase())))}
                        />
                        <SearchIcon className='m-2'/>
                    </div>
                </div>
                <div className='bg-[#F5F5F5] pb-5 h-full overflow-auto border border-gray-200'>
                    <RobotList
                        editMode={editMode} 
                        setMode={setMode}
                        selectedBot={selectedBot}
                        setSelectedBot={setSelectedBot}
                        robotList={searchedRobots}
                    />
                </div>
            </div>
            <div className='flex w-full justify-center h-full items-center'>
                <RobotFormSelector 
                    editMode={editMode} 
                    setMode={setMode}
                    selectedBot={selectedBot}
                    setSelectedBot={setSelectedBot}
                    handleCont={handleCont}
                />
            </div>
        </main>
    )
}