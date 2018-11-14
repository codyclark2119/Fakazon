import axios from "axios";

const API = {
    isLoggedIn:function(){
        return axios.get("/api/auth")
    },
    signup:function(newUser){
        return axios.post("/api/signup", newUser) 
    },
    login:function(login){
        return axios.post("/api/login", {username:login.username, password:login.password})
    },
    logout:function(){
        return axios.post("/api/logout");
    },
    getUser:function(){
        return axios.get("/api/user");
    },
    getItems:function(){
        return axios.get("/api/products");
    }
}

export default API

