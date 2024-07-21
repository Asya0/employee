import React, { useState } from "react";
import "./employee-list-item.css";

const EmployeeListItem = (props) => {
  const {
    name,
    salary,
    onDelete,
    onToggleIncrease,
    onToggleRise,
    increase,
    rise,
    onUpdateSalary,
  } = props;

  let classNames = "list-group-item d-flex justify-content-between";

  if (increase) {
    classNames += " increase";
  }
  if (rise) {
    classNames += " like";
  }

  const [localSalary, setLocalSalary] = useState(salary);

  const handleChangeSalary = (e) => {
    const newSalary = parseInt(e.target.value, 10) || 0;
    setLocalSalary(newSalary);
    onUpdateSalary(newSalary); // Передача нового значения вверх
  };

  return (
    <li className={classNames}>
      <span className="list-group-item-label" onClick={onToggleRise}>
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        value={localSalary}
        onChange={handleChangeSalary}
      ></input>
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
          onClick={onToggleIncrease}
        >
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <button type="button" className="btn-star btn-sm">
          <i className="fas fa-star"></i>
        </button>
      </div>
    </li>
  );
};

export default EmployeeListItem;
