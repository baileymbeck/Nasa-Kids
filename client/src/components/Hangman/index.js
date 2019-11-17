import React, { Component } from "react";
import words from "./words";
import Input from "./components/Input";
import TryOne from "./try1.png";
import TryTwo from "./try2.png";
import TryThree from "./try3.png";
import TryFour from "./try4.png";
import TryFive from "./try5.png";
import TrySix from "./try6.png";
import TrySeven from "./try7.png";
import TryEight from "./try8.png";
import YouLose from "./youLose.gif";

class Hangman extends Component {
    state = {
        puzzle: null,
        lettersInPuzzle: [],
        correct: "",
        incorrect: "",
        wordView: "",
        guessesLeft: 8,
        wins: 0,
        pic: ""
    }

    componentDidMount() {
        this.setUpGame();
        this.imageDisplay();
        console.log(this.state)
    }

    setUpGame() {
        this.state.puzzle = words[Math.floor(Math.random() * words.length)];
        this.state.lettersInPuzzle = this.state.puzzle.split("");
        this.rebuildProgress()
    }

    imageDisplay() {
        this.state.pic = {TryOne}
    }

    rebuildProgress() {
        var wordprog = ""
        for (var i=0; i<this.state.lettersInPuzzle.length; i++) {
            if (this.state.correct.indexOf(this.state.lettersInPuzzle[i]) !==-1) {
                wordprog += this.state.lettersInPuzzle[i];
                // update state to leave the current Img
            }
            else {
                wordprog += "_ ";
                // & loop through images and set to the next one
            }
        };
        console.log(wordprog);
        this.setState({wordView: wordprog})
    }

    handleGuessedLetter(letter) {
        if (this.state.guessesLeft === 0) {
            // display loseImage
            this.restartGame();
        } else {
            this.updateGuesses(letter);
            this.updateMatchedLetters(letter);
            this.rebuildProgress();
            if (this.updateWins() === true) {
                // display winImage
                this.restartGame();
            }
        }
    }

    updateGuesses(letter) {
        if ((this.state.incorrect.indexOf(letter) === -1) && (this.state.lettersInPuzzle.indexOf(letter) === -1)) {
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

    restartGame() {
        this.setState({
            puzzle: null,
            lettersInPuzzle: [],
            correct: "",
            incorrect: "",
            wordView: "",
            guessesLeft: 8,
        });
        this.setUpGame();
        console.log(this.state)
        
    }

    updateWins() {
        var win;
        if (this.state.correct.length === 0) {
            win = false;
        } else {
            win = true;
        }

        for (var i = 0; i < this.state.lettersInPuzzle.length; i++) {
            if (this.state.correct.indexOf(this.state.lettersInPuzzle[i]) === -1) {
                win = false;
            }
        }

        if (win) {
            this.state.wins++;
            return true;
        } else {
            return false
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
            You have {this.state.guessesLeft} tries to guess the word before Earth crashes into the sun. Go!
            </h3>
            <img src={TryOne} /> 
            {/* {this.state.puzzle} */}
            <p>Incorrect Guesses: {this.state.incorrect} </p>
            <p>Current Progress: {this.state.wordView} </p>
            <Input handleGuessedLetter={this.handleGuessedLetter.bind(this)} />
            </div>
        );
    }
}

export default Hangman;