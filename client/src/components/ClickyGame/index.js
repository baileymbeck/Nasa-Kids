import React, { Component } from "react";
import ImageCard from "./components/ImageCard"; 
import Title from "./components/Title";
import "./style.css";
import api from "../../api";

class App extends Component {

  state = {
    cards: this.props.cards,
    score: 0,
    highscore: 0,
    rightWrong: "Click on a planet to earn points, but don't click on it more than once!",
    clicked:[]
  };


  componentDidMount() {
    console.log(this.state.cards);
  }

  shuffleArray = array => {
    for (var i=array.length -1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i+1));
      var x = array[i];
      array[i] = array[j];
      array[j] = x
    }
    return array;
  };

  handleClick = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleIncrement();
      this.setState({ clicked: this.state.clicked.concat(id) });
      this.handleShuffle();
    } else {
      this.handleReset();
    }
  };

  handleIncrement = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
      rightWrong: "Click on a planet to earn points, but don't click on it more than once!"
    });
    if (newScore >= this.state.highscore) {
      this.setState({ highscore: newScore });
    }
    else if (newScore === 8) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  
  };

  handleReset = () => {
    this.setState({
      score: 0,
      // highscore: this.state.highscore,
      rightWrong: "Try again!",
      clicked: []
    });

    this.handleShuffle();
    //var correct = highscore
    //console.log(correct)
    this.saveScore();
  };

  saveScore = (correct) =>{
    api.saveScore({
      game: "clicky",
      score: this.state.highscore,
      userId: "kristen"
    })
  }



  handleShuffle = () => {
    let shuffledCards = this.shuffleArray(this.props.cards);
    this.setState({ cards: shuffledCards });
  };

  render() {
    return (
      <div className="row-game">
      <Title score={this.state.score} highscore={this.state.highscore} rightWrong={this.state.rightWrong}></Title>
        <div className="layout">{this.state.cards.map(card => (
          <ImageCard 
            id={card.id}
            key={card.id}
            image={card.image}
            handleClick={this.handleClick}
            handleIncrement={this.handleIncrement}
            handleReset={this.handleReset}
            handleShuffle={this.handleShuffle}
          />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
