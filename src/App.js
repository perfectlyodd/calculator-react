import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Keypad from './Keypad';
import SimpleKeypad from './SimpleKeypad';
import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display : 0
    };
  }
  render() {
    return (
      <div className="App">
        <Display answer={this.state.display} />
        <SimpleKeypad />
        <button type='button'>
          Another button!
        </button>
      </div>
    );
  }
}

export default App;
