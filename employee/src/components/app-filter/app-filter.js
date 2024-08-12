import React from "react";
import "./app-filter.css";

function AppFilter(props) {
  const btnData = [
    { name: "all", label: "Все сотрудники" },
    { name: "rise", label: "Сотрудники на повышение" },
    { name: "morethan1000", label: "З/п больше 1000 рублей" },
  ];

  const buttons = btnData.map(({ name, label }) => {
    const active = props.filter === name;
    const clazz = active ? "btn-light" : "btn-outline-light";
    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
}

export default AppFilter;
