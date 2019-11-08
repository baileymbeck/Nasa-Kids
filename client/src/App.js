import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import TriviaGame from "./components/TriviaGame"
import LoginPage from "./components/Login/Login";
import { STATES } from 'mongoose';


const style = {
  app: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
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
        {/* <Nav/> */}
          <Switch>
            <Route exact path="/" component={LoginPage} />
            {/* <Route exact path="/login" component={} /> */}
            {/* <Route exact path="/profile" component={} /> */}
            {/* <Route exact path="/clickygame" component={Clicky Game} /> */}
          <Route exact path="/trivia" component={TriviaGame} />
          </Switch>
        {/* <Footer/> */}
      </div>
    </Router>
  );
  }
   
}

export default App;
