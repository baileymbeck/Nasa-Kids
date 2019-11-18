import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import TriviaGame from "./components/TriviaGame";
import ClickyGame from "./components/ClickyGame";
import Hangman from "./components/Hangman";
import Nav from "./components/Nav";
import Home from "./pages/Home/Home";
import LoginPage from './components/Login/Login';
import SignUpPage from './components/SignUp/SignUp';
import GameHome from "./pages/GameHome/GameHome";
import Footer from "./components/Footer"
import Scores from "./components/Scores"
import Glossary from "./pages/Glossary/Glossary"
import Wrapper from "./components/Wrapper"
import NoMatch from './pages/NoMatch';
import ClickyHome from './pages/ClickyHome/ClickyHome';
import easycards from "./components/ClickyGame/cards.json";
import mediumcards from "./components/ClickyGame/space.json";
import hardcards from "./components/ClickyGame/earth.json";

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
              <Route exact path="/" component={LoginPage} />
              <Route exact path="/home" component={Home} />
              <Route exact path="/gamehome" component={GameHome} />
              <Route exact path="/clickyhome" component={ClickyHome} />
              {/* <Route exact path="/login" component={LoginPage} /> */}
              <Route exact path="/signup" component={SignUpPage} />
              <Route exact path="/scores" component={Scores} />
              {/* <Route exact path="/profile" component={} /> */}
              <Route exact path="/clickygame" component={() => <ClickyGame cards={easycards} level={'easy'} title="Planet Shuffle"/>} />
              <Route exact path="/spaceshuffle" component={() => <ClickyGame cards={mediumcards} level={'medium'} title="Space Shuffle"/>}/>
              <Route exact path="/earthshuffle" component={() => <ClickyGame cards={hardcards} level={'hard'} title="Earth Shuffle"/>}/>
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
