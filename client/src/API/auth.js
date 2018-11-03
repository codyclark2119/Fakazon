import axios from "axios";

const API = {
    signup:function(newUser){
        return axios.post("/api/signup", newUser)
    
    },
    login:function(login){
        return axios.post("/api/login", {email:login.email, password:login.password})
    },
    logOut:function(){
        return axios.post("/");
    }
}

export default API

