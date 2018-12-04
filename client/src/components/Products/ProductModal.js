import React from 'react';
import API from "../../API/index.js";
import "./ProductModal.css";
import { Input, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ProductModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      product: "",
      price: "",
      amount: "",
      photoLink: ""
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  captureInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addToCart = () => {
    API.addToCart({
      product: this.props.result.product,
      price: this.props.result.price,
      amount: this.state.amount,
      photoLink: this.props.result.photoLink
    })
      .then(function (response) {
        console.log(response);
      });
    this.toggle();
  }

  render() {
    return (
      <div key={this.props.result._id}>
        <Button color="success" onClick={this.toggle}>More Details</Button>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><h3><u>{this.props.result.product} for <strong>{this.props.result.price}</strong></u></h3>
          <p><i>Made by {this.props.result.seller}</i></p>
          </ModalHeader>
          <ModalBody>
            <img className="modalImg" src={this.props.result.photoLink} alt={this.props.result.product} />
            <p className="modalDesc">{this.props.result.description}</p>
          </ModalBody>
          <ModalFooter>
            <div>
              <Input type="select" name="amount" id="amountSelect" onChange={this.captureInput}>
                <option>0</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </Input>
            </div>
            <Button color="primary" onClick={this.addToCart}>Add To Cart!</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ProductModal;