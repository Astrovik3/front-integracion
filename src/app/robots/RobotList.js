'use client'

import React from 'react';

const robots = [
    {name: 'Robot 1'},
    {name: 'Robot 2'},
    {name: 'Robot 3'},
    {name: 'Robot 4'}
]

function RobotList({editMode, setMode, selectedBot, setSelectedBot}) {

    const handleBotSelection = (botName) => {
        setSelectedBot(botName);
    };

    return (
        <ul className="divide-y min-w-fit w-64 bg-white overflow-auto">
            { robots.map(robot => 
            <li className={`${selectedBot === robot.name && editMode ? 'bg-gray-400' : 'bg-white'}`}>
                <button
                    className="w-full"
                    onClick={() => {
                        handleBotSelection(robot.name)
                        setMode(true)
                    }}
                >
                    <h4 className="p-2 text-left">{robot.name}</h4>
                </button>
            </li>
            )}
        </ul>
    );
}

export default RobotList;