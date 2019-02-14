import React, { Component } from 'react';
import styles from './App.module.css';
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary"

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
        let btnClass = styles.color;

        if ( this.state.showPersons ) {
            persons = (
                <div>
                    {this.state.persons.map(( person, index ) => {
                        return <ErrorBoundary key = {index}>
                            <Person 
                                click   = {this.deletePersonHandler.bind(this, index)}
                                name    = {person.name}
                                age     = {person.age}
                                changed = {( event ) => this.nameChangedHandler(event, person.id)} />
                        </ErrorBoundary>
                    })}
                </div>
            );
            btnClass = styles.red
        }

        return (
                <div className="App">
                    <button 
                        onClick={this.togglePersonsHandler} className={btnClass}>Conditional</button>
                        <div>
                            {persons}
                        </div>
                </div>
        );
    }
}

export default App;