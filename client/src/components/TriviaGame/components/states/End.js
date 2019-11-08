import React from "react";

function End({nextState, correct, incorrect}) {
    return (
        <div>
            <div>Correct {correct}</div>
            <div>Incorrect {incorrect}</div>
            <button onClick={nextState}>Restart Game</button>
        </div>



    )
}
export default End