import React from 'react';
import './UserOutput.css';

const UserOutput = (props) => {
    return (
    <div className="output">
      <p onClick={props.click}>Hello {props.username}</p>
      <p>How are you?</p>
    </div>
    )    
}

export default UserOutput