'use client'

import React, { useEffect, useState } from "react";
import SearchRobot from "./searchRobot";
import Image from 'next/image';
import MapImg from "./mapaGrande.jpg";
import { getAllRobots } from "../networking/endpoints/robots";

export default function Map() {

  //LOS PARÁMETROS DE X E Y VAN A TENER QUE SER MODIFICADOS ACORDE AL TAMAÑO DEL MAPA...
  //EL MAPA ES 2.4 VECES MÁS GRANDE QUE LAS MEDIDAS DEL MAPA QUE USA PEDRO, 342 x 218...
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

  const [data, setData] = useState([]);

  useEffect(() => {
    const findData = async () => {
      setData(await getAllRobots());
    };
    findData();
  }, []);

  //Luego soluciono el tema del document undefined...
  const contenedor = document.getElementById('contenedor');

  return (
    <div className="flex w-full h-5/6">
      <div className="w-1/3 h-full mt-8 mx-5">
        <div className="h-full">
          <SearchRobot></SearchRobot>
        </div>
      </div>
      <div className="flex relative h-full w-2/3 mt-8 mr-5 justify-center">
        <div id="contenedor" className="relative" style={{width:821, height:545}}>
          <Image
            src={MapImg} 
            alt = 'map'
            width={821}
            height={545}
          />
          {data.filter(x => x.x !== null).forEach((robot, index) => {
            const divObjeto = document.createElement("div");
            divObjeto.id = index;
            divObjeto.style.position = 'absolute';
            divObjeto.style.right = robot.x + 'px';
            divObjeto.style.bottom = Math.abs(robot.y) + 'px';
            divObjeto.style.width = '8px';
            divObjeto.style.height = '8px';
            divObjeto.style.background = 'red';
            divObjeto.style.borderRadius = '50%';
            contenedor.appendChild(divObjeto);
          })
          }
        </div>
      </div>
    </div>
  )
}
