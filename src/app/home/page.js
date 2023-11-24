'use client'

import React, { useEffect, useState } from "react";
import HomeRobotInfo from "./homeRobotInfo";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { getAllRobots } from "../networking/endpoints/robots";
import NavBar from "../components/navBar";

export default function Home() {
  const [columnDefs] = useState([
    { field: "id" },
    { field: "name" },
    { field: "velocity" },
    { field: "robotStatus" },
    { field: "battery" },
    { field: "type" }
  ]);

  const [data, setData] = useState();

  const [robotSelected, setRobotSelected] = useState('');
  const onSelection = (event) => {
    setRobotSelected(event.api.getSelectedRows()[0]);
  };

  useEffect(() => {
    const findData = async () => {
      setData(await getAllRobots());
    };
    findData();
  }, []);

  return (
    <>
      <NavBar />
      <div className="flex w-full h-5/6">
        <div className="w-3/5 mt-8 mx-5">
          <h2>ROBOTS</h2>
          <div className="ag-theme-alpine h-5/6 mt-3">
            <AgGridReact
              rowData={data}
              columnDefs={columnDefs}
              rowSelection="multiple"
              onSelectionChanged={onSelection}
            ></AgGridReact>
          </div>
        </div>
        <div className="flex justify-end w-2/5">
          <HomeRobotInfo setRobotSelected={robotSelected} />
        </div>
      </div>

    </>
  )
}
