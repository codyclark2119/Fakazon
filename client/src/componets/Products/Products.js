import React, { Component } from "react";
import API from "../../API/API.js";

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

    listCreate() {
        this.state.productList.map(item => (
            <div key={item._id}>
                <a href={"/products/" + item._id}>
                    <strong>
                        {item.product} <br /> {item.price}
                    </strong>
                </a>
            </div>
        ))
    }

    render() {
        return (
            <div className="container">
                <h1>It works</h1>
            </div>
        )
    }
}