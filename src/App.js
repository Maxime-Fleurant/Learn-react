import React, { Component } from 'react';
import './App.css';
import Person from "./Person/Person";

class App extends Component {
    state = {
        persons : [
            {
                name: "max",
                age : 12
            },
            {
                name: "alex",
                age : 13
            },
            {
                name: "pd",
                age : 14
            },
        ]
    }

    buttonHandler = ( newName ) => {
        this.setState({
            persons : [
                {
                    name: newName,
                    age : 12
                },
                {
                    name: "alex",
                    age : 13
                },
                {
                    name: "pd",
                    age : 17
                },
            ]
        })
    }

    nameChangedHandler = ( event ) => {
        this.setState({
            persons : [
                {
                    name: "max",
                    age : 12
                },
                {
                    name: event.target.value,
                    age : 13
                },
                {
                    name: "pd",
                    age : 17
                },
            ]
        })
    }

    render() {
        return (
            <div className="App">
                <Person 
                    name  = {this.state.persons[0].name}
                    age   = {this.state.persons[0].age}
                    click = {this.buttonHandler.bind(this, "reloxxx")} />
                <Person 
                    name    = {this.state.persons[1].name}
                    age     = {this.state.persons[1].age}
                    changed = {this.nameChangedHandler} >
                </Person>
                <Person 
                    name = {this.state.persons[2].name}
                    age  = {this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;
