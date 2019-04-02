import React, { Component } from 'react';
import './App.css';
import Todo from './Components/Todo'


class App extends Component {
    constructor() {
      super();
      this.state = {
        list: [],
        input: ''
      }
      // this.handleAddBtn = this.handleAddBtn.bind(this)
    }

    handleInput = (val) => {
      this.setState({
        input: val
      })
      console.log(this.state.input)
    }

    handleAddBtn = () => {
      this.setState({
        list: [...this.state.list, this.state.input],
        input: ''
      })
      console.log('second', this.state.list)
    }
  
    render() {
      let newList = this.state.list.map((el, i) => {
        return (
          <Todo key={i} listItem={el} />
        )
      })
  
      return (
        <div className="App">
          <h1>My to-do list:</h1>
          <input onChange={(e) => this.handleInput(e.target.value)} />
          <button onClick={this.handleAddBtn}> Add </button>
          <h3> {newList} </h3>
        </div>
      );
    }
  }
  
  export default App;

