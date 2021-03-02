import React from "react";
import "./style.css"

function Search(props) {

    return(
        <form>
            <input onChange={props.handleChange}/>
        </form>
        
    )
};

export default Search;