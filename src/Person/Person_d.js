//Creating a dynamic component
import React from 'react';

const person_d = () => {
    //Must use single curly braces for functions
    return <p>I can fit {Math.floor(Math.random() * 20)} of them into my pants ;) </p>
};

//Not necessary, but serves as a backup to set a default export
export default person_d;