import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleChange(val){
    this.setState({text: val})
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <input onChange= {(e) => this.handleChange(e.target.value)} />
        <p> {this.state.text} </p>
      </div>
    );
  }
}

export default App;
