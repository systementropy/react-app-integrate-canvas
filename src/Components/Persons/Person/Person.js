import React,{Component} from 'react';
import PropTypes from 'prop-types';
import withClass from '../../../HOC/withClass'
import Aux from '../../../HOC/Aux'
import classes from './Person.module.css';
import AuthContext from '../../../Context/auth-context'
class Person extends Component{
    constructor(props){
        super(props);
        this.inputEltRef = React.createRef();
    }
    componentDidMount(){
        // this.inputEltName.focus();
        this.inputEltRef.current.focus();
    }
    static contextType = AuthContext;
    render(){
        console.log('[PersonJS] Render')
        return(
            <Aux>    
                {/* <AuthContext.Consumer>
                    {(context) =>
                        context.authenticated ?<h2>Authenticated!!!</h2>:<h2>Please, Login!</h2>
                    }    
                </AuthContext.Consumer> */}
                
                {this.context.authenticated ?<h2>Authenticated!!!</h2>:<h2>Please, Login!</h2>}
                <p onClick={this.props.click}>Name: {this.props.name}</p>
                <p>Age: {this.props.age}{this.props.children}</p>
                <input 
                    // ref={(inputElt)=>{this.inputEltName = inputElt}}
                    ref = {this.inputEltRef}
                    type="text" 
                    value = {this.props.name}
                    onChange={this.props.changed} ></input>
            </Aux>
        );
    }
    
}
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};
export default withClass(Person, classes.Person);