import React, { Component } from 'react';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
    state = {
        persons : [
            {
                name: "max",
                age : 12,
                id  : "fdfkldkldf1"
            },
            {
                name: "alex",
                age : 13,
                id  : "fdfkldkldf2"
            },
            {
                name: "pd",
                age : 14,
                id  : "fdfkldkldf3"
            },
        ],
        showPersons : false
    }

    nameChangedHandler = ( event, personId ) => {
        const   personIndex  = this.state.persons.findIndex(elem => elem.id === personId);
        const   person       = {...this.state.persons[personIndex]};
                person.name  = event.target.value
        const   persons      = [...this.state.persons];
        persons[personIndex] = person
        this.setState({persons : persons});
    }

    deletePersonHandler = ( personIndex ) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons : persons});
    };

    togglePersonsHandler = () => {
        this.setState({showPersons : !this.state.showPersons})
    }

    render() {
        let persons  = null;

        if ( this.state.showPersons ) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.togglePersonsHandler}
                        changed={this.nameChangedHandler}
                    />
                </div>
            );
        }

        return (
            <div className="App">
                <Cockpit
                    toggle={this.togglePersonsHandler}
                    showPerson={this.state.showPersons}
                />
                {persons}
            </div>
        );
    }
}

export default App;