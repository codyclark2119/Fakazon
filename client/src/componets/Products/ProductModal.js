import React from 'react';
import API from "../../API/index.js";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ProductModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      item: {
        product: "",
        price: "" 
      }

    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      product: this.props.result.product,
      price: this.props.result.price
    });
    console.log(this.state);
  }

  addToCart() {
    API.addToCart(this.state.item)
        .then(function(response){
            console.log(response);
        })
  }

  render() {
    return (
      <div key={this.props.result._id}>
        <Button color="primary" onClick={this.toggle}>Details</Button>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><p>{this.props.result.product} for <strong>{this.props.result.price}</strong></p></ModalHeader>
          <ModalBody>
            <p>Made by {this.props.result.seller}</p><br />
            <p>{this.props.result.description}</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addToCart}>Add To Cart!</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ProductModal;