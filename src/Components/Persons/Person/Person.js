import React,{Component} from 'react';

class Person extends Component{
    
    render(){
        console.log('[PersonJS] Render')
        return(
            <div className="Person">
                <p onClick={this.props.click}>{this.props.name}</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} ></input>
            </div>
        );
    }
    
}
export default Person;