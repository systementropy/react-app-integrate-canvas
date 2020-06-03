import React,{Component} from 'react';
import Person from './Persons/Person/Person';
import classes from './App.module.css'
// import Persons from './Persons/Persons'

class App extends React.Component{
  state = {
    persons:[
      {id:1,name:'Foo',age:26},
      {id:2,name:'Bar',age:36},
      {id:3,name:'Baz',age:32},
    ],
    showPersons: false,
    otherState: 'Some Other State'
  }
  
  nameChangeHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons})
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState ({showPersons: !doesShow})
  }
  render(){
    let persons = null;
    let btnClass = '';
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click = {() => this.deletePersonHandler(index)}
              name = {person.name}
              age = {person.age}
              key = {person.id}
              changed = {(event) => this.nameChangeHandler(event,event.id)}
              />
          })}
        </div>
      )
      btnClass = classes.Red;
    }
    const assignedClasses = [];
    if(this.state.persons.length<=2){
      assignedClasses.push(classes.red)
    }
    if(this.state.persons.length<=1){
      assignedClasses.push(classes.bold)
    }
    console.log(classes,assignedClasses);
    
    return(
      
      <div>
        <h1>Hello</h1>
        <p className={assignedClasses.join(' ')}>This is it.......</p>
        <button 
          className={btnClass} 
          onClick={this.togglePersonHandler}
        >Click to Toggle</button>
        {persons}
      </div>
    )
  }
  
}
export default App;
