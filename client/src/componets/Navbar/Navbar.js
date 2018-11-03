import React, { Component } from "react";
import { Link } from "react-router-dom";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
class Nav extends Component {
  constructor(props) {
  super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
    collapsed: true,
    };
  }
 
 toggleNavbar() {
    this.setState({
    collapsed: !this.state.collapsed,
    });
  }

 render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
      return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark transparent-nav">
          <div className="container">
                  <a className="navbar-brand" href="/">Fake Amazon</a>
                    <button onClick={this.toggleNavbar} className={`${classTwo}`} type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon" />
                    </button>
          
                <div className={`${classOne}`} id="navbarResponsive">
                  <ul className="navbar-nav ml-auto">

                    <li className="nav-item active">
                      <Link className="nav-link" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                      <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/signup">Sign Up</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/profile">My Profile</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/products">Products</Link>
                    </li>
                    
                  </ul>
                </div>
          </div>
        </nav>
      );
    }
 }
 
export default Nav;