import React from "react";
import "./style.css"

function TableHeader (props) {
    return (
        <tr id="tableHeader">
            <th> Picture</th>
            <th onClick={props.handleClick}> Name</th>
            <th> E-mail</th>
            <th> Phone Number</th>
            <th> Age</th>
        </tr>
    );
}

export default TableHeader;