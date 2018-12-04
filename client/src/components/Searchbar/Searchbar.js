import React from "react";
import "./Searchbar.css";
import {
    Col, Input, Button
} from 'reactstrap';

const Searchbar = (props) => {
    return (
        <div className="container-fluid searchbar">

                <Col xs="6">
                    <Input
                        name="userQuery"
                        value={props.userQuery}
                        type="name"
                        className="form-control"
                        placeholder="What are you looking for?"
                        onChange={props.captureInput} />
                </Col>
                <Col xs="1">
                    <Button onClick={props.userSearch}>Search!</Button>
                </Col>
                <Col xs="5">{" "}</Col>

        </div>
    )
}

export default Searchbar;