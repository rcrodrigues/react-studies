import React from 'react';
import './CharComponent.css';

const CharComponent = (props) => {
return <div className='char-component' onClick={props.onclick}>{props.text}</div>
};

export default CharComponent;