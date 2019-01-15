import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      food: ['mexican','american','italian','korean','vietmanese','greek','thai'],
      filteredFood: ''
      
    }
  }

  handleChange(filter){
    this.setState({filteredFood: filter})
  }


    render() {
      let foodsToDisplay = this.state.food.filter( (element, index) => {
        return element.includes( this.state.filteredFood );
      }).map( (element, index) => {
        return <h2 key={ index }>{ element }</h2>
      })
      console.log(foodsToDisplay)
      
      
      // let bestFood = this.state.food.map((el, i) => {
      //   return ( 
      //     <h4 key={i}> { el } </h4>
      //   )
      // }).filter((el, i) => {})


      return(
        <div className= "App">
         <input onChange= { (e) => this.handleChange(e.target.value)}/>
          {foodsToDisplay}
         </div>
      )
    }
  // render() {
  //   let bestFood = this.state.food.map( (el, i) => {
  //     return(
  //       <h4 key={i}> { el } </h4>
  //     )
  //   })

  //   let findFood = this.state.food.filter((el, i) => { 
  //     if(this.state.food === this.state.food.charAt('')){
  //       return { el }
  //     }
  //   })
    
  //   return (
  //     <div className="App">
      
  //     <input onChange= { (e) => this.state.filteredFood(e.target.value) } />
  //       <p> {bestFood} </p>
  //     </div>
  //   );
  // }
}

export default App;
