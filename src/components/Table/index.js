import React from "react";
import "./style.css"
import TableHeader from "../TableHeader/index";
import TableData from "../TableData/index";

function Table() {
    return (
        <table>
            <TableHeader />
            <TableData />
        </table>
    )
}

export default Table;