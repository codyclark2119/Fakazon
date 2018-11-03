import React, {Component} from "react";
import API from "../API/users.js";
import '../index.css';
import { Grid, Row, Col, Image, PageHeader} from "react-bootstrap";
export default class pageHeader extends Component {
    
    }

    render(){
        return(
<PageHeader id="mainHeader">
<img id="headerImage"></img>
  Fakeazon Web Store: The Future of Online Ecommerce
</PageHeader>;
        )
    }
    
export default pageHeader;