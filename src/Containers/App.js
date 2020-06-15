import React, { Component } from 'react';
import Persons from '../Components/Persons/Persons';
import Cockpit from '../Components/Cockpit/Cockpit';
import classes from './App.module.css';
import withClass from '../HOC/withClass';
import Aux from '../HOC/Aux'
import AuthContext from '../Context/auth-context' 

class App extends Component {
  constructor(props) {
    super(props);
    console.log('[AppJS] constructor')
    this.state = {
      persons: [
        { id: 1, name: 'Foo', age: 26 },
        { id: 2, name: 'Bar', age: 36 },
        { id: 3, name: 'Baz', age: 32 },
      ],
      showPersons: false,
      otherState: 'Some Other State',
      showCockpit: true,
      changeCounter: 0,
      isAuthenticated: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[AppJS] getDerivedStateFromProps', props)
    return state
  }
  // componentWillMount(){
  //   console.log('[AppJS] componentWillMount')
  // }
  shouldComponentUpdate() {
    console.log('[AppJS] shouldComponentUpdate')
    return true;
  }
  componentDidUpdate() {
    console.log('[AppJS] componentDidUpdate')
  }
  componentDidMount() {
    console.log('[AppJS] componentDidMount')
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    })
    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons, changeCounter: this.state.changeCounter+1 })
  }
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }
  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }
  loginHandler =() => {
    // const currentStatus = this.state.isAuthenticated
    // this.setState({isAuthenticated: !currentStatus})

    this.setState((prevState,props)=>{
      return {
        isAuthenticated : !prevState.isAuthenticated
      }
    })
  }
  render() {
    console.log('[AppJS] Render')
    let persons = null;
    if (this.state.showPersons) {
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

    return (

      <Aux >
        <button onClick={() => { this.setState({ showCockpit: !this.state.showCockpit }) }}>Remove Cockpit</button>
        <AuthContext.Provider 
          value={{
            authenticated: this.state.isAuthenticated,
            login: this.loginHandler
          }}>
          {this.state.showCockpit ? <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonHandler}
          /> : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    )
  }

}
export default withClass(App, classes.App);
