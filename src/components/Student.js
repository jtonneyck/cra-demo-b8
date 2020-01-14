import React from "react";
import "./Student.scss";

function Student(props){
    return(
    <div style={{backgroundColor: props.color}} className="student">
        <h1>{props.firstname} {props.lastname} </h1>
        <img src={props.profile_pic} alt=""/>
    </div>
    )
}

export default Student;