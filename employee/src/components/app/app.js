import { Component, useState } from "react";

import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeeAddForm from "../employee-add-form/employee-add-form";
import EmployeeList from "../employee-list/employee-list";
import SearchPanel from "../search-panel/search-panel";

import "./app.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      rise: false,
      data: [
        {
          name: "Всеволод Иванов",
          salary: 800,
          increase: false,
          rise: true,
          id: 1,
        },
        {
          name: "Андрей Никитин",
          salary: 300,
          increase: false,
          rise: false,
          id: 2,
        },
        {
          name: "Артем Мухин",
          salary: 5000,
          increase: false,
          rise: false,
          id: 3,
        },
      ],
      term: "",
      filter: "all",
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id !== id),
      };
    });
  };
  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: this.state.data.length + 1,
    };
    this.setState(({ data }) => ({
      data: [...data, newItem],
    }));
  };

  onToggleIncrease = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const old = data[index];

      const newItem = { ...old, increase: !old.increase };
      const newArr = [
        ...data.slice(0, index),
        newItem,
        ...data.slice(index + 1),
      ];

      return {
        data: newArr,
      };
    });
  };
  onToggleRise = (id) => {
    console.log(`Rise this ${id}`);
  };

  searchEmp = (items, term) => {
    // когда юзер ввел что-то в строку поиска, а затем удалил:
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };
  // обновление поиска
  onUpdateSearch = (term) => {
    this.setState({ term: term });
  };
  //фильтрация
  filterPost = (items, filter) => {
    switch (filter) {
      case "rise":
        return items.filter((item) => item.increase);
      case "morethan1000":
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };
  onFilterSelect = (filter) => {
    this.setState({ filter: filter });
  };
  //динамическое обновление зп
  updateSalary = (id, newSalary) => {
    this.setState(({ data }) => ({
      data: data.map((emp) =>
        emp.id === id ? { ...emp, salary: newSalary } : emp
      ),
    }));
  };

  render() {
    const { data, term, filter } = this.state;
    const visibleData = this.filterPost(this.searchEmp(data, term), filter);
    return (
      <div className="app">
        <AppInfo
          totalEmployees={this.state.data.length}
          increaseEmployee={
            this.state.data.filter((item) => item.increase).length
          }
        />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <EmployeeList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleRise={this.onToggleRise}
          onUpdateSalary={this.updateSalary}
        />
        <EmployeeAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
