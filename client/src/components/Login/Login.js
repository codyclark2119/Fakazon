import React, {Component} from "react";

export default class Login extends Component {
    state = {
        username:"",
        password:""
    }

    handleLogin = (event) => {
        event.preventDefault();
        this.props.handleLogin(this.state)
         window.location.replace("/")
    }

    captureInput = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render(){
        return(
            <div className="col-md-6 container-fluid fmargin">
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
                        onClick={this.handleLogin}>Submit
                    </button>
            </form>
        </div>
        )
    }
}