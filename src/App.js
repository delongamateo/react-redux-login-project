import React, {useEffect, useState} from 'react';
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
  const [user, setUser] = useState({})

  async function fetchUser() {
      const resp = await fetch(`./data.json`);
      const data = await resp.json();
      setUser(data);
  }

  useEffect(() => {
    fetchUser()
  }, [])

  console.log(user)

  return (
    <Router>
      <div className="App">
        <Switch>
            <Route exact path="/">
                <Intro />
            </Route>
            <Route path="/setusername">
                <SetUsername user={user}/>
            </Route>
            <Route path="/setpassword">
                <SetPassword user={user}/>
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
