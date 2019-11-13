import React from "react";

const style = {
    button : {
        fontWeight: "bold",
        letterSpacing: "2px",
        color: "black",
        boxShadow: "0 3px 6px black, 0 3px 6px black"
    }
}

function Start({nextState}) {
    return (
        <button style={style.button} onClick={nextState}>Start Game</button>
    )
}
export default Start