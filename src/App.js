import React, { Component } from 'react';
import './App.css';
import CharComponent from './CharComponent/CharComponent';
import UserInput from './UserInput/UserInput';
import ValidationComponent from './ValidationComponent/ValidationComponent';

export default class App extends Component {

  state = {
    inputText: ''
  };

  userInputHandler = (value) => {
    this.setState({inputText: value});
  };

  charComponentClickHandler = (index) => {
    const input = this.state.inputText.split('');
    input.splice(index, 1);
    const inputText = input.join('');
    this.setState({inputText});
  }

  render() {
    return <div className='study-app'>
      <div className='study-app__input'>
        <UserInput
          changed={this.userInputHandler}
          value={this.state.inputText} >

          <ValidationComponent
            currentLength={this.state.inputText.length}
            minLength={5}
            />
        </UserInput>
      </div>
      <div className='study-app__output'>
        { 
          this.state.inputText.split('').map( (letter, index) => {
            return <CharComponent 
              key={index}
              onclick={() => this.charComponentClickHandler(index)}
              text={letter} /> 
          })
        }
      </div>
    </div>
  }

}