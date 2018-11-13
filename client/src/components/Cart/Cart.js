import React from "react";
import API from "../../API/index.js";
import {
    Button, Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import Items from "./Items.js";

class Cart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            cart: [],
            selectedItem: ""
        };

        this.toggle = this.toggle.bind(this);
    }

    clearCart = () => {
        API.clearCart()
            .then(
                window.location.reload()
            )
            .catch(err => console.log(err));
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
        if (this.state.modal === false) {
            API.getCart()
                .then(res =>
                    this.setState({
                        cart: res.data
                    })
                )
                .catch(err => console.log(err));
        }
    }

    render() {
        return (
            <div>
                <Button color="secondary" onClick={this.toggle}><i className="fas fa-shopping-cart"></i> Cart</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Your Cart</ModalHeader>
                    <ModalBody>
                        {this.state.cart.map(result => (
                            <Items result={result} />
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Finish Purchase</Button>{' '}
                        <Button color="secondary" onClick={this.clearCart}>Clear Cart</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default Cart;