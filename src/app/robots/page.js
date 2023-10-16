'use client'

import React, {useState} from 'react';
import Image from 'next/image';
import RobotList from './RobotList';
import RobotFormSelector from './RobotFormSelector';

export default function RobotsPage() {

    const [editMode, setMode] = useState(true);
    const [selectedBot, setSelectedBot] = useState('Robot 1');

    return (
        <main>
            <div className='flex flex-row'>
                <div className="flex flex-col p-3 bg-slate-200 min-w-fit w-64 h-full">
                    <div className="flex justify-between items-center">
                        <h2>ROBOTS:</h2>
                        <button 
                            className="p-2 bg-white rounded-full"
                            disabled={!editMode}
                            onClick={()=> setMode(false)}
                        >Nuevo Bot</button>
                    </div>
                    <div className="my-3">
                        <form className='w-full flex flex-row bg-white rounded p-2'>
                            <input type='text'  placeholder="Buscar..." className='w-full'></input>
                            <button type='submit'>
                                <Image 
                                    src='/public/🦆 icon _magnifying glass_.svg' 
                                    alt = 'search'
                                    width={20} 
                                    height={20} 
                                />
                            </button>
                        </form>
                    </div>
                    <RobotList
                        editMode={editMode} 
                        setMode={setMode}
                        selectedBot={selectedBot}
                        setSelectedBot={setSelectedBot}
                    />
                </div>
                <div className='w-full flex '>
                    <RobotFormSelector 
                        editMode={editMode} 
                        selectedBot={selectedBot}
                    />
                </div>
            </div>
        </main>
    )
}