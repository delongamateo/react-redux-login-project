import React, {useEffect, useState} from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Intro from './components/Intro/Intro'
import SetUsername from './components/SetUsername/SetUsername'
import SetPassword from './components/SetPassword/SetPassword'
import Profile from './components/Profile/Profile'

import { useSelector, useDispatch } from 'react-redux'
import { fetchUser } from './features/user/userSlice'



function App() {
  const [loggedIn, setLoggedIn] = useState(true)

  const dispatch = useDispatch()
  const userStatus = useSelector(state => state.user.status)

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(fetchUser())
    }
  }, [userStatus, dispatch])



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
                <SetPassword setLoggedIn={setLoggedIn}/>
            </Route>
            <Route path="/userprofile">
                {/* showing profile only when logged in */}
                {!loggedIn ? <Redirect to="/setusername" /> : <Profile setLoggedIn={setLoggedIn}/>} 
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
