import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/Login.js";
import './App.css';
import Navbar from "./componets/Navbar/Navbar.js";
import Home from "./componets/Home/Home.js";
import Signup from "./componets/Signup/Signup.js";
import Profile from "./componets/Profile/Profile.js";
import Products from "./componets/Products/Products.js";
import Cart from "./componets/Cart/Cart.js";
import API from "./API/";
import CartBar from "./components/CartBar/CartBar.js";

class App extends Component {
  state = {
    isLoggedIn: false,
    user: ""
  }
  handleLogin = (user) => {
    console.log("I'm logging in baby", user);
    API.login(user).then((response) => {
      console.log(response);
        this.setState({
          isLoggedIn: true,
          user: response.data.user._id
        })
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <CartBar />
            <Navbar isLoggedIn={this.state.isLoggedIn}/>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={() => (<Login handleLogin={this.handleLogin} />)} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/cart" component={Cart} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
