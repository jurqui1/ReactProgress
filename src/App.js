import React, {Component} from 'react';
import './App.css';
//imported component syntax below
import Person from './Person/Person.js'
import Person_d from './Person/Person_d.js'
import Person_i from './Person/Person_i.js'
import { render } from '@testing-library/react';

//physically changed this from a function into a class extends 
class App extends Component{
  state = {
      persons:[
        {age:'5', gender:'Neutrois'}
      ]
  }

  switchNameHandler = (newAge) => {
    this.setState({persons:[
      {age:newAge, gender:'Neutrois'}
      ]
    } )
  }

  genderChangedHandler = (event) => {
    this.setState({persons:[
      {age:'12', gender:event.target.value}
      ]
    } 
  )
  }

  render () {

    const buttonStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'

    }
    return (
      <div className="App">
      <h1>Balls</h1>
      <p>Boil 'em, Mash 'em, Put 'em in a stew</p>
      {/*Placed a static component after importing it*/}
      {/*Having called this.switchNameHandler() will cause the method to automatically execute upon loading page*/}
      <button style = {buttonStyle} onClick = {this.switchNameHandler.bind(this, '9001')}>Balls Switch</button>
      <Person></Person>
      {/*Placed a dynamic component after importing it*/}
      <Person_d></Person_d>
      {/*Placed a dynamic component that takes input after importing it*/}
      <Person_i age = '12' gender = 'boy'>Poop loops</Person_i>
      <Person_i 
      age = {this.state.persons[0].age} 
      gender = {this.state.persons[0].gender}
      click = {this.switchNameHandler.bind(this, 'I\'m not a ni')}
      changed = {this.genderChangedHandler}> 
      </Person_i>
      </div>
    );
  }
}



export default App;

//class App extends Component{
 // state = {
  //    persons:[
   //     {age:'5', gender:'Neutrois'}
    //  ]
 // }

  //switchNameHandler = () => {

  // this.setState({persons:[
  //  {age:'no, you\'re gay', gender:'Neutrois'}
  //]})
  //}