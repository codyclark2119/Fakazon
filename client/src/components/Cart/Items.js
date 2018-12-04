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
        console.log(this.state.itemId);
        this.setState({
            itemId: this.props.result._id
        });  
    }   
    
    deleteItem = () => {
        API.deleteItem(this.state.itemId)
            .then(
                window.location.reload()
            )
            .catch(err => console.log(err));       
    }

    render() {
        return (
            <div key={this.props.result.product}>
                <Card>
                    <CardBody className="card-body clearfix">
                        <CardTitle>{this.props.result.product}</CardTitle>
                        <CardText><strong>{this.props.result.price}</strong></CardText>
                        <CardText>Quantity <strong>{this.props.result.amount}</strong> <Button value={this.props.result._id} color="danger" className="float-right" onClick={this.deleteItem}>Remove From Cart</Button> </CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }
}
export default Items;