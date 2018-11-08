import React, {Component} from "react";

export default class Login extends Component {
    state = {
        username:"",
        password:""
    }
    captureInput = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }
    passToAppLogin = (event) => {
        event.preventDefault();
        this.props.handleLogin(this.state)
    }
    render(){
        return(
            <div className="container-fluid">
            <form>
                <div className="form-group">
                    <label>Username</label>
                    <input 
                        name="username" 
                        type="username" 
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
                        className="btn btn-primary" 
                        onClick={this.passToAppLogin}>Submit
                    </button>
            </form>
        </div>
        )
    }
}