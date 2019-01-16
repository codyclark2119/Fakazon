import React from "react";
import {
  Collapse, NavbarBrand,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import Cart from "../Cart/Cart.js";
import "./Navbar.css";
import Login from "../Login/Login.js";
import API from '../../API';
import Signup from "../Signup/Signup.js";

export default class Navi extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      isLoggedIn: false,
      username: null
    };
    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser(userObject) {
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
    const isLoggedIn = this.state.isLoggedIn;
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
            <Cart isLoggedIn={this.state.isLoggedIn} />
          </NavItem>
        </Nav>
      </div>
    );

    const noUserLinks = (
      <div>
        <Nav className="mx-auto" navbar>
          <NavItem>
            <Signup></Signup>
          </NavItem>

          <NavItem>
            <Login handleLogin={this.handleLogin}></Login>
          </NavItem>

          <NavItem>
            <Cart isLoggedIn={this.props.isLoggedIn} />
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