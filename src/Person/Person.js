import React from 'react';
import './Person.css';



const person = (props) => {
    return(
        <div className = "person">
        <p>Hi! I'm {props.name}, {props.age} yrs old and I am a {props.gender}!</p>
        <p>{props.children}</p>
        <input type="text" onChange = {props.change} value = {props.name}/>
        </div>
    ) 
}

export default person;