import React, { Component } from "react";
import words from "./words";
// import HangGame from "./components/states/HangGame";

class Hangman extends Component {
    state = {
        puzzle: words[Math.floor(Math.random() * words.length)],
        guessedLetters: []        
        }

        handleSubmit(event){
            event.preventDefault()
            let guessedLettersCopy = [...this.state.guessedLetters]
            guessedLettersCopy.push(this.refs.userInput.value)
            this.setState({guessedLetters: guessedLettersCopy})
            
        }

    render() {
        return (
            <div>
            <h2>
                Earth Protector 
            </h2>
            <h3>
            You have 8 tries to guess the word before Earth crashes into the sun. Go!
            </h3>
            {this.state.puzzle}
            <p>{this.state.guessedLetters} </p>
            <form onSubmit = {this.handleSubmit.bind(this)}>
                <input type="text" ref="userInput" />
                <button>Submit</button>
            </form>
            </div>
        );
    }
}

export default Hangman;