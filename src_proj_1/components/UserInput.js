import React from 'react';

const inputHandler = (props) =>{

    const inputstyle = {
        border:'2px solid red'
    }

    return(
        <div className = 'inputHandler'>
            <input 
                type = 'text' 
                onChange = {props.changed}
                value = {props.currentName}
                style = {inputstyle}></input>
            <p></p>
        </div>
    )

};
export default inputHandler;