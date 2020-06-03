import React from 'react';
import classes from './Person.css'

const Person = (props) => {
    return(
        <div>
            <p onClick={props.click}>{props.name}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} ></input>
        </div>
    );
}
export default Person;