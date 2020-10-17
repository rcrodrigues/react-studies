import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

export default class App extends Component {

  state = {
    inputText: ''
  };

  userInputHandler = (event) => {
    this.setState({...this.state, inputText: event.target.value});
  };

  resetButtonHandler = () => {
    this.setState({...this.state, inputText: ''});
  }

  render() {
    return <div className='study-app'>
      <div className='study-app__input'>
        <button onClick={this.resetButtonHandler}>reset</button>
        <UserInput
          changed={this.userInputHandler}
          value={this.state.inputText}>
        </UserInput>
      </div>
      <div className='study-app__output'>
        <UserOutput
          value={this.state.inputText}>
        </UserOutput>
      </div>
    </div>
  }

}