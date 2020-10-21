//Making a component using es6
//Component is just an external application
//But we are making a function 
//In order for this to be interpretable for the react application we need to import it for backend usage
import React from 'react';

//Now we can make our function
//Using an arrow function and ES6 styling
const person = () => {
    return <p>Heck, if you even get it at the right temperture, you can slip it into your pants and...</p>
};

//Not necessary, but serves as a backup to set a default export
export default person;