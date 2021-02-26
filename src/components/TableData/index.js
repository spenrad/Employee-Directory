import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./style.css";

function TableData() {
  const [employees, setEmployees] = useState({ employees: [] });

  useEffect(function () {
    API.allEmployees().then(function (results) {
      console.log(results);
      setEmployees({
        ...employees,
        employees: results.data.results,
      });
    });
  }, []);

  return (
    <tr>
      <td>
        <img src={employees.image} />
      </td>
      {employees.name}
      <td>{employees.email}</td>
      <td>{employees.cell}</td>
      <td>{employees.dob}</td>
    </tr>
  );
};

export default TableData;
