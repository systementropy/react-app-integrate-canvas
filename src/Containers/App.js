import React,{Component} from 'react';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit'
import classes from './App.module.css'
// import Persons from './Persons/Persons'

class App extends Component{
  constructor(props){
    super(props);
    console.log('[AppJS] constructor')
    this.state = {
      persons:[
        {id:1,name:'Foo',age:26},
        {id:2,name:'Bar',age:36},
        {id:3,name:'Baz',age:32},
      ],
      showPersons: false,
      otherState: 'Some Other State',
      showCockpit: true
    }
  }
  
  static getDerivedStateFromProps(props,state){
    console.log('[AppJS] getDerivedStateFromProps',props)
    return state
  }
  // componentWillMount(){
  //   console.log('[AppJS] componentWillMount')
  // }
  shouldComponentUpdate(){
    console.log('[AppJS] shouldComponentUpdate')
    return true;
  }
  componentDidUpdate(){
    console.log('[AppJS] componentDidUpdate')
  }
  componentDidMount(){
    console.log('[AppJS] componentDidMount')
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
    console.log('[AppJS] Render')
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      )
    }
    
    return(
      
      <div className={classes.App}>
        <button onClick={()=>{this.setState({showCockpit:!this.state.showCockpit})}}>Remove Cockpit</button>
        {this.state.showCockpit?<Cockpit 
          title = {this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked= {this.togglePersonHandler}
        />:null}
        {persons}
      </div>
    )
  }
  
}
export default App;
