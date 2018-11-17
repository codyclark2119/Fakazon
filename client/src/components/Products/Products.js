import React, { Component } from "react";
import API from "../../API/index.js";
import ProductModal from "./ProductModal.js"
import {
    Row, Col, Button,
    Card, CardText, CardBody,
    CardTitle,
} from 'reactstrap';

export default class Products extends Component {

    state = {
        productList: [],
        userQuery: "",
        searchResults: [],
        error: ""
    };

    componentDidMount() {
        API.getItems()
            .then(res =>
                this.setState({
                    productList: res.data
                })
            )
            .catch(err => console.log(err));
    }

    captureInput = (event) => {
        this.setState({
            userQuery: event.target.value
        })
    }

    userSearch = (event) => {
        event.preventDefault();
        API.userSearch(this.state.userQuery)
            .then(res => {
                this.setState({ searchResults: res.data });
            })
            .catch(err => this.setState({ error: err.message }));

    }


    render() {
        return (
            <div className="container">

                <Row>
                    <Col xs="8">
                        <input
                            name="userQuery"
                            value={this.state.userQuery}
                            type="name"
                            className="form-control"
                            placeholder="What are you looking for?"
                            onChange={this.captureInput} />
                    </Col>
                    <Col xs="4">
                        <Button onClick={this.userSearch}>Search!</Button>
                    </Col>

                </Row>

                <br /><br />

                <Row>
                    <div id="results">
                        {this.state.productList.map((item, index) => (
                            <Col sm="4" key={index}>
                                <Card >
                                    <CardBody className="card-body">
                                        <CardTitle>{item.product}</CardTitle>
                                        <CardText><strong>{item.price}</strong></CardText>
                                        <ProductModal result={item} />
                                    </CardBody>
                                </Card>
                            </Col>))}

                    </div>
                </Row>

            </div>
        )
    }

}