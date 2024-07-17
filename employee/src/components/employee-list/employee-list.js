import React from "react";
import "./employee-list.css";
import EmployeeListItem from "../employee-list-item/employee-list-item";

function EmployeeList({ data, onDelete, onToggleIncrease, onToggleRise }) {
  const elements = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeeListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleIncrease={() => onToggleIncrease(id)}
        onToggleRise={() => onToggleRise(id)}
      />
    );
  });

  return <ul className="app-list list-group ">{elements}</ul>;
}

export default EmployeeList;
