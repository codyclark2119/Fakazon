import React, {Component} from "react";
export default class Login extends Component {
    state = {
        username:"",
        password:""
    }

    handleLogin = (event) => {
        event.preventDefault();
        console.log("I'm logging in baby", this.state);
        this.props.handleLogin(this.state)
    }

    captureInput = (event) => {
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    render(){
        return(
            <div className="container-fluid">
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
                        className="btn btn-primary" 
                        onClick={this.handleLogin}>Submit
                    </button>
            </form>
        </div>
        )
    }
}