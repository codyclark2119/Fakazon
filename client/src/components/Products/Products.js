import React, { Component } from "react";
import API from "../../API/index.js";
import List from "./ProductList.js";

export default class Products extends Component {
    state = {
        productList: []
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

    productSelect = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="container">
                <List productList={this.state.productList} />
            </div>
        )
    }
}