import React from "react";
import {
  Collapse, NavbarBrand,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import Cart from "../Cart/Cart.js";
import "./Navbar.css";
import API from '../../API';

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  logout = () => {
    API.logout().then((response) => {
    }).catch(error => {
      // console.log("Logout error")
      console.log(error)
    })
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const isLoggedIn = this.props.isLoggedIn;
    console.log("navbar render, props:");
    console.log(this.props);

    const userLinks = (
      <div>
        <Nav className="mx-auto" navbar>
          <NavItem>
            <NavLink href="/" onClick={this.logout}>
              <i className="fas fa-sign-out-alt"></i> Logout</NavLink>
          </NavItem>

          <NavItem>
            <Cart isLoggedIn={this.props.isLoggedIn} />
          </NavItem>
        </Nav>
      </div>
    );

    const noUserLinks = (
      <div>
        <Nav className="mx-auto" navbar>
          <NavItem>
            <NavLink href="/signup">
              <i className="fas fa-user-plus"></i> Sign Up</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/login">
              <i className="fas fa-sign-in-alt"></i> Login</NavLink>
          </NavItem>

          <NavItem>
            <Cart className="float-right" isLoggedIn={this.props.isLoggedIn} />
          </NavItem>
        </Nav>
      </div>
    );


    return (
      <div>
        <Navbar className="bstyle" color="dark" dark expand="md">
          <NavbarBrand href="/"><img className="logo" alt="FakeAzon" src={require("../../images/fakeazon.png")} /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <div>
              {isLoggedIn ? userLinks : noUserLinks}
            </div>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}