import React, { Component } from 'react';
import './App.css';
import InputField from "./InputField/InputField";
import ValidationComponent from "./ValidationComponent/ValidationComponent";
import CharComponents from "./CharCompnents/CharComponents";

class App extends Component {

    state = {
        txtLenght: null,
        char     : []
    }

    inputChange = (event) => {
        this.setState({
            txtLength : event.target.value.length,
            char : event.target.value.split("")
        })
        console.log(this.state.char)
    };

    clickDelete = ( index ) => {
        let char = [...this.state.char];
        char.splice(index, 1);
        this.setState({
            char : char
        })
    }

    render() {
        return (
            <div className="App">
                <InputField
                    inputChange = {this.inputChange}
                    txtLength   = {this.state.txtLength}
                />
                <ValidationComponent
                    txtLength = {this.state.txtLength}
                />
                {
                    this.state.char.map((char, index) => {
                        return (
                            <CharComponents
                            clickDelete={this.clickDelete.bind(this, index)}
                            char={char}
                            key={index}/>
                        )
                    })
                }
            </div>
        );
    }

}

export default App;
