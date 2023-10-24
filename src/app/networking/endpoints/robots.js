
//import { apiBaseURL } from "../api";
//import { useEffect } from "react";
import { robotURL } from "../api";

export const getAllRobots = async function () {
  try {
    let response = await fetch(robotURL, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Origin': 'http://localhost:3000',
        'Access-Control-Allow-Origin': 'https://localhost:3000',
      },
    });
    if (response.status === 200) {
      let data = await response.json();
      return data;
    }
    else {
      return 201
    }
  }
  catch (e) {
    console.log(e)
    return 404
  }
}