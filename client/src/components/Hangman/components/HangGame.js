import React, { Component } from "react";
import { Col, Row } from "../../../Grid"
// import words from "./words.json";

const wordsToPick = [{
    word: "nebula",
    image: "/img/hangman/nebula.jpg"
},

    },
    asteroid: {
        word: "asteroid",
        image: "/img/hangman/asteroid.jpg"
    },
    galaxy: {
        word: "galaxy",
        image: "/img/hangman/galaxy.jpg"
    },
    satellite: {
        word: "satellite",
        image: "/img/hangman/satellite.jpg"
    },
    supernova: {
        word: "supernova",
        image: "/img/hangman/supernova.jpg"
    },
    crater: {
        word: "crater",
        image: "/img/hangman/crater.jpg"
    },
    constellation: {
        word: "constellation",
        image: "/img/hangman/constellation.jpg"
    },
    pluto: {
        word: "pluto",
        image: "/img/hangman/pluto.jpg"
    }
]
console.log("Here are the words:" + wordsToPick);

export default class HangGame extends React.Component {
    state = {
        wordInPlay: [],
        lettersOfTheWord: [],
        matchedLetters: [],
        guessedLetters: [],
        guessesLeft: 0,
        totalGuesses: 0,
        letterGuessed: [],
        wins: 0,
        }
        // randomize function here
        setupGame = () => {
            var objKeys = Object.keys(wordsToPick);
            var chosenWord = objKeys[Math.floor(Math.random() * objKeys.length)];
            return this.setState({wordInPlay: chosenWord})
        };
        componentDidMount = () => {
            this.setupGame()
            console.log(this.state.wordInPlay)
        }
    // pick method would be here
    render() {
        return (
           <Row>
            {this.state.wordInPlay}
           </Row>
        )
    }
}




