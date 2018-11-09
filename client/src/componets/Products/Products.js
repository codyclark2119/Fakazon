import React, { Component } from "react";
import API from "../../API/index.js";
import ProductModal from "./ProductModal.js"
import {
    Card, CardText, CardBody, CardDeck,
    CardTitle, Row, Col
} from 'reactstrap';

export default class Products extends Component {
    state = {
        productList: [],
        selectedItem: "",
    }


    productDetails = (event) => {
        event.preventDefault();
        console.log("Looking for ", this.state.selectedItem);
        API.details(this.state.selectedItem).then(function (response) {
            console.log(response);
        })
    }

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
            selectedItem:event.target.value
        });
        API.details(this.state.selectedItem).then(function (response) {
            console.log(response);
        })
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
                                        <ProductModal result={result} captureInput={this.captureInput}></ProductModal>
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