import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      myFaveThings: ['Glock 43x', 'DPMS Recon', 'Pizza', 'Football', 'March Madness', 'NBA Finals']
    }
  }

  render(){
    let allFaveThings = this.state.myFaveThings.map((el, i) => {
      return (
        <li key={i} > {el} </li>
      )
    })
    return (
      <div> 
        <h1> ALL MY FAVORITE THINGS </h1>
        {allFaveThings}
      </div>
    )
  }
}

export default App;
