import React from "react";
import "./CharComponent.css";

const CharComponents = (props) => {
    return (
        <div className="CharComponent" onClick={props.clickDelete}>{props.char}</div>
    )
}

export default CharComponents