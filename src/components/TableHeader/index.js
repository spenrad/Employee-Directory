import React from "react";
import "./style.css"

function TableHeader () {
    return (
        <tr>
            <th> Picture</th>
            <th> Name</th>
            <th> E-mail</th>
            <th> Phone Number</th>
            <th> Age</th>
        </tr>
    );
}

export default TableHeader;