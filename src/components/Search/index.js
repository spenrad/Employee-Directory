import React from "react";
import "./style.css"

function Search(props) {

    return(
        <div id="searchForm"><form >
            <input onChange={props.handleChange} placeholder="Type Name Here"/>
        </form></div>
        
    )
};

export default Search;