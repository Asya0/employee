import React from "react";
import "./app-info.css";

function AppInfo({ totalEmployees, increaseEmployee }) {
  return (
    <div className="app-info">
      <h1>Учет сотрудников компании </h1>
      <h2>Общее число сотрудников: {totalEmployees} </h2>
      <h2>Премию получат: {increaseEmployee}</h2>
    </div>
  );
}

export default AppInfo;
