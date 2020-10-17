import React from 'react';

const ValidationComponent = (props) => {
    return <p> {props.currentLength >= props.minLength ? 'Text long enough' : 'Text too short' } </p>
};

export default ValidationComponent;