import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';
import Main from './Main';



class App extends Component { 
  
  
  render() {
    console.log('did render')
    return (
      <div className="App">
        <Main/>
      </div>
    ); 
  }
}

export default App;
