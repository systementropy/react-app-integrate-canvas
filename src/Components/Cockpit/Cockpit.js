import React,{useEffect} from "react";
import classes from './Cockpit.module.css';
const Cockpit = (props) => {
    useEffect(()=>{
      console.log('[CockpitJS] UseEffect')
    })
    const assignedClasses = [];
    let btnClass ='';
    if(props.showPersons){
        btnClass = classes.active
    }
    if(props.persons.length<=2){
      assignedClasses.push(classes.red)
    }
    if(props.persons.length<=1){
      assignedClasses.push(classes.bold)
    }
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is it.......</p>
            <button 
            className={btnClass} 
            onClick={props.clicked}
            >Click to Toggle</button>
        </div>
    )
}
export default Cockpit;