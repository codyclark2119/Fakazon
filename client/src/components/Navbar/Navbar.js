import React from 'react';
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
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Fakeazon Web Store: The Future of Online Ecommerce</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>

              <NavItem>
                {
                  this.props.isLoggedIn ? <NavLink href="/logout" onClick={this.props.handleLogout}>Log Out</NavLink> : <NavLink href="/signup"> Sign Up</NavLink>
                }
              </NavItem>

              <NavItem>
              {
                  this.props.isLoggedIn ? "" : <NavLink href="/login"> Log In</NavLink>
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