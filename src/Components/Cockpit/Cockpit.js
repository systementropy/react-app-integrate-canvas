import React, { useEffect, useRef, useContext } from "react";
import classes from './Cockpit.module.css';
import AuthContext from '../../Context/auth-context'
const Cockpit = (props) => {

  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);
  useEffect(() => {
    console.log('[CockpitJS] UseEffect:Only For The First Time')
    const timer = setTimeout(() => { /*alert('Only For The First Time')*/ }, 1000)
    toggleBtnRef.current.click()
    return () => {
      
      clearTimeout(timer)
      console.log('[CockpitJS] UseEffect:Cleanup WOrk')
    }
  }, [])
  useEffect(() => {
    console.log('[CockpitJS] UseEffect:Persons')
  }, [props.persons])
  useEffect(() => {
    console.log('[CockpitJS] UseEffect:showPersons')
    setTimeout(() => { /*alert('Toggle Happened')*/ }, 1000)
  }, [props.showPersons])
  const assignedClasses = [];
  let btnClass = '';
  if (props.showPersons) {
    btnClass = classes.active
  }
  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red)
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold)
  }
  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is it.......</p>
      <button
        className={btnClass}
        onClick={props.clicked}
        ref={toggleBtnRef}
      >Click to Toggle</button>
      {/* <AuthContext.Consumer>
        {(context)=><button onClick={context.login}>Login</button>}
      </AuthContext.Consumer> */}
      <button onClick={authContext.login}>Login</button>
    </div>
  )
}
export default React.memo(Cockpit);