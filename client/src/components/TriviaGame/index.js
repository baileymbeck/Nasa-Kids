import React, { useState } from "react";
import Start from "./components/states/Start"
import Game from "./components/states/Game"
import End from "./components/states/End"

const style = {
    main: {
        backgroundColor: "red",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "30px",
        paddingBottom: "30px"


    },
    panel: {
        backgroundColor: "white",
        height: "100%",
        width: "960px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"

    },
    title: {
        textAlign: "center"
    }
}



function TrivaGame() {

    const [state, setState] = useState({ gameStateIndex: 0, correct: 0, incorrect: 0 })  //state is object, setState is function

    function nextState() {
        let correct = state.correct;
        let incorrect = state.incorrect;
        let gameStateIndex = state.gameStateIndex + 1
        if (state.gameStateIndex === 2) {
            gameStateIndex = 0
            correct = 0
            incorrect = 0
        }
        setState({ ...state, gameStateIndex, correct, incorrect })
    }

    //if key='incorrect'; state["incorrect"]  === state.incorrect === state[key]

    function answerQuestion(correct) {
        const key = correct ? "correct" : "incorrect"
        setState({ ...state, [key]: state[key] + 1 })
    }

    const gamesStates = [
        <Start nextState={nextState} />,
        <Game nextState={nextState} answerQuestion={answerQuestion} />,
        <End nextState={nextState} correct={state.correct} incorrect={state.incorrect}/>,
    ]

    return (
        <div style={style.main}>
            <div style={style.panel}>
                <h1 style={style.title}>Space</h1>
                {gamesStates[state.gameStateIndex]}
            </div>
        </div>
    )
}
export default TrivaGame;

