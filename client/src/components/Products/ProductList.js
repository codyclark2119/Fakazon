import React from "react";
import "./ProductList.css";
import {
    CardImg,
    Card, CardSubtitle, CardBody,
    CardTitle, Col
} from 'reactstrap';
import ProductModal from "./ProductModal.js";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };

    }


    render() {
        return (
            this.props.productList.map((item, index) => (
                <Col key={index} xs="3">
                    <div className="container product">
                    <Card inverse >
                        <CardBody className="card-body" >
                            <CardTitle className="cardTitle"><i><u>{item.product}</u></i></CardTitle>

                            <CardImg src={item.photoLink} className="clearfix" id="productImg" alt={item.product} />
                            <CardSubtitle className="cardCost"><strong>${item.price}</strong></CardSubtitle>
                            <br />
                            <ProductModal result={item} />
                        </CardBody>
                    </Card>
                    </div>
                </Col>
            ))
        )
    }

}

export default ProductList;