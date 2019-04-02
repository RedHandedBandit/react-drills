import React, { Component } from 'react';
import './App.css';
import Todo from './Components/Todo'


class App extends Component {
    constructor() {
      super();
  
      this.state = {
        list: [],
        input: ''
      };
  
      this.handleAddTask = this.handleAddTask.bind( this );
    }
  
    handleInputChange( value ) {
      console.log('im first')
      this.setState({ input: value });
    }
  
    handleAddTask() {
      console.log('im second')
      this.setState({ 
        list: [...this.state.list, this.state.input ], 
        // why is the input added to the array
        input: '' 
      });
    }
  
    render() {
      let list = this.state.list.map( ( element, index ) => {
        return (
          <Todo key={ index } task={ element } /> 
        )
      })
  
      return (
        <div className="App">
          <h1>My to-do list:</h1>
          {/* why is the value in the input */}
          <div>
            <input value={this.state.input} 
                   placeholder="Enter new task" 
                   onChange={ (e) => this.handleInputChange( e.target.value ) }
            />
            {console.log('im third')}
            
            
            <button onClick={ this.handleAddTask }>Add</button>
          </div>
  
          <br />
  
          { list }
        </div>
      );
    }
  }
  
  export default App;

// import React, {Component} from 'react'

// class App extends Component {
//     constructor(){
//         super()
//         this.state ={
//           list: '',
//           toDoArray: []
//         }
//     }

//     handleChange(val){
        
//         this.setState({list: val})
//     }

//     handleChangeAdd(val){
//         console.log('it worked')
//         this.setState({toDoArray: []})
//     }

// render() {
//     let newToDo = this.state.toDoArray.map((el, i) => {
//         return <h4 key={i}> { el } </h4> 
//         // why doesnt this return a new array? 
//     })
//     return (
//         <div>
//              <h2> My to-do list: </h2>
//              <input onChange= { (e) => this.handleChange(e.target.value)}/>
//              <button onClick= {(e) => this.handleChange(e.target.value)}> Add </button>
//              {this.state.list}
//         </div>
//     )
// }
// }

// export default App


