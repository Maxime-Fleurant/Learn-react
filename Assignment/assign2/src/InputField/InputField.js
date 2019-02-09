import React from "react";

const InputField = ( props ) => {
    return (
        <div>
            <input type="text" placeholder="Type Here" onChange={props.inputChange}></input>
            <p>{props.txtLength}</p>
        </div>
        
    )
}

export default InputField