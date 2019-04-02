import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      message: ''
    }
  }

  handleChange(val){
    this.setState({message: val})
  }

  render(){
    return (
      <div> 
        <h1> 
          RedHand3dBandit
        </h1>
        <input onChange={(e) => {this.handleChange(e.target.value)}} /> 
        <h4> {this.state.message} </h4>
      </div>
    )
  }
}

export default App