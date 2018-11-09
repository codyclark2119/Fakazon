import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ProductModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <Button color="primary" onClick={this.toggle}>Details</Button>
        <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}><h1>{this.props.result.product} for <strong>{this.props.result.price}</strong></h1></ModalHeader>
          <ModalBody>
            <h5>Made by {this.props.result.seller}</h5><br />
            <p>{this.props.result.description}</p>
            <p>Categories:{this.props.result.categories.map(result =>(
              <p><strong>{result}</strong></p>
            ))} </p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.props.captureInput}>Add To Cart!</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ProductModal;