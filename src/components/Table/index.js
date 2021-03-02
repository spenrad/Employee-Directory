import React, { useState, useEffect } from "react";
import "./style.css";
import TableHeader from "../TableHeader/index";
import TableData from "../TableData/index";
import API from "../../utils/API.js";
import Search from "../Search/";

function TableComponent(props) {
  const [employees, setEmployees] = useState({
    employeeArr: [],
    asc: true,
  });

  useEffect(function () {
    API.allEmployees().then(function (results) {
      setEmployees({
        ...employees,
        employeeArr: results.data.results,
      });
    });
  }, []);

  const handleClick = function handleClick() {
    if (employees.asc === true) {
      var sortedEmployees = employees.employeeArr.sort(function (a, b) {
        if (a.name.first < b.name.first) {
          return -1;
        }
        if (a.name.first > b.name.first) {
          return 1;
        }
        return 0;
      });
    } else {
      sortedEmployees = employees.employeeArr.sort(function (a, b) {
        if (a.name.first > b.name.first) {
          return -1;
        }
        if (a.name.first < b.name.first) {
          return 1;
        }
        return 0;
      });
    }

    setEmployees({
      ...employees,
      employeeArr: sortedEmployees,
      asc: !employees.asc,
    });
  };

  const handleChange = function handleChange(event) {
    event.preventDefault();
    const value = event.target.value;
    const filterEmps = employees.employeeArr.filter(function (item) {
      let names = item.name.first + " " + item.name.last;
      console.log("value", value, "names", names)
      if(names.indexOf(value) !== -1) {
      return item;}
  });
    setEmployees({
      ...employees,
      employeeArr: filterEmps});
  };

  return (
    <div>
      <Search handleChange={handleChange} />
      <table>
        <TableHeader handleClick={handleClick} />
        {employees.employeeArr.length > 0 ? (
          <TableData employees={employees.employeeArr} />
        ) : (
          ""
        )}
      </table>
    </div>
  );
}

export default TableComponent;
