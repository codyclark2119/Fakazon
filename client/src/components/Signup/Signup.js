import React, {Component} from "react";
import API from "../../API/index.js";
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import "./Signup.css";

export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            username: "",
            password: ""
        }

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal,
        });
    }

    
    handleSignUp = (event) => {
        event.preventDefault();
        let username = this.state.username;
        let password = this.state.password;
        let user = {username, password}
        API.signup(user).then(function(response){
            console.log(response);
            if (!response.data.errmsg) {
                // console.log('successful signup')
                window.location.replace("/login")
            }
        }).catch(error => {
            // console.log("Sign in error")
            console.log(error)

        })
    }

    captureInput = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
      
    render(){
        return(
            <div>
                <Button onClick={this.toggle}>Sign-Up</Button>
                <Modal isOpen={this.state.modal} fade={false} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader>Sign-Up</ModalHeader>
                    <ModalBody>
                        <form>
                            <div className="form-group">
                                <label>Username</label>
                                <input
                                    name="username"
                                    type="name"
                                    className="form-control"
                                    placeholder="Enter username"
                                    onChange={this.captureInput}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    placeholder="Password"
                                    onChange={this.captureInput}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-success"
                                href="/"
                                onClick={this.handleLogin}>Submit
                    </button>
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                        </form>
                    </ModalBody>
                </Modal>
            </div> 
        )
    }
}
