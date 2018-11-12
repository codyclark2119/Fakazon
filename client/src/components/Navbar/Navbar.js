import React from 'react';
import API from "../../API/index";
import "./Navbar.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default class Example extends React.Component {
  state = {
    isOpen: false,
    isLoggedIn:false
  }
  componentDidMount() {
    API.isLoggedIn().then((response)=>{
      if(response.data.success){
          this.setState({
            isLoggedIn:true
          })
      }
    })
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className="navgreen" color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mx-auto" navbar>

              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
              { this.state.isLoggedIn ? 
                ""
                :
                <NavLink href="/signup">Sign Up</NavLink>
              }
              </NavItem>
              <NavItem>
              { this.state.isLoggedIn ? 
                <NavLink href="/logout">Logout</NavLink>
                :
                <NavLink href="/login">Login</NavLink>
              }
              </NavItem>
              <NavItem>
                <NavLink href="/products">Products</NavLink>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}