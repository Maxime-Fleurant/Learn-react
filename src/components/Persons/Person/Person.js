import React, {Component} from "react";
import styles from "./Person.module.css";


class Person extends Component  {
    render() {
        console.log("person.js render")
        return (
            <div className="Person" >
                <p className={styles.color} onClick={this.props.click}>I'm a {this.props.name} Person! and i'm {this.props.age} years old</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </div>
        )
    }
};


export default Person;
