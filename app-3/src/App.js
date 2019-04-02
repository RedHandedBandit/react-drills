import React, { Component } from 'react';
import './App.css';

class App extends Component {
 constructor(){
   super()
   this.state = {
    myFaveThings: ['Glock 43x', 'DPMS Recon', 'Pizza', 'Football', 'March Madness', 'NBA Finals'],
    text: ''
   }
 }

 handleChange(val){
   this.setState({text: val})
 }

 render(){
   let singleFaveThing = this.state.myFaveThings.filter((el) => {
     return el.includes(this.state.text)
   }).map((el, i) => {
    return <h1 key={i}> {el} </h1>
   })
   return (
     <div> 
       <input onChange={e => {this.handleChange(e.target.value)}} />
       {singleFaveThing}
     </div>
   )
 }
}

export default App;
