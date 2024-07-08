import React from "react";
import "./employee-list.css";
import EmployeeListItem from "../employee-list-item/employee-list-item";

function EmployeeList({ data }) {
  const elements = data.map((item) => {
    return <EmployeeListItem {...item} />;
  });
  return <ul className="app-list list-group ">{elements}</ul>;
}

export default EmployeeList;
