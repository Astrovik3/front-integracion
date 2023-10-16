'use client'

import React, { useState } from "react";
import HomeRobotInfo from "./homeRobotInfo";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

export default function Home() {
  const [rowData] = useState([
    { make: "Toyota", model: "Celica", price: 35000, campoA: "blabla", campoB: 123 },
    { make: "Ford", model: "Mondeo", price: 32000, campoA: "blabla", campoB: 123 },
    { make: "Porsche", model: "Boxter", price: 72000, campoA: "blabla", campoB: 123 },
    { make: "Ford", model: "Mondeo", price: 32000, campoA: "blabla", campoB: 123 },
    { make: "Porsche", model: "Boxter", price: 72000, campoA: "blabla", campoB: 123 },
    { make: "Ford", model: "Mondeo", price: 32000, campoA: "blabla", campoB: 123 },
    { make: "Porsche", model: "Boxter", price: 72000, campoA: "blabla", campoB: 123 },
    { make: "Ford", model: "Mondeo", price: 32000, campoA: "blabla", campoB: 123 },
    { make: "Porsche", model: "Boxter", price: 72000, campoA: "blabla", campoB: 123 },
    { make: "Ford", model: "Mondeo", price: 32000, campoA: "blabla", campoB: 123 },
    { make: "Porsche", model: "Boxter", price: 72000, campoA: "blabla", campoB: 123 }
  ]);

  const [columnDefs] = useState([
    { field: "make" },
    { field: "model" },
    { field: "price" },
    { field: "campoA" },
    { field: "campoB" }
  ]);

  const [robotSelected, setRobotSelected] = useState('');
  const onSelection = (event) => {
    setRobotSelected(event.api.getSelectedRows()[0]);
  };

  return (
    <div className="flex w-full h-5/6">
      <div className="w-3/5 mt-8 mx-5">
        <h1>ROBOTS</h1>
        <div className="ag-theme-alpine h-5/6 mt-3">
          <AgGridReact
            rowData={rowData}
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
  )
}
