import React from "react";

function Game ({nextState, answerQuestion}) {
    return(


        
        <div>
        <button onClick={nextState}>End Game</button>
        <button onClick={() => answerQuestion(true)}>Correct</button>
        <button onClick={() => answerQuestion(false)}>Incorrect</button>
        </div>
    )
}
export default Game