import React, {Component} from "react";
import API from "../../API/index.js";

export default class Signup extends Component {
    state = {
        username:"",
        password:""
    }
    
    handleSignUp = (event) => {
        event.preventDefault();
        API.signup(this.state).then(function(response){
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
            <div className="col-md-6 container-fluid">
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                            name="username" 
                            type="username" 
                            className="form-control" 
                            id="exampleInputusername1" 
                            aria-describedby="usernameHelp" 
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
                            onChange={this.captureInput} />
                    </div>
                        <button 
                            type="submit" 
                            className="btn btn-success" 
                            onClick={this.handleSignUp}>Submit
                        </button>
                </form>
            </div>

            
        )
    }
}
