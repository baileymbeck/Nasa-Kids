import React, { Component } from "react";

class Input extends Component {

    handleSubmit(event) {
        event.preventDefault()
        this.props.handleGuessedLetter(this.refs.userInput.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input type="text" ref="userInput" />
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default Input;