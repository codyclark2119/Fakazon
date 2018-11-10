import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./componets/Login/Login.js";
import './App.css';
import Navbar from "./componets/Navbar/Navbar.js";
import Home from "./componets/Home/Home.js";
import Signup from "./componets/Signup/Signup.js";
import Profile from "./componets/Profile/Profile.js";
import Products from "./componets/Products/Products.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/products" component={Products} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
