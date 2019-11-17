import React, { Component } from "react";
import words from "./words";
import Input from "./components/Input";

class Hangman extends Component {
    state = {
        puzzle: words[Math.floor(Math.random() * words.length)],
        guessedLetters: []
        }

    handleGuessedLetter(letter) {
        if(this.state.guessedLetters.includes(letter)) {
            alert("You already guessed this letter")
        } else {
            let guessedLettersClone = [this.state.guessedLetters]
            guessedLettersClone.push(letter)
            this.setState({ guessedLetters: guessedLettersClone})
        }
    }

    getIncorrectGuesses() {
        const incorrect = this.state.guessedLetters.filter(letter => this.state.puzzle.includes(letter) === false)
        return incorrect;
    }

    getCorrectGuesses() {
        const correct = this.state.guessedLetters.filter(letter => this.state.puzzle.includes(letter))
        return correct;
    }

    displayCurrentProgress() {
        let progress = ""
        for (let index in this.state.puzzle){
            let letter = this.state.puzzle.charAt(index)
            if (this.state.guessedLetters.includes(letter)){
                progress += `${letter}`
            } else {
                progress += '_ '
            }
        } return progress;
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
            <p>Incorrect Guesses: {this.getIncorrectGuesses()} </p>
            <p>Current Progress: {this.displayCurrentProgress()} </p>
            <Input handleGuessedLetter={this.handleGuessedLetter.bind(this)} />
            </div>
        );
    }
}

export default Hangman;