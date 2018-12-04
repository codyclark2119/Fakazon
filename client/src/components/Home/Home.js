import React, { Component } from "react";
import Products from "../Products/Products.js";
import "./Home.css";


class Home extends Component {

 render() {
      return (
          
       <div className="container-fluid">
            <Products />
       </div>
      );
    }
}

export default Home;
