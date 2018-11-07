import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/Login.js";
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import Signup from "./components/Signup/Signup.js";
import Profile from "./components/Profile/Profile.js";
import Products from "./components/Products/Products.js";
import Jumbo from "./components/Jumbotron/Jumbotron.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Jumbo />
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
