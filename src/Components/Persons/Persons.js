import React,{Component} from 'react';
import Person from './Person/Person'
// const persons = props => {
//     console.log('[PersonSJS] Render')
//     return props.persons.map((person, index) => {
//         return <Person
//             click = {() => props.clicked(index)}
//             name = {person.name}
//             age = {person.age}
//             key = {person.id}
//             changed = {(event) => props.changed(event,person.id)}
//             />
//     })
// }
class Persons extends Component{
    // static getDerivedStateFromProps(props,state){
    //     console.log('[PersonSJS] getDerivedStateFromProps',props)
    //     return state;
    // }
    
    // componentWillReceiveProps(props){
    //     console.log('[PersonSJS] componentWillReceiveProps',props)
    // }

    // componentWillUpdate(){
    //     console.log('[PersonSJS] componentWillUpdate')
    // }
    
    shouldComponentUpdate(nextProps,nextState){
        console.log('[PersonSJS] shouldComponentUpdate')
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('[PersonSJS] getSnapshotBeforeUpdate')
        return {message:'LOLwa'};
    }
    componentDidUpdate(prevProps,prevState,snapShot){
        console.log('[PersonSJS] componentDidUpdate')
        console.log(snapShot)
    }
    render(){
        console.log('[PersonSJS] Render')
        return this.props.persons.map((person, index) => {
            return (
                <Person
                    click = {() => this.props.clicked(index)}
                    name = {person.name}
                    age = {person.age}
                    key = {person.id}
                    changed = {(event) => this.props.changed(event,person.id)}
                />
            )
        })
    }
}
export default Persons;