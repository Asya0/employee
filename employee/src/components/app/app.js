import { Component } from "react";

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
        { name: "Всеволод Иванов", salary: 800, increase: true, id: 1 },
        { name: "Андрей Никитин", salary: 300, increase: false, id: 2 },
        { name: "Артем Мухин", salary: 5000, increase: false, id: 3 },
      ],
    };
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter((item) => item.id != id),
      };
    });
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeeList data={this.state.data} onDelete={this.deleteItem} />
        <EmployeeAddForm />
      </div>
    );
  }
}

export default App;
