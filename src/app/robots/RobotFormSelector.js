'use client'

import React from 'react'
import EditRobotForm from './EditRobotForm';
import CreateRobotForm from './CreateRobotForm';

function RobotFormSelector({editMode, selectedBot}) {

    return (
        <>
            {editMode && 
            <EditRobotForm selectedBot={selectedBot}/>
            }
            {!editMode &&
            <CreateRobotForm/>
            }
        </>
    )
}

export default RobotFormSelector