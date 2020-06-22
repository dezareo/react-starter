import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <h3>My React App</h3>
          </p>
          <a
            className="App-link"
            href="https://dezareo.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            dezareo.me
          </a>
        </header>
      </div>
    );
  }
}

export default App;
