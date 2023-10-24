'use client'

import React, { useEffect, useState } from "react";
import SearchRobot from "./searchRobot";
import Image from 'next/image';
import MapImg from "./mapaGrande.jpg";

export default function Map() {
  //const [robotSelected, setRobotSelected] = useState('');

  const auto1 = [
    { x: 10, y: 10 },
    { x: 30, y: 25 },
    { x: 30, y: 55 },
    { x: 28, y: 80 },
    { x: 28, y: 100 },
    { x: 28, y: 140 },
    { x: 28, y: 165 },
    { x: 26, y: 185 },
    { x: 24, y: 200 },
    { x: 20, y: 220 },
    { x: 166, y: 115}
  ];

  const [position, setPosition] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if(position < auto1.length -1){
        setPosition(position + 1);
      }/*else{
        setPosition(0);
      }*/
    }, 1500);

    return () => {
      clearInterval(intervalId);
    };
  }, [position]);

  return (
    <div className="flex w-full h-5/6">
      <div className="w-1/3 h-full mt-8 mx-5">
        <div className="h-full">
          <SearchRobot></SearchRobot>
        </div>
      </div>
      <div className="relative h-full w-2/3 mt-8 mr-5">
        <Image
          src={MapImg} 
          alt = 'map'
          width={919}
          height={545}
        />
        <div
          style={{
            position: 'absolute',
            right: auto1[position].x + 'px',
            bottom: auto1[position].y + 'px',
            width: '10px',
            height: '10px',
            background: 'red',
            borderRadius: '50%',
          }}
        ></div>
      </div>
    </div>
  )
}
