import React, { Component } from "react";
import { Col, Row } from "../../Grid"
// import words from "./words.json";

const wordsToPick = [{
  
console.log("Here are the words:" + wordsToPick);

export default class HangGame extends React.Component {
    
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




