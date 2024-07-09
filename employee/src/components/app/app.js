import AppFilter from "../app-filter/app-filter";
import AppInfo from "../app-info/app-info";
import EmployeeAddForm from "../employee-add-form/employee-add-form";
import EmployeeList from "../employee-list/employee-list";
import SearchPanel from "../search-panel/search-panel";
import "./app.css";

function App() {
  const data = [
    { name: "Всеволод Иванов", salary: 800, increase: true, id: 1 },
    { name: "Андрей Никитин", salary: 300, increase: false, id: 2 },
    { name: "Артем Мухин", salary: 5000, increase: false, id: 3 },
  ];

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeeList data={data} />
      <EmployeeAddForm />
    </div>
  );
}

export default App;
