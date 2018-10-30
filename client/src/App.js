import React, { Component } from 'react';
import Login from "./componets/Login/Login.js";
import Products from "./componets/Products/Products.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Login/>
      <Products/>
      </div>
    );
  }
}

export default App;
