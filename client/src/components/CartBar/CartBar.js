import React from 'react';
import Cart from "../Cart/Cart.js";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import "./CartBar.css";

export default class CartBar extends React.Component {


  render() {
    return (
      <div>
        <Navbar className="bstyle" color="dark" dark expand="md">
          <NavbarBrand href="/"><img className="logo" alt="FakeAzon" src={require("../../images/fakeazon.png")} /></NavbarBrand>

          <Nav className="ml-auto" navbar>

            <form className="form-inline">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
            <NavItem>
              <Cart />
            </NavItem>

          </Nav>

        </Navbar>
      </div>
    );
  }
}