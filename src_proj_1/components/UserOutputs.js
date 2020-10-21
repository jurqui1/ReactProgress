import React from 'react';
import './UserOutput.css';

const outputHandler = (props) =>{
    return (
    <div className = 'UserOutput'>
        <p>This is going on my git, so I should be more appropriate</p>
        <p>Username: {props.username}</p>
    </div>
    )
};
export default outputHandler;