import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from "./Person/Person";
import person from './Person/Person';

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

    buttonHandler = () => {
        this.setState({
            persons : [
                {
                    name: "maxime",
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

    render() {
        return (
            <div className="App">
                <button onClick={this.buttonHandler}>switch</button>
                <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
                <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >hello there</Person>
                <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
            </div>
        );
    }
}

export default App;
