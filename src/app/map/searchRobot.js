'use client'

import React from 'react';

//Luego nos llevamos todos los estilos generales a un archivo aparte... 

function SearchRobot({searchRobot, setSearchRobot}) {
  return (
    <div className='w-full bg-[#273B66] h-full rounded pt-5'>
      <div className='flex flex-col justify-center content-center'>
        <h1 className='text-xl font-bold text-center text-white mt-5'>
          BUSCAR ROBOT
          </h1>
      </div>

      <div className='mt-2 p-5'>
          <label className='block text-white mb-1'>Id</label>
          <input className='w-full h-8 mb-4 rounded outline outline-white p-2' id='outlined-basic' type='text' name='idRobot' value={searchRobot.id} onChange={e=> setSearchRobot({id: e.target.value, name: searchRobot.name})}/>

          <label className='block text-white mb-1'>Name</label>
          <input className='w-full h-8 mb-4 rounded outline outline-white p-2' id='outlined-basic' type='text' name='nameRobot' value={searchRobot.name} onChange={e=> setSearchRobot({id: searchRobot.id, name: e.target.value})}/>
      </div>
      <div className='flex flex-col ml-5'>
        <h3 className='text-white font-semibold mb-3 text-lg'>Indice:</h3>
        <div className='flex flex-row items-center'>
          <div className='bg-[#66ff00] w-5 h-5 rounded-full my-2'/><label className='text-white ml-3'>Robot Libre</label>
        </div>
        <div className='flex flex-row items-center'>
          <div className='bg-orange-600 w-5 h-5 rounded-full my-2'/><label className='text-white ml-3'>Robot Ocupado</label>
        </div>
        <div className='flex flex-row items-center'>
          <div className='bg-cyan-400 w-5 h-5 rounded-full my-2'/><label className='text-white ml-3'>Robot Retornando</label>
        </div>
        <div className='flex flex-row items-center'>
          <div className='bg-red-500 w-5 h-5 rounded-full my-2'/><label className='text-white ml-3'>Robot Buscado</label>
        </div>
      </div>
    </div>
  )
}

export default SearchRobot;