import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Intro from './components/Intro/Intro'
import SetUsername from './components/SetUsername/SetUsername'
import SetPassword from './components/SetPassword/SetPassword'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/">
                <Intro />
            </Route>
            <Route path="/setusername">
                <SetUsername />
            </Route>
            <Route path="/setpassword">
                <SetPassword />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
