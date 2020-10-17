import React, { useState } from 'react';
import Person from './Person/Person';
import './App.css';

const App = () => {

  const [appState] = useState({
      persons: [
        {name: 'Renan', age: 22},
        {name: 'Carlos', age: 32},
        {name: 'Rodrigues', age: 12},
      ]
  });

  return (
    <div className="App">
      <h1> I'm a React App!</h1>
      {appState.persons.map( person => {
        return <Person name={person.name} age={person.age} />
      })}
    </div>
  );
}

export default App;
