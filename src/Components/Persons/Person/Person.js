import React from 'react';

const Person = (props) => {
    console.log('[PersonJS] Render')
    return(
        <div className="Person">
            <p onClick={props.click}>{props.name}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} ></input>
        </div>
    );
}
export default Person;