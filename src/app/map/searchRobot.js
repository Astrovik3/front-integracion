'use client'

import React from 'react';

//Luego nos llevamos todos los estilos generales a un archivo aparte... 

function SearchRobot({ }) {
  return (
    <div className='w-full bg-gray-500'>
      <div className='flex flex-col justify-center content-center'>
        <h1 className='text-xl font-bold text-center text-white mt-5'>
          BUSCAR ROBOT
          </h1>
      </div>

      <div className='bg-gray-500 mt-2 p-5'>
        <form>
          <label className='block text-white mb-1'>Id</label>
          <input className='w-full h-8 mb-4 rounded outline outline-white p-2' id='outlined-basic' type='text' name='idRobot'/>

          <label className='block text-white mb-1'>Name</label>
          <input className='w-full h-8 mb-4 rounded outline outline-white p-2' id='outlined-basic' type='text' name='nameRobot'/>

          <label className='block text-white mb-1'>Status</label>
          <input className='w-full h-8 mb-4 rounded outline outline-white p-2' id='outlined-basic' type='text' name='statusRobot'/>

          <label className='block text-white mb-1'>Battery</label>
          <input className='w-full h-8 mb-4 rounded outline outline-white p-2' id='outlined-basic' type='text' name='batteryRobot'/>

          <label className='block text-white mb-1'>Velocity (m/s)</label>
          <input className='w-full h-8 mb-4 rounded outline outline-white p-2' id='outlined-basic' type='text' name='velocityRobot'/>

          <button className='text-white rounded font-bold bg-blue-700 py-2 px-4'>
            Buscar
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchRobot;