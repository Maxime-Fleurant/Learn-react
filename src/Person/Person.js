import React from "react";


const person = (props) => {
    return (
        <div>
            <p>I'm a {props.name} Person! and i'm {props.age} years old</p>
            <p>{props.children}</p>
        </div>
    )
};


export default person;
