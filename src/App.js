import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to game "rock-paper-scissors"!</h1>
        </header>
        <div id="root">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
