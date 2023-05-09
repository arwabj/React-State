import React, { Component } from 'react';
import './App.css';
import Profile from './Component/Profile';


export default class App extends Component { 
       // 1 state init
    constructor (props) { 
      console.log("component init");
    super (props);
    this.state = {show: false};
  }
  // 2 state update
  toggle = () => {
    this.setState({show: !this.state.show});
  };

render() {
  return (
    <div className="App">
     <h1> hello state</h1>
     <button onClick={this.toggle}>toggle</button>
     {this.state.show? <Profile /> : null }
    </div>
  );
}
}


