'use client'

import React, { useEffect, useState } from "react";
import SearchRobot from "./searchRobot";
import Image from 'next/image';
import MapImg from "./mapaGrande.jpg";
import { getAllRobots } from "../networking/endpoints/robots";
import NavBar from "../components/navBar";

export default function Map() {

  //LOS PARÁMETROS DE X E Y VAN A TENER QUE SER MODIFICADOS ACORDE AL TAMAÑO DEL MAPA...
  //EL MAPA ES 2.1 VECES MÁS GRANDE QUE LAS MEDIDAS DEL MAPA QUE USA PEDRO, 342 x 218...
  //LOS X e Y QUE VENGAN DEL AUTO VAN A TENER QUE SER MULTIPLICADOS POR 2,1 PARA ENCAJAR BIEN...
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
    { x: 166, y: 115 }
  ];

  const [data, setData] = useState([]);
  const [searchRobot, setSearchRobot] = useState({ id: '', name: '' })

  useEffect(() => {
    const findData = async () => {
      const contenedor = document.getElementById('contenedor');
      while (contenedor.firstChild) {
        contenedor.removeChild(contenedor.firstChild);
      }

      setData(await getAllRobots());
      console.log("se ejecutó la llamada.");
    };
    const intervalId = setInterval(findData, 5000);
    return () => {
      clearInterval(intervalId);
    }
  }, []);

  const setStatusBgColor = (robot) => {
    if (robot.id === searchRobot.id || robot.name === searchRobot.name) return 'red';
    if (robot.robotStatus == "RETURNING") return "lightblue";
    if (robot.robotStatus == "BUSY") return "orange";
    return "#66ff00";
  };

  const setStatusShadowColor = (robot) => {
    if (robot.robotStatus == "RETURNING") return "0 0 5px blue, 0 0 10px blue, 0 0 20px blue";
    if (robot.robotStatus == "BUSY") return "0 0 5px yellow, 0 0 10px yellow, 0 0 20px yellow";
    return "0 0 5px green, 0 0 10px green, 0 0 20px green";
  };

  return (
    <>
      <NavBar />
      <div className="flex w-full h-5/6">
        <div className="w-1/3 h-full mt-8 mx-5">
          <div className="h-full">
            <SearchRobot setSearchRobot={setSearchRobot} />
          </div>
        </div>
        <div className="flex relative h-full w-2/3 mt-8 mr-5 justify-center">
          <div className="relative" style={{ width: 719, height: 458 }}>
            <Image
              src={MapImg}
              alt='map'
              width={719}
              height={458}
            />
            <div id="contenedor">
              {data.filter(x => x.x !== null).forEach((robot, index) => {
                const divObjeto = document.createElement("div");
                divObjeto.id = index;
                divObjeto.style.position = 'absolute';
                divObjeto.style.left = robot.x * 2.1 + 'px';
                divObjeto.style.top = Math.abs(robot.y) * 2.1 + 'px'; //+ 2
                divObjeto.style.width = '7px';
                divObjeto.style.height = '7px';
                divObjeto.style.background = setStatusBgColor(robot);
                divObjeto.style.borderRadius = '50%';
                divObjeto.style.boxShadow = setStatusShadowColor(robot);
                const contenedor = document.getElementById('contenedor');
                contenedor.appendChild(divObjeto);
              })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
/** */