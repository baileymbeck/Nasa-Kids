import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ClickyApp from "./components/Clicky/ClickyApp";


function App() {
  return (
    <Router>
    <div>
      <h1> Check out our NASA Kids app!</h1>
      <p>Play a game by clicking on any of the following pictures.</p>
      <div>
      <img src= "./click.png" alt="Clicky Game" />
      </div>
      <Switch>
        
      <Route exact path="/clicky" component={ClickyApp} />  


      </Switch>
    </div>

    </Router>
  );
}

export default App;

