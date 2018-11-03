import React, {Component} from "react";
import API from "../API/users.js";
import '../index.css';
import { Grid, Row, Col, Image, FormGroup, ControlLabel, Form, FormControl, Button} from "react-bootstrap";
export default class searchBar extends Component {
    
    }

    render(){
        return(
          <Grid>
          <Row className="show-grid">
          <Navbar>
  <Navbar.Header>
  <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
      </NavDropdown>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Navbar.Form pullLeft>
      <FormGroup>
        <FormControl type="text" placeholder="Search" />
      </FormGroup>{' '}
      <Button type="submit">Search</Button>
    </Navbar.Form>
  </Navbar.Collapse>
</Navbar>;
  
  </Row>
  </Grid>


           
        )
    }
    
export default searchBar;