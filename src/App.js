import React, { useState } from 'react';
import './App.css';
import person from './Person/Person';
import Person from './Person/Person';

const app = () => {
  const [personState, setPersonState] = useState({
    person: [
      {name: "Lenard", age:24, gender: "Male" },
      {name: "Jane", age:21, gender: "female" },
    ],
      showPerson: false
  });
  
  


  const nameHandler = () => {
    setPersonState ({
      person : [
        {name: "John", age:22, gender: "Mammals" },
        {name: "johan", age:20, gender: "Butterfly" },
      ]
    });
  };

  const changeName = (event) => {
    setPersonState ({
      person : [
        {name: event.target.value, age:22, gender: "Mammals" },
        {name: "johan", age:20, gender: "Butterfly" },
      ]
    });
  }

  const togglePerson = () => {
    const toggle = personState.showPerson;
    personState.setPersonState({personState: !toggle})
  }

    return (
      <div className="App">
        <h1>Lenard Esguerra</h1> 
        <p>React Practice</p>
        <button className = "btn" onClick={togglePerson}>Switch Name</button>

        { 
        personState.showPerson === true ?
        <div>
        <Person name={personState.person[0].name} age={personState.person[0].age} gender={personState.person[0].gender} change = {changeName} >Whats up</Person>
        <Person name= {personState.person[1].name} age={personState.person[1].age} gender={personState.person[1].gender}>Whats down</Person>
        </div> :null
        } 
        
      </div>
    );

    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, "Hi im Lenard!"))
    
  }

  export default app;

  