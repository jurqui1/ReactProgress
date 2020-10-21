import React, {Component} from 'react';
import './App.css';
import OutputHandler from './components/UserOutputs.js';
import InputHandler from './components/UserInput.js';
import { render } from '@testing-library/react';

class App extends Component{
  state = {
    usernames:[{username:'jurqui1'}]
  }

  usernameChangeHandler = (event) =>{
    this.setState({
      usernames:[{username:event.target.value}]
    })
  }

  render () {
  return (
    <div className="App">
      <h1>works</h1>
      <OutputHandler username = {this.state.usernames[0].username} ></OutputHandler>
      <InputHandler changed = {this.usernameChangeHandler} currentName = {this.state.usernames[0].username}></InputHandler>
    </div>
  );
}
}

export default App;
