'use client'

import React from 'react';

function RobotList({ editMode, setMode, selectedBot, setSelectedBot, robotList }) {

  const handleBotSelection = (botName) => {
    setSelectedBot(botName);
  };

  return (
    <ul className="divide-y min-w-fit w-fill bg-white overflow-auto">
        {robotList.map(robot =>
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