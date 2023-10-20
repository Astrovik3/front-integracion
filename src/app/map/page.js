'use client'

import React, { useEffect, useState } from "react";
import SearchRobot from "./searchRobot";

export default function Map() {
  //const [robotSelected, setRobotSelected] = useState('');

  const auto1 = [
    { x: 10, y: 10 },
    { x: 30, y: 25 },
    { x: 55, y: 35 },
    { x: 75, y: 80 },
    { x: 90, y: 85 },
    { x: 110, y: 100 },
    { x: 140, y: 105 },
    { x: 160, y: 145 },
    { x: 185, y: 175 },
    { x: 190, y: 195 }
  ];

  const [position, setPosition] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if(position < auto1.length -1){
        setPosition(position + 1);
      }/*else{
        setPosition(0);
      }*/
    }, 1000);

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
      <div className="relative h-full w-2/3 mt-8 mr-5 bg-slate-300">
        <p>THE MAP!</p>
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
