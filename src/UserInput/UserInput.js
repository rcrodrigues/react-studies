import React from 'react';

const UserInput = (props) => {
    return <div>
        <button onClick={() => props.changed('')} >reset</button>
        <input type='text' onChange={event => props.changed(event.target.value)} value={props.value}/>
        {props.children}
    </div>
};

export default UserInput;
