import React, { Component } from 'react';
import './App.css';
import Image from './Components/Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image img='https://imgix.ranker.com/user_node_img/50041/1000806839/original/5d5f6984-e61a-4acc-ad6a-7ba5b77176ae-photo-u2?w=650&q=50&fm=jpg&fit=crop&crop=faces' />
      </div>
    );
  }
}

export default App;
