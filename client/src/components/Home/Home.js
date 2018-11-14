import React, { Component } from "react";

import "./Home.css";


class Home extends Component {

 render() {
      return (
          
       <div>
            <div className="view overlay rounded-top">
                <img src={require("../../images/shopping.jpg")} className="img-fluid" alt="Shoppers"/>
            </div>
       </div>
      );
    }
 }
 
export default Home;
