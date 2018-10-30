import React, {Component} from "react";
import API from "../../API/users.js";

export default class Login extends Component {
    state = {
        product: "",
        seller: "",
        price: "",
        description: "",
        categories: [],
        isInCart: false,
        date: new Date(Date.now())
    }

    

    render(){
        return(
            <div>
                
            </div>
        )
    }
}