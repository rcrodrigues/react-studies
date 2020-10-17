import React from 'react';

const person = (props) => {

    const clickHandler = () => {
        alert(`Ì'm ${props.name}`);
    }

    return <div>
        <h2> I'm a Person name {props.name} and I'm {props.age} o/</h2>
        <button onClick={clickHandler}> test </button>
        {props.children}
    </div>
}

export default person;