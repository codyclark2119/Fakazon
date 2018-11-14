import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

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

  const userLinks = (
    <div>
      <Nav className="mx-auto" navbar>
        <NavItem>
            <NavLink href="/" onClick={this.logout}>
            <i className="fas fa-sign-out-alt"></i> Logout</NavLink>
          </NavItem>
                    
          <NavItem>
            <NavLink href="/products">
            <i className="fas fa-briefcase"></i> Products</NavLink>
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
      </Nav>                
    </div>
  );

    const isLoggedIn = this.props.isLoggedIn;

    return (
      <div>
        <Navbar className="navgreen" color="light" light expand="md">
  
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