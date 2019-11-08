import React from "react";
 import "./style.css";

 function Title() {
    return <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4">The Simpsons</h1>
      <p className="description">Want to test your memory? Want to see how well you know some more obscure, but well-loved characters? Then start the game by clicking on any character. However, don't click on it again or you lose! If you're able to click through all characters, you win!</p>
      <p className="description">Score: 0 | Top Score: 0</p>
    </div>
  </div>;
  }
  
  export default Title;