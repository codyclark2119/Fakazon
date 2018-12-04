import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./components/Login/Login.js";
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import Signup from "./components/Signup/Signup.js";
import Products from "./components/Products/Products.js";
import Cart from "./components/Cart/Cart.js";
import API from "./API/";
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser = () => {
    API.getUser().then(response => {
       console.log(response.data)
      if (response.data.user) {
         console.log("User in session")
        this.setState({
          isLoggedIn: true,
          user: response.data.user.username
        })
      } else {
         console.log("No user in session");
        this.setState({
          isLoggedIn: false,
          username: null
        })
      }
    })
  }

  handleLogin = (user) => {
    API.login(user).then((response) => {
        this.setState({
          isLoggedIn: true,
          user: response.data.user.username
        })
      }).catch(error => {
        // console.log("Login error")
        console.log(error);
    
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Navbar isLoggedIn={this.state.isLoggedIn}/>     
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={() => 
              (<Login handleLogin={this.handleLogin} />)} />
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
