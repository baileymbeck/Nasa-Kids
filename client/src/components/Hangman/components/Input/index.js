import React, { Component } from "react";

class Input extends Component {
    state = {
        userInput: ""
    };

    handleInputChange = event => {
        const {name, value} = event.target;

        this.setState ({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleGuessedLetter(this.state.userInput);
        this.setState ({
            userInput: ""
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input 
                    type="text" 
                    name="userInput" 
                    onChange={this.handleInputChange} 
                    value={this.state.userInput} 
                    maxLength = "1" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Input;