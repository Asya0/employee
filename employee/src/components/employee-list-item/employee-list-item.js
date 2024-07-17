import React from "react";
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
  } = props;

  let classNames = "list-group-item d-flex justify-content-between";

  if (increase) {
    classNames += " increase";
  }
  if (rise) {
    classNames += " like";
  }

  return (
    <li className={classNames}>
      <span className="list-group-item-label" onClick={onToggleRise}>
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + " P"}
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
