import React from 'react';
import API from "../../API/index.js";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem } from 'reactstrap';

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            cart: []
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
        });
    }

    componentDidMount() {
        API.getCart()
            .then(res =>
                this.setState({
                    cart: res.data
                })
            )
            .catch(err => console.log(err));
    }


    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggle}>Cart</Button>
                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Your Cart</ModalHeader>
                    <ModalBody>
                        <ListGroup>
                            {this.state.cart.map(result => (
                                <div key={result.name}>
                                    <ListGroupItem value={result.itemId}>{result.name} {' '} {result.price}</ListGroupItem>
                                </div>
                            ))}
                        </ListGroup>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Checkout!</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Clear Cart</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Cart;