import React, { Component } from "react";
import SimpsonsCard from "./components/SimpsonsCard/index";
import NavBar from "./components/NavBar";
import Title from "./components/Title";
import simpsons from "../../simpsons.json";
import Wrapper from "./components/Wrapper";


class ClickyApp extends Component {
  // set this.state.simpsons to the simpsons array
  state = {
    simpsons
  };

   // handle changes on clicks
   handleCharacterClick = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    console.log(id);
    if(this.state.id === "true") {
      console.log("You've already clicked " + id + " !");
    } else {
      console.log("This is the first time youv'e clicked " + id + ".");
    }
    this.setState({
      id: "true"
    });
    console.log(this.state.id);
    // TODO use this as a guide to set the state after being clicked

    // const friends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    // this.setState({ friends });
  };

  // map over this.state.simpsons and render a SimpsonsCard component for each
  render() {
    return (
      <Wrapper>
        <NavBar />
        <Title>The Simpsons</Title>
        {this.state.simpsons.map(simpson => (
          <SimpsonsCard
            handleCharacterClick={this.handleCharacterClick}
            id={simpson.id}
            key={simpson.id}
            image={simpson.image}
            
          />
        ))}
      </Wrapper>
    );
  }
}

export default ClickyApp;
