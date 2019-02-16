import React from 'react';
import Classes from "./Cockpit.module.css";

const Cockpit = (props) => {

    let btnClass = "";

    if (props.showPerson) {
        btnClass = Classes.red;
    }

    return (
        <div>
            <button 
                onClick={props.toggle} className={btnClass}>Conditional</button>
        </div>
    );
}

export default Cockpit;