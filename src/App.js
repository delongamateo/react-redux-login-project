import React, {useEffect} from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Intro from './components/Intro/Intro'
import SetUsername from './components/SetUsername/SetUsername'
import SetPassword from './components/SetPassword/SetPassword'
import Profile from './components/Profile/Profile'

import { useSelector, useDispatch } from 'react-redux'
import { user, fetchUser } from './features/user/userSlice'



function App() {
  const dispatch = useDispatch()
  const {user} = useSelector(state => state.user)
  const userStatus = useSelector(state => state.user.status)

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(fetchUser())
    }
  }, [userStatus, dispatch])

  console.log(user)

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
            <Route path="/userprofile">
                <Profile />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
