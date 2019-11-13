import React from "react";

const style = {
    scores: {
        fontSize: "30px",
        fontWeight: "bolder"
    },
    title: {
        fontSize: "50px",
        fontWeight: "bolder"

    },
    button: {
        fontWeight: "bolder",
        letterSpacing: "2px",
        marginTop: "20px",
        boxShadow: "0 3px 6px black, 0 3px 6px black"
    }
}

function End({nextState, correct, incorrect}) {
    return (
        <div>
            <h1 style={style.title}>Score</h1>
            <div style={style.scores}>
            <div>Correct {correct}</div>
            <div>Incorrect {incorrect}</div>
            </div>
            <button style={style.button} onClick={nextState}>Restart Game</button>
        </div>

    )
}
export default End