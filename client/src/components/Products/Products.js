import React, { Component } from "react";
import API from "../../API/index.js";
import ProductModal from "./ProductModal";
import {
    Card, CardText, CardBody, CardDeck,
    CardTitle, Row, Col,
} from 'reactstrap';

export default class Products extends Component {

    state = {
        productList: []
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

    render() {
        return (
            <div className="container">
                <CardDeck>
                    <Row>
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
                    </Row>
                </CardDeck >
            </div>
        )
    }
}