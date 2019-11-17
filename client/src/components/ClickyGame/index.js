import React, { Component } from "react";
import ImageCard from "./components/ImageCard"; 
import Title from "./components/Title";
import "./style.css";
import api from "../../api";
import EasyImg1 from "./img/planets-easy/img1.png"
import EasyImg2 from "./img/planets-easy/img2.png"
import EasyImg3 from "./img/planets-easy/img3.png"
import EasyImg4 from "./img/planets-easy/img4.png"
import EasyImg5 from "./img/planets-easy/img5.png"
import EasyImg6 from "./img/planets-easy/img6.png"
import EasyImg7 from "./img/planets-easy/img7.png"
import EasyImg8 from "./img/planets-easy/img8.png"
import EasyImg9 from "./img/planets-easy/img9.png"
import MedImg1 from "./img/space-medium/space1.jpg"
import MedImg2 from "./img/space-medium/space2.jpg"
import MedImg3 from "./img/space-medium/space3.jpg"
import MedImg4 from "./img/space-medium/space4.jpg"
import MedImg5 from "./img/space-medium/space5.jpg"
import MedImg6 from "./img/space-medium/space6.jpg"
import MedImg7 from "./img/space-medium/space7.jpg"
import MedImg8 from "./img/space-medium/space8.jpg"
import MedImg9 from "./img/space-medium/space9.jpg"
import HardImg1 from "./img/earth-hard/earth1.jpg"
import HardImg2 from "./img/earth-hard/earth2.jpg"
import HardImg3 from "./img/earth-hard/earth3.jpg"
import HardImg4 from "./img/earth-hard/earth4.jpg"
import HardImg5 from "./img/earth-hard/earth5.jpg"
import HardImg6 from "./img/earth-hard/earth6.jpg"
import HardImg7 from "./img/earth-hard/earth7.jpg"
import HardImg8 from "./img/earth-hard/earth8.jpg"
import HardImg9 from "./img/earth-hard/earth9.jpg"


class App extends Component {

  state = {
    cards: this.props.cards,
    score: 0,
    highscore: 0,
    rightWrong: "Click on a planet to earn points, but don't click on it more than once!",
    clicked:[],
    images: { 
      easy: [
      EasyImg1,
      EasyImg2,
      EasyImg3,
      EasyImg4,
      EasyImg5,
      EasyImg6,
      EasyImg7,
      EasyImg8,
      EasyImg9,],
      medium: [
        MedImg1,
        MedImg2,
        MedImg3,
        MedImg4,
        MedImg5,
        MedImg6,
        MedImg7,
        MedImg8,
        MedImg9,],
      hard: [
        HardImg1,
        HardImg2,
        HardImg3,
        HardImg4,
        HardImg5,
        HardImg6,
        HardImg7,
        HardImg8,
        HardImg9,]
  }
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
        <div className="layout">{this.state.cards.map((card, i) => (
          <ImageCard 
            id={card.id}
            key={card.id}
            image={this.state.images[this.props.level][i]}
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
