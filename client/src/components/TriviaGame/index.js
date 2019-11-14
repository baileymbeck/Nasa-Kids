import React, { useState } from "react";
import Start from "./components/states/Start"
import Game from "./components/states/Game"
import End from "./components/states/End"
import "./style.css"
import api from "../../api";

const style = {
    main: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "30px",
    },
    panel: {
        height: "100%",
        width: "960px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "./Smile-ICG-Medium.ttf",

    },
    title: {
        textAlign: "center",
        fontSize: "75px",
        paddingBottom: "15px",
    }
}

class TrivaGame extends React.Component {
    state= {
        gameStateIndex: 0, 
        correct: 0, 
        incorrect: 0
    }

    // const [state, setState] = useState({ gameStateIndex: 0, correct: 0, incorrect: 0 })  //state is object, setState is function

    nextState = () => {
        let correct = this.state.correct;
        let incorrect = this.state.incorrect;
        let gameStateIndex = this.state.gameStateIndex + 1
        if (this.state.gameStateIndex === 2) {
            gameStateIndex = 0
            correct = 0
            incorrect = 0
        }
        this.setState({ ...this.state, gameStateIndex, correct, incorrect })
    }

    setScore = (correct, incorrect) => {
        const newState = { ...this.state, correct, incorrect, gameStateIndex: this.state.gameStateIndex + 1 }
        this.setState(newState)
        api.saveScore({
            game: "Trivia",
            score: {
                correct,
                incorrect
            },
            userId: "kristen"   
          
        })  //passing saveScore an object: {correct: correct, incorrect: incorrect}
    }



    //if key='incorrect'; state["incorrect"]  === state.incorrect === state[key]

    render() { 
        const gamesStates = [
            <Start nextState={this.nextState} />,
            <Game setScore={this.setScore} />,
            <End nextState={this.nextState} correct={this.state.correct} incorrect={this.state.incorrect} />
        ]
        return(
        <div style={style.main}>
            <div style={style.panel}>
                <h1 style={style.title}>Space Trivia</h1>
                {gamesStates[this.state.gameStateIndex]}
            </div>
        </div>
    )}
}
export default TrivaGame;

