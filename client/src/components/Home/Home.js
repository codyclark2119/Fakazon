import React, { Component } from "react";
import Products from "../Products/Products.js";
import "./Home.css";


class Home extends Component {

 render() {
      return (
          
       <div>
            <div className="view overlay rounded-top">
                <img src={require("../../images/shopping.jpg")} className="img-fluid" alt="Shoppers"/>
            </div>
            <Products />
       </div>
      );
    }
}

export default Home;
