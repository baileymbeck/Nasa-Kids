import React, { Component } from "react";
// import words from "./words.json";

const words = 
[
    {
        "word": "nebula",
        "image": "/img/hangman/nebula.jps"
    },
    {
        "word": "asteroid",
        "image": "/img/hangman/asteroid.jps"
    },
    {
        "word": "black hole",
        "image": "/img/hangman/blackHole.jps"
    }
]

// randomize function here
pickWord = () => {
    (Math.floor(Math.random()*words.length))
}


class HangGame extends Component {
    state = {
        wordInPlay: "",
        lettersOfTheWord: [],
        matchedLetters: [],
        guessedLetters: [],
        guessesLeft: 0,
        totalGuesses: 0,
        letterGuessed: [],
        wins: 0,
    }
    // pick method would be here
    render(){
        return (

        )
    }
}

export default HangGame;



