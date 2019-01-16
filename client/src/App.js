import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login/Login.js";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import Signup from "./components/Signup/Signup.js";
import Products from "./components/Products/Products.js";
import Cart from "./components/Cart/Cart.js";
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
          <div className="body">
            <Navbar/>     
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/cart" component={Cart} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
