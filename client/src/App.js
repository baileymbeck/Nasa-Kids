import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import TriviaGame from "./components/TriviaGame";
import ClickyGame from "./components/ClickyGame";

const style = {
  app: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  }
}

function App() {
  return (
    <Router>
      <div style={style.app}>
        {/* <Nav/> */}
          <Switch>
            {/* <Route exact path="/" component={} /> */}
            {/* <Route exact path="/login" component={} /> */}
            {/* <Route exact path="/profile" component={} /> */}
            <Route exact path="/clickygame" component={ClickyGame} />
          <Route exact path="/trivia" component={TriviaGame} />
          </Switch>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;

