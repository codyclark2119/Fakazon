import React from "react";
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';

const ProductList = props => (
    <Row>
        {props.productList.map(result => (
            <Col sm="4">
                <Card key={result._id}>
                    <CardBody className="card-body">
                        <CardTitle>{result.product}</CardTitle>
                        <CardSubtitle>Made By {result.seller}</CardSubtitle>
                        <CardText><strong><h4>{result.price}</h4></strong></CardText>
                        <CardText>{result.description}</CardText>
                        <Button className="btn btn-primary" value={result._id}>More Details</Button>
                    </CardBody>
                </Card>
            </Col>
        ))}
    </Row>
);

export default ProductList;
