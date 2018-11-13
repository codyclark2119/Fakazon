import React, { Component } from "react";
import API from "../../API/index.js";
import ProductModal from "./ProductModal";
import {
    Card, CardText, CardBody, CardDeck,
    CardTitle, Row, Col, Button
} from 'reactstrap';

export default class Products extends Component {

    state = {
        productList: [],
        userQuery: ""
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
            [event.target.name]: event.target.value
        })
    }

    userSearch = (event) => {
        event.preventDefault();
        this.setState({
            productList: ""
        });
        API.userSearch(this.state.userQuery)
            .then(res =>
                this.setState({
                    productList: res.data
                })
            )
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div className="container">

                <Row>
                    <Col xs="8">
                        <input
                            name="userQuery"
                            type="name"
                            className="form-control"
                            placeholder="What are you looking for?"
                            onChange={this.captureInput} ></input>
                    </Col>
                    <Col xs="4">
                        <Button onClick={this.userSearch}>Search!</Button>
                    </Col>
                    <Row>
                        <CardDeck>
                            {this.state.productList.map(result => (
                                <Col sm="3" key={result._id}>
                                    <Card>
                                        <CardBody className="card-body">
                                            <CardTitle>{result.product}</CardTitle>
                                            <CardText><strong>{result.price}</strong></CardText>
                                            <ProductModal result={result} />
                                        </CardBody>
                                    </Card>
                                </Col>
                            ))}
                        </CardDeck >
                    </Row>


                </Row>
            </div>
        )
    }
}