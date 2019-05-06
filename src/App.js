import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state = {
    username: "Shobhan"
  }

  changeNameHandler = (event) => {
    this.setState({username: "Manu"})
  }

  inputChangeHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render(){

    const style = {
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

  return (
    <div className="App"> 
      <h1 style={style}>Assignment 1</h1>
      <UserInput value={this.state.username} change={this.inputChangeHandler}/>
      <UserOutput username={this.state.username}/>
      <UserOutput username  ="Manu" click={this.changeNameHandler}/>
    </div>
  );
  }
}

export default App;
