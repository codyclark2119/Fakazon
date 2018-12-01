import React from "react";
import {
    Col,
    Card, CardText, CardBody,
    CardTitle,
} from 'reactstrap';
import ProductModal from "./ProductModal.js"

const ProductList = (props) => {
        return (
        props.productList.map((item, index) => (
            <Col sm="4" key={index}>
                <Card>
                    <CardBody className="card-body">
                        <CardTitle>{item.product}</CardTitle>
                        <CardText><strong>{item.price}</strong></CardText>
                        <ProductModal result={item} />
                    </CardBody>
                </Card>
            </Col>))
        )
    
}

export default ProductList;