import React, { Component } from "react";
import Products from "../Products/Products.js";
import "./Home.css";

class Home extends Component {
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
    }
}

export default Home;
