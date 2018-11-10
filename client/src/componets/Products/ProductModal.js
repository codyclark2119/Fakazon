import React from 'react';
import API from "../../API/index.js";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ProductModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      itemId: "",
      price: "",
      name: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
      itemId: !this.props.result._id,
      price: !this.props.result.price,
      name: !this.props.result.product
    });
  }

  addToCart = event => {
    event.preventDefault();
    API.addToCart({ id: this.state.itemId, price: this.state.price, name: this.state.name}).then(function (response) {
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