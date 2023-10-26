'use client'

import React from 'react'
import EditRobotForm from './EditRobotForm';
import CreateRobotForm from './CreateRobotForm';

function RobotFormSelector({editMode, selectedBot, setSelectedBot, handleCont}) {

    return (
        <>
            {editMode && 
            <EditRobotForm selectedBot={selectedBot} setSelectedBot={setSelectedBot} handleCont={handleCont}/>
            }
            {!editMode &&
            <CreateRobotForm handleCont={handleCont}/>
            }
        </>
    )
}

export default RobotFormSelector