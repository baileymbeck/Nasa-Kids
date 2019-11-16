import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import TriviaGame from "./components/TriviaGame";
import ClickyGame from "./components/ClickyGame";
import SpaceClicky from "./components/SpaceClicky";
import EarthClicky from "./components/EarthClicky";
import Hangman from "./components/Hangman";
import Nav from "./components/Nav";
import Home from "./pages/Home/Home";
import LoginPage from './components/Login/Login';
import SignUpPage from './components/SignUp/SignUp';
import GameHome from "./pages/GameHome/GameHome";
import Footer from "./components/Footer"
import HighScore from "./components/HighScore"
import Glossary from "./pages/Glossary/Glossary"
import Wrapper from "./components/Wrapper"
import NoMatch from './pages/NoMatch';
import ClickyHome from './pages/ClickyHome/ClickyHome';

const style = {
  app: {
    // height: '100vh',
    // display: 'flex',
    // flexDirection: 'column'
  }
}


class App extends Component {

  state = {
    userLogin : false 
  }

  render () {
    return(

      // this.state.userLogin ?  () : <h3> please sign up </h3>;
      <Router>
      <div style={style.app}>
        <Nav/>
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/gamehome" component={GameHome} />
              <Route exact path="/clickyhome" component={ClickyHome} />
              <Route exact path="/login" component={LoginPage} />
              <Route exact path="/signup" component={SignUpPage} />
              <Route exact path="/highscore" component={HighScore} />
              {/* <Route exact path="/profile" component={} /> */}
              <Route exact path="/clickygame" component={ClickyGame} />
              <Route exact path="/spaceshuffle" component={SpaceClicky} />
              <Route exact path="/earthshuffle" component={EarthClicky} />
              <Route exact path="/trivia" component={TriviaGame} />

              <Route exact path="/hangman" component={Hangman} />

              <Route exact path="/glossary" component={Glossary} />
              <Route component={NoMatch} />
            </Switch>
          </Wrapper>
        <Footer/>
      </div>
    </Router>
  );
  }
   
}

export default App;
