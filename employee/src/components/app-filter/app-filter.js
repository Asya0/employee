import React from "react";
import "./app-filter.css";

function AppFilter() {
  return (
    <div className="btn-group">
      <button className="btn btn-light" type="button">
        Все сотрудники
      </button>
      <button className="btn btn-outline-light" type="button">
        Сотрудники на повышение
      </button>
      <button className="btn btn-outline-light" type="button">
        З/п больше 1000 рублей
      </button>
    </div>
  );
}

export default AppFilter;
