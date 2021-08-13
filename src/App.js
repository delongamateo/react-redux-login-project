import React from 'react';
import './App.scss';
import Intro from './components/Intro/Intro'
import SetUsername from './components/SetUsername/SetUsername'
import SetPassword from './components/SetPassword/SetPassword'


function App() {
  return (
    <div className="App">
      <SetUsername />
    </div>
  );
}

export default App;
