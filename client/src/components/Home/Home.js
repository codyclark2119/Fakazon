import React, { Component } from "react";
<<<<<<< HEAD
import Products from "../Products/Products.js";
=======

>>>>>>> 4c8be427a0b4f92e23b41b42e297007485c30c48
import "./Home.css";


class Home extends Component {
<<<<<<< HEAD
    render() {
        return (

            <div>

                <div className="card card-image homeimg">
                    <div className="text-white text-center py-5 px-4 my-5">
                        <div>
                            <h1 className="card-title h1-responsive pt-3 mb-5 font-bold txtshd"><strong>The future of eCommerce is here</strong></h1>
                            <h4 className="mx-5 mb-5 txtshd">Never leave your house again! Shop from the comfort of your home.
                </h4>
                        </div>
                    </div>
                </div>
                <br /><br /><br />
                <div>

                    <Products />

                </div>

            </div>

        );
=======

 render() {
      return (
          
       <div>
            <div className="view overlay rounded-top">
                <img src={require("../../images/shopping.jpg")} className="img-fluid" alt="Shoppers"/>
            </div>
       </div>
      );
>>>>>>> 4c8be427a0b4f92e23b41b42e297007485c30c48
    }
}

export default Home;
