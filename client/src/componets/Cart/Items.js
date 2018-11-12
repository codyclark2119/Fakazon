import React from "react";
import API from "../../API/index.js"
import {
    Card, CardText, CardBody,
    CardTitle, Button
} from 'reactstrap';

class Items extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            itemId: ""
        };
      }

    componentDidMount() {
        this.setState({
            itemId: !this.props.result._id
        });
    }
    
    deleteItem = () => {
        API.deleteItem(this.state.itemId)
            .then(
                console.log("Deleted")
            )
            .catch(err => console.log(err));
    }

    render() {
        return (
            <div key={this.props.result.product}>
                <Card>
                    <CardBody className="card-body">
                        <Button value={this.props.result._id} onClick={this.deleteItem}>X</Button>
                        <CardTitle>{this.props.result.product}</CardTitle>
                        <CardText><strong>{this.props.result.price}</strong></CardText>
                        <CardText>Quantity {this.props.result.amount}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
export default Items;