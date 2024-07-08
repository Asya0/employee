import React from "react";
import "./employee-list.css";
import EmployeeListItem from "../employee-list-item/employee-list-item";

function EmployeeList() {
  return (
    <ul className="app-list list-group ">
      <EmployeeListItem />
      <EmployeeListItem />
      <EmployeeListItem />
    </ul>
  );
}

export default EmployeeList;
