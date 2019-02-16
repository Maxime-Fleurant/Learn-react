import React from "react";
import Person from "./Person/Person"

const persons = (props) => {
    console.log("perons.js render")
    return (
        props.persons.map(( person, index ) => {
            return (
                <Person 
                    key     = {index}
                    click   = {props.clicked.bind(this, index)}
                    name    = {person.name}
                    age     = {person.age}
                    changed = {( event ) => props.changed(event, person.id)}/>
            )
        })
    )
} 

export default persons;