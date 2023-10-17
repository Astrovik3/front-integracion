'use client'

import React, {useState} from 'react';
import RobotList from './RobotList';
import RobotFormSelector from './RobotFormSelector';
import SearchIcon from '@mui/icons-material/Search';

const robots = [
    { name: 'Robot 1' },
    { name: 'Robot 2' },
    { name: 'Robot 3' },
    { name: 'Robot 4' }
]

export default function RobotsPage() {

    const [editMode, setMode] = useState(true);
    const [selectedBot, setSelectedBot] = useState('Robot 1');
    const [searchedRobots, setSearchedRobots] = useState(robots);

    return (
        <main className='flex flex-row h-full'>
            <div className="flex-1 p-3 bg-slate-200 min-w-fit w-1/4 h-full">
                <div className="flex justify-between items-center">
                    <h2>ROBOTS:</h2>
                    <button 
                        className="p-2 bg-white rounded-full"
                        disabled={!editMode}
                        onClick={()=> setMode(false)}
                    >Nuevo Bot</button>
                </div>
                <div className="my-3">
                    <div className='w-full flex flex-row bg-white rounded p-2'>
                        <input 
                            type='text'  
                            placeholder="Buscar..." 
                            className='w-full' 
                            onChange={e=> setSearchedRobots(robots.filter(bot=> bot.name.toLowerCase().startsWith(e.target.value.toLowerCase())))}
                        />
                        <SearchIcon className='m-2'/>
                    </div>
                </div>
                <RobotList
                    editMode={editMode} 
                    setMode={setMode}
                    selectedBot={selectedBot}
                    setSelectedBot={setSelectedBot}
                    robotList={searchedRobots}
                />
            </div>
            <div className='flex w-full justify-center h-full items-center'>
                <RobotFormSelector 
                    editMode={editMode} 
                    selectedBot={selectedBot}
                />
            </div>
        </main>
    )
}