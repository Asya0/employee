import React from "react";
import "./employee-list.css";
import EmployeeListItem from "../employee-list-item/employee-list-item";

function EmployeeList({
  data,
  onDelete,
  onToggleIncrease,
  onToggleRise,
  onUpdateSalary,
}) {
  const elements = data.map((item) => {
    const { id, newSalary, ...itemProps } = item;
    return (
      <EmployeeListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleIncrease={() => onToggleIncrease(id)}
        onToggleRise={() => onToggleRise(id)}
        onUpdateSalary={(newSalary) => onUpdateSalary(id, newSalary)}
      />
    );
  });

  return <ul className="app-list list-group ">{elements}</ul>;
}

export default EmployeeList;
