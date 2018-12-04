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
            selectedItem: "",
            total: ""
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

    gotoLogin = () => {
        window.location.assign("/login");
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

    addTotal = () => {
        let Total = 0.00;
        for (let x = 0; x < this.state.cart.length; x++) {
            let starter = 0;
            starter += (this.state.cart[x].price * this.state.cart[x].quantity)
            Total += starter;
        };
        this.setState({ total: Total }) ;
        console.log(this.state.total);
    }


    render() {

        const isLoggedIn = this.props.isLoggedIn;

        const isntLogged = (
            <div>
                <Button color="secondary" onClick={this.toggle}><i className="fas fa-shopping-cart"></i> Cart</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Your Cart</ModalHeader>
                    <ModalBody>
                        {this.state.cart.map((result, index) => (
                            <Items key={index} result={result} />
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.gotoLogin}>Login to Checkout!</Button>{' '}
                        <Button color="secondary" onClick={this.clearCart}>Clear Cart</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )

        const isLogged = (
            <div>
                <Button color="secondary" onClick={this.toggle}><i className="fas fa-shopping-cart"></i> Cart</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Your Cart</ModalHeader>
                    <ModalBody>
                        {this.state.cart.map((result, index) => (
                            <Items key={index} result={result} />
                        ))}
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Finish Purchases!</Button>{' '}
                        <Button color="secondary" onClick={this.clearCart}>Clear Cart</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )

        return (
            <div>
                {isLoggedIn ? isLogged : isntLogged}
            </div>
        );
    }
}

export default Cart;