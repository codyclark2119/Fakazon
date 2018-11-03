import React, { Component } from 'react';
import Login from "./componets/Login.js";
import Header from "./componets/searchBar.js";
import './App.css';
import searchBar from './componets/searchBar.js';
import pageHeader from './componets/pageHeader.js'

class App extends Component {
  render() {
    return (
      <div className="App">
      <pageHeader>
      <searchBar>

      </div>
    );
  }
}

export default App;
