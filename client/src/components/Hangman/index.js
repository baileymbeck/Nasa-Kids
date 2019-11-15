import React, { Component } from "react";
import HangGame from "./components/states/HangGame";
// import words from "./words.json";

class Hangman extends Component {
    render() {
        return (
            <div>
            <h1>
                Hangman: Guess the word before Earth crashes into the sun
            </h1>
            {HangGame}
            </div>
        );
    }
}

export default Hangman;