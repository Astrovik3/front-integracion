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
          <label className='block text-white mb-2'>Texto campo A</label>
          <input id='outlined-basic' type='text' name='smalla'/><br/><br/>

          <label className='block text-white mb-2'>Texto campo B</label>
          <input id='outlined-basic' type='text' name='smallb'/><br/><br/>

          <label className='block text-white mb-2'>Texto campo C</label>
          <input id='outlined-basic' type='text' name='smallc'/><br/><br/>

          <label className='block text-white mb-2'>Texto campo D</label>
          <input id='outlined-basic' type='text' name='smalld'/><br/><br/>

          <label className='block text-white mb-2'>Texto campo E</label>
          <input id='outlined-basic' type='text' name='smalle'/><br/><br/>

          <button class='text-white rounded font-bold bg-blue-700 py-2 px-4'>
            Buscar
          </button>
        </form>
      </div>
    </div>
  )
}

export default SearchRobot;