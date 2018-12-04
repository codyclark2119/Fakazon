import React, { Component } from "react";
import "./Products.css";
import API from "../../API/index.js";
import ProductList from "./ProductList.js";
import Searchbar from "../Searchbar/Searchbar.js";
import {
    Row, Navbar, Col
} from 'reactstrap';

export default class Products extends Component {

    state = {
        productList: [],
        userQuery: "",
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
            [event.target.name]: event.target.value
        })

    }

    userSearch = (event) => {
        event.preventDefault();
        API.userSearch(this.state.userQuery)
            .then(res => {
                console.log(res.data)
                this.setState({ productList: res.data });
            })
            .catch(err => this.setState({ error: err.message }));
    }

    render() {
        return (
            <div className="container-fluid thenav">
                <Navbar className="navgreen clearfix" color="light" light expand="lg">
                    <Col xs="3">{" "}</Col>


                    <Searchbar
                        className="float-right"
                        userQuery={this.state.userQuery}
                        captureInput={this.captureInput}
                        userSearch={this.userSearch} />
                </Navbar>

                <div className="view overlay rounded-top">
                    <img src={require("../../images/shopping.jpg")} width="100%" className="img-fluid" alt="Shoppers" />
                </div>

                <br />

                <div id="container-fluid">

                    <Row>
                        <ProductList
                            productList={this.state.productList}
                            searchResults={this.state.searchResults} />
                    </Row>
                </div>

            </div>
        )
    }

}