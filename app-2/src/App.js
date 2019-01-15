import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state= {
      food: ['crab','sushi','pizza','cereal','spaghetti','otter']
    }


  }


  render() {
    let myFoods = this.state.food.map((el, i) => {
      return(
        <h4 key={i}> { el } </h4>
      )
    })
    return (
      <div className= 'App'> 
        {myFoods}
      </div>
    )
  }
    
  
  //   return (
  //     <div className="App">
  //       <h4> { this.state.food.toString() } </h4>
        
  //     </div>
  //   );
  // }
}

export default App;
