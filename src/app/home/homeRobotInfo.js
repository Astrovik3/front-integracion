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
          <h1>Robot: {setRobotSelected.make}</h1>
          <small className='text-gray-400'>Model: {setRobotSelected.model}</small>
          <small className='text-gray-400'>Price: {setRobotSelected.price}</small>
        </div>
      </div>

      <div className='bg-gray-200 mt-5 p-5'>
          <h1 className='text-center'>ROBOT 1</h1>
          <p>Información A del robot</p>
          <p>Información B del robot</p>
          <p>Información C del robot</p>
          <p>Información D del robot</p>
          <p>Después esto se organiza bien cuando se tengan todos los campos definidos.</p>
      </div>
    </div>
  )
}

export default HomeRobotInfo;