'use client'

import React from 'react';

function RobotList({ editMode, setMode, selectedBot, setSelectedBot, robotList }) {

  const handleBotSelection = (botName) => {
    setSelectedBot(botName);
  };

  return (
    <ul className="divide-y min-w-fit w-full bg-white">
        {robotList.map(robot =>
            <li key={robot.id} className={`${selectedBot.id === robot.id && editMode ? 'bg-[#C8C8C8]' : 'bg-[#F5F5F5]'}`}>
              <button
                  className="w-full"
                  onClick={() => {
                      handleBotSelection(robot);
                      setMode(false);
                      setMode(true);
                  }}
              >
                  <h6 className="p-2 text-left font-medium">{robot.name}</h6>
              </button>
            </li>
        )}
    </ul>
  );
}

export default RobotList;