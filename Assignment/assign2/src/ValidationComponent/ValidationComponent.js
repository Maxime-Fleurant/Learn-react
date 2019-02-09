import React from "react";

const ValidationComponent = (props) => {

    let validtxt = "";

    if (!props.txtLength) {
        validtxt = "";
    } else if (props.txtLength < 5) {
        validtxt = "Txt too short";
    } else {
        validtxt = "Txt long enough";
    }

    return (
        <div>
            <p>{validtxt}</p>
        </div>
    )
}

export default ValidationComponent