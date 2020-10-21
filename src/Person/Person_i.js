//Creating a dynamic component that takes input
import React from 'react';
import './Person.css';

const person_i = (props) => {
    //Must use single curly braces for functions
    return (<div className = 'Person'>
    {/* The code below takes the "props"(parameters) and applies them*/}
    <p onClick = {props.click}>I'm "not" a {props.age} year old {props.gender} ;))))) </p>
    {/*Using special "children" keyword to take any elements written between the component tag*/}
    <p>{props.children}</p>
    <input type ='text' onChange = {props.changed} />
    </div>
    )
};

//Not necessary, but serves as a backup to set a default export
export default person_i;