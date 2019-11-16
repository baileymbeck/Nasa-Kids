import React, { Component } from "react";
import words from "./words";
import Input from "./components/Input";

class Hangman extends Component {
    state = {
        puzzle: words[Math.floor(Math.random() * words.length)],
        lettersInPuzzle: [],
        correct: [],
        guessedLetters: [],
        incorrect: "",
        wordView: "",
        guessesLeft: 8
    }

    componentDidMount() {
        this.setUpGame();
        console.log(this.state)
    }

    setUpGame() {
        this.state.lettersInPuzzle = this.state.puzzle.split("");
        this.rebuildProgress();
    }

    rebuildProgress() {
        var wordprog = ""
        for (var i=0; i<this.state.lettersInPuzzle.length; i++) {
            if (this.state.correct.indexOf(this.state.lettersInPuzzle[i]) !==-1) {
                wordprog += this.state.lettersInPuzzle[i];
            }
            else {
                wordprog += "_ ";
            }
        };
        console.log(wordprog);
        this.setState({wordView: wordprog})
    }

    handleGuessedLetter(letter) {
        if (this.state.guessesLeft === 0) {
            this.setUpGame()
        } else {
            this.updateGuesses(letter);
            this.updateMatchedLetters(letter);
            this.rebuildProgress();
        }
    }

    updateGuesses(letter) {
        if ((this.state.guessedLetters.indexOf(letter) === -1) && (this.state.lettersInPuzzle.indexOf(letter) === -1)) {
            this.state.incorrect += letter;
            this.state.guessesLeft--;
        }
    }

    updateMatchedLetters(letter) {
        for (var i = 0; i < this.state.lettersInPuzzle.length; i++) {
            if ((letter === this.state.lettersInPuzzle[i]) && (this.state.correct.indexOf(letter) === -1)) {
                this.state.correct += letter;
            }
        }
    }


    // handleGuessedLetter(letter) {
    //     if(this.state.guessedLetters.includes(letter)) {
    //         alert("You already guessed this letter")
    //     } else {
    //         let guessedLettersClone = [this.state.guessedLetters]
    //         guessedLettersClone.push(letter)
    //         this.setState({ guessedLetters: guessedLettersClone})
    //     }
    // }

    // getIncorrectGuesses() {
    //     const incorrect = this.state.guessedLetters.filter(letter => this.state.puzzle.includes(letter) === false)
    //     return incorrect
    // }

    // getCorrectGuesses() {
    //     const correct = this.state.guessedLetters.filter(letter => this.state.puzzle.includes(letter))
    //     return correct
    // }

    // displayCurrentProgress() {
    //     let progress = ""
    //     for (let index in this.state.puzzle){
    //         let letter = this.state.puzzle.charAt(index)
    //         if (this.state.guessedLetters.includes(letter)){
    //             progress += `${letter}`
    //         } else {
    //             progress += '_ ';
    //         }
    //     }
    //     return progress;
    // }

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
            <p>Incorrect Guesses: {this.state.incorrect} </p>
            <p>Current Progress: {this.state.wordView} </p>
            <Input handleGuessedLetter={this.handleGuessedLetter.bind(this)} />
            </div>
        );
    }
}

export default Hangman;