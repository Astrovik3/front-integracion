
//import { apiBaseURL } from "../api";
//import { useEffect } from "react";
import { robotURL } from "../api";

export const getAllRobots = async function () {
  return await fetch(robotURL, {
    method: 'GET',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': 'http://localhost:3000',
      'Access-Control-Allow-Origin': 'https://localhost:3000',
    },
  })
  .then(res=> {
    if(res.ok) {
      return res.json();
    }
    else throw new Error(JSON.stringify(res));
  });
}

export const postRobot = async function (robot) {
  return await fetch(robotURL, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(robot),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': 'http://localhost:3000',
      'Access-Control-Allow-Origin': 'https://localhost:3000',
    },
  })
  .then(res=> res.json())
}

export const updateRobot = async function (robot, prevStatus) {
  const body = {
    robot: robot,
    user: 'Manny',
    previousRobotStatus: prevStatus
  }
  return await fetch(robotURL + `/${robot.id}`, {
    method: 'PATCH',
    mode: 'cors',
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': 'http://localhost:3000',
      'Access-Control-Allow-Origin': 'https://localhost:3000',
    },
  })
  .then(res=> res.json())
}

export const deleteRobot = async function (robot) {
  return await fetch(robotURL + `/${robot.id}`, {
    method: 'DELETE',
    mode: 'cors',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Origin': 'http://localhost:3000',
      'Access-Control-Allow-Origin': 'https://localhost:3000',
    },
  })
  .then(res=> res.json())
}