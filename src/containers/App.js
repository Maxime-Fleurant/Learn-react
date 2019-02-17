import React, { Component } from 'react';
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {

    constructor(props) {
        super(props);
        console.log("app.js constructor");
    };

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

    componentDidMount = () => {
        console.log("appjs component did mount")
    }

    shouldComponentUpdate = () => {
        console.log("appjs shouldocmponent update");
        return true;
    }

    componentDidUpdate = () => {
        console.log("appjs component did update")
    }

    render() {
        console.log("app.js render")
        let persons  = null;

        if ( this.state.showPersons ) {
            persons = (
                <div>
                    <Persons
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}
                        changed={this.nameChangedHandler}
                    />
                </div>
            );
        }

        return (
            <div className="App">
                <Cockpit
                    title={this.props.appTitle}
                    toggle={this.togglePersonsHandler}
                    showPerson={this.state.showPersons}
                />
                {persons}
            </div>
        );
    }
}

export default App;