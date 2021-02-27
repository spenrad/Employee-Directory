import React, { useState, useEffect } from "react";
import "./style.css";
import TableHeader from "../TableHeader/index";
import TableData from "../TableData/index";
import API from "../../utils/API.js";

function TableComponent(props) {
  const [employees, setEmployees] = useState({
    employeeArr: [],
    asc: true
  });

  useEffect(function () {
    API.allEmployees().then(function (results) {
      console.log("APIresults", results);
      setEmployees({
        ...employees,
        employeeArr: results.data.results,
      });
    });
  }, []);

  const handleClick = function handleClick() {

    if (employees.asc === true) {
        var sortedEmployees = employees.employeeArr.sort( function(a, b)  {
        if(a.name.first < b.name.first) {return -1;}
        if(a.name.first > b.name.first) {return 1;}
        return 0;
    })
    }
    else {
        var sortedEmployees = employees.employeeArr.sort( function(a, b)  {
            if(a.name.first > b.name.first) {return -1;}
            if(a.name.first < b.name.first) {return 1;}
            return 0;
        })
    }

    setEmployees({
        ...employees,
        employeeArr: sortedEmployees,
        asc: !employees.asc
    })
  };

  console.log("employees", employees);
  return (
    <table>
      <TableHeader handleClick={handleClick}/>
      {employees.employeeArr.length > 0 ?  <TableData employees={employees.employeeArr} /> : '' }
    
    </table>
  );
}

export default TableComponent;
