import React from "react";

const ProductList = props => (
    <div className="container">
        {props.productList.map(result => (
            <div className="card" key={result._id}>
                <div className="card-body">
                    <h5 className="card-title">{result.product}</h5>
                    <p className="card-subtitle">Made By {result.seller}</p>
                    <h4 className="card-text">{result.price}</h4><br/>
                    <p className="card-text">{result.description}</p>
                    <button className="btn btn-primary">More Details</button>
                </div>
            </div>
        ))}
    </div>
);

export default ProductList;
