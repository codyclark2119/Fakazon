import React, {Component} from "react";
import API from "../API/users.js";
import { Grid, Row, Col, Image, FormGroup, ControlLabel, Form, FormControl, Button} from "react-bootstrap";
export default class Header extends Component {
    
    }

    render(){
        return(
            <Grid>
            <Row className="show-grid">
              <Col xs={12} md={8}>
                <code>{'<Col xs={12} md={8} />'};</code>
                <Image src="/thumbnail.png" responsive />;
              </Col>
              <Col xs={6} md={4}>
                <code>{'<Col xs={6} md={4} />'}</code>
                <Form inline>
  <FormGroup controlId="formSearch">
    <ControlLabel>Search</ControlLabel>{' '}
    <FormControl type="text" placeholder="enter search criteria" />
  </FormGroup>{' '}
  <Button type="search">Search</Button>
</Form>;
              </Col>
            </Row> 
        )
    }

