'use client'

import React from 'react';
import Image from 'next/image';
import RobotImg from './car_test.jpg';

function HomeRobotInfo({setRobotSelected}) {
  return (
    <div className='w-full mt-8 mx-5'>
      <div className='flex'>
        <Image
          src={RobotImg} 
          alt = 'robot'
          width={150}
          height={150}
          className='rounded-full'
        />
        <div className='flex flex-col justify-center content-center pl-5'>
          <h1>Robot: {setRobotSelected.name}</h1>
          <small className='text-gray-400'>Estado: {setRobotSelected.robotStatus}</small>
          <small className='text-gray-400'>Batería: {setRobotSelected.battery}</small>
        </div>
      </div>

      <div className='bg-gray-300 mt-5 p-5'>
          <h1 className='text-center'>INFORMACIÓN ROBOT</h1>
          <p>Id del robot: <b>{setRobotSelected.id}</b></p>
          <p>Nombre del robot: <b>{setRobotSelected.name}</b></p>
          <p>Estado del robot: <b>{setRobotSelected.robotStatus}</b></p>

          <p>Velocidad del robot: <b>{setRobotSelected.velocity}</b> metros/segundo</p>
          <p>Batería del robot: <b>{setRobotSelected.battery}</b></p>
          <p>Tipo del robot: <b>{setRobotSelected.type}</b></p>
      </div>
    </div>
  )
}

export default HomeRobotInfo;