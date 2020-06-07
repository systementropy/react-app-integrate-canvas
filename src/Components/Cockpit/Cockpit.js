import React from "react";
import classes from './Cockpit.module.css'
const cockpit = (props) => {
    const assignedClasses = [];
    let btnClass ='';
    if(props.showPersons){
        console.log('eherhe')
        btnClass = classes.active
    }
    console.log(classes)
    console.log('btnClass'+btnClass)
    if(props.persons.length<=2){
      assignedClasses.push(classes.red)
    }
    if(props.persons.length<=1){
      assignedClasses.push(classes.bold)
    }
    return (
        <div className={classes.Cockpit}>
            <h1>Hello</h1>
            <p className={assignedClasses.join(' ')}>This is it.......</p>
            <button 
            className={btnClass} 
            onClick={props.clicked}
            >Click to Toggle</button>
        </div>
    )
}
export default cockpit;