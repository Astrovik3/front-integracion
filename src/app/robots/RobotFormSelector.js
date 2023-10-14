'use client'

import React from 'react'

function RobotFormSelector({editMode, selectedBot}) {
    return (
        <>
            {editMode && 
            <div>
                <h2>Edit Mode</h2>
                <p>{selectedBot}</p>
            </div>
            }
            {!editMode &&
            <div>
                <h2>Create Mode</h2>
            </div>
            }
        </>
    )
}

export default RobotFormSelector