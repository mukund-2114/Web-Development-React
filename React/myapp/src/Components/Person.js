import React, {Component} from "react";
import Male from "./Male"
import "./Person.css";

// class based component
class Person extends Component{
    constructor(props){
        super(props);
        this.props = props;
        this.state = {
            name : "Mukund",
            age : 21
        };
    }
    render() {
        return(
            <div>
        
                {/* <div>Name : {this.props.name}</div>
                <div>Age : {this.props.age}</div> */}
                <div className="bg-dark details"><h1>Name : {this.state.name}</h1></div>
                <div style={{ 
                    fontWeight:"bolder",
                    color:"orange"
                 }}><h1>Age : {this.state.age}</h1></div>
                {/* <Male /> */}
            </div>
        );
    }
}
export default Person;