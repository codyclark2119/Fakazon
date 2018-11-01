import React, {Component} from "react";

export default class Login extends Component {
    state = {
        productList: [],
        product: "",
        seller: "",
        price: "",
        description: "",
        categories: [],
        isInCart: false,
        date: new Date(Date.now())
    }

    productSelect = (event) => {
        event.preventDefault();
      
    }

    render(){
        return(
            <div className="container">
                <jumbotron>
                    
                </jumbotron>
            </div>
        )
    }
}