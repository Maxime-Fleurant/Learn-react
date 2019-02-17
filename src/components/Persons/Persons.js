import React, {Component} from "react";
import Person from "./Person/Person"

class Persons extends Component  {

    static getDerivedStateFromProps(props, state) {
        console.log("personsjs getderivedstatefromprops");
        return state
    }

    shouldComponentUpdate(nextprops, nextstate) {
        console.log("personsjs should component update");
        if (nextprops.persons !== this.props.persons){
            return true;
        }
        return false;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("personsjs getsnapshotbeforeupdate");
    }

    componentDidUpdate() {
        console.log("Persons.js componentdidupdate");
    }

    componentWillUnmount = () => {
        console.log("personsjs componentwillunmount");
    }
 
    render() {
        console.log("perons.js render")
        return (
            this.props.persons.map(( person, index ) => {
                return (
                    <Person 
                        key     = {index}
                        click   = {this.props.clicked.bind(this, index)}
                        name    = {person.name}
                        age     = {person.age}
                        changed = {( event ) => this.props.changed(event, person.id)}/>
                )
            })
        )
    }
    
} 

export default Persons;