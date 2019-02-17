import React, {useEffect} from 'react';
import Classes from "./Cockpit.module.css";

const Cockpit = (props) => {

    useEffect(() => {
        console.log("cockpit useeffect");
    })

    let btnClass = "";

    if (props.showPerson) {
        btnClass = Classes.red;
    }

    return (
        <div>
            <h1>{props.title}</h1>
            <button 
                onClick={props.toggle} className={btnClass}>Conditional</button>
        </div>
    );
}

export default Cockpit;