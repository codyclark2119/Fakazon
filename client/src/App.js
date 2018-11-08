import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./components/Login/Login.js";
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import Home from "./components/Home/Home.js";
import Signup from "./components/Signup/Signup.js";
import Profile from "./components/Profile/Profile.js";
import Products from "./components/Products/Products.js";
import API from "./API";

class App extends Component {
  state = {
    isLoggedIn:false
  }

  componentDidMount(){
    API.isLoggedIn().then((response)=>{

      console.log("isLoggedIn", response.isLoggedIn)
    })
  }
  handleLogin = (user) => {
    console.log("I'm logging in baby", user);
    API.login(user).then((response)=>{
        console.log(response);
        if(response.data){
          this.setState({
            isLoggedIn:true
          })
          console.log(this.state)
        }
    })
}
  handleLogout = () =>{
    API.logOut().then((response) =>{
      this.setState({
        isLoggedIn:false
      })
    })
  }

  render() {
    return (
      <div className="App">
         <Router isLoggedIn={this.state.isLoggedIn}> 
          <div>
            <Navbar updateUser={this.updateUser} isLoggedIn={this.state.isLoggedIn} handleLogout={this.handleLogout}/>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={()=><Login handleLogin={this.handleLogin}/>} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/products" component={()=><Products isLoggedIn={this.state.isLoggedIn}/>} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
