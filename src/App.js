import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Student from "./components/Student";
import students from "./students.json";
// import Classroom from "./components/Classroom";

export default class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      counter : 0,
      color:  this.colorMapper(),
      favoriteStudent: this.pickRandomElementFromArray(students),
      visibleStudents: students.slice(0,2)
    }
    // this.increment = this.increment.bind(this);
  }

  colorMapper = () => {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  increment = ()=>{
    this.setState({
        counter: this.state.counter + 1,
        color: this.colorMapper()
    })
  }

  pickRandomElementFromArray = (anArray)=> {
    return anArray[Math.floor(Math.random()*anArray.length)];
  }

  pickNewFavoriteStudent = ()=> {
    this.setState({
      favoriteStudent: this.pickRandomElementFromArray(students)
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.increment}>Increment Counter</button>
        {this.state.counter < 10 ||
          <h1>Hooraaay we've reached 10!</h1>
        }
        <h1>Favorite Student</h1>
        <Student 
          firstname={this.state.favoriteStudent.firstname}
          lastname={this.state.favoriteStudent.lastname}
          profile_pic={this.state.favoriteStudent.profile_pic}
          color="green"
        />

        <button onClick={this.pickNewFavoriteStudent}>Pick new favorite</button>
        {students.map((student, index)=> 
          <Student 
              key={student.firstname+student.lastname}
              firstname={student.firstname} 
              lastname={student.lastname}
              profile_pic={student.profile_pic}
              color={this.state.color}
          />
        )}
      </div>
    )
  }
}