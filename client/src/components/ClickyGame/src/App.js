import React, { Component } from "react";
import ImageCard from "./components/ImageCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./cards.json"

class App extends Component {
  state = {
    cards,
    score: 0,
    highscore: 0,
    rightWrong: "Click on an image to earn points, but don't click on any more than once!",
    clicked:[]
  };

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
      rightWrong: "Click on an image to earn points, but don't click on any more than once!"
    });
    if (newScore >= this.state.highscore) {
      this.setState({ highscore: newScore });
    }
    else if (newScore === 12) {
      this.setState({ rightWrong: "You win!" });
    }
    this.handleShuffle();
  };

  handleReset = () => {
    this.setState({
      score: 0,
      highscore: this.state.highscore,
      rightWrong: "You lose!",
      clicked: []
    });
    this.handleShuffle();
  };

  handleShuffle = () => {
    let shuffledCards = this.shuffleArray(cards);
    this.setState({ cards: shuffledCards });
  };

  render() {
    return (
      <div>
      <Title score={this.state.score} highscore={this.state.highscore} rightWrong={this.state.rightWrong}>Clicky Game!</Title>
      <Wrapper>
        {this.state.cards.map(card => (
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
      </Wrapper>
      </div>
    );
  }
}

export default App;
