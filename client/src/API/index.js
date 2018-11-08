import axios from "axios";

const API = {
    isLoggedIn:function(){
        return axios.get("/api/isAuth")
    },
    signup:function(newUser){
        return axios.post("/api/signup", newUser) 
    },
    login:function(login){
        return axios.post("/api/login", {username:login.username, password:login.password})
    },
    logOut:function(){
        return axios.post("/");
    },
    getUser:function(id){
        console.log("Getting user");
        return axios.get("/api/profile/" + id);
    },
    updateUser:function(data){
        console.log("Updating User");
        return axios.put("/api/users/update", data);
    },
    getItems:function(){
        console.log("Getting product List");
        return axios.get("/api/products");
    }

}

export default API

