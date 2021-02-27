import React from "react";
import "./style.css";

function TableData(props) {
 
return (props.employees.map(function (person) {

  return (
    <tr>
      <td>
        <img src={person.picture.medium} />
      </td>
      
      <td>{person.name.first + " " + person.name.last} </td>
      <td>{person.email}</td>
      <td>{person.cell}</td>
      <td>{person.dob.age}</td>
    </tr>
  );
})
)
}


export default TableData;
