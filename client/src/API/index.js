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
    },
    getUser:function(id){
        console.log("Getting user");
        return axios.get("/api/user" + id);
    },
    createUsers:function(data){
        console.log("Creating User");
        return axios.get("/api/user", data);
    },
    updateUser:function(data){
        console.log("Updating User");
        return axios.put("/api/user/update", data);
    },
    getItems:function(){
        console.log("Getting product List");
        return axios.get("/api/products");
    },
    addToCart:function(data){
        console.log("Adding Item to cart");
        return axios.post("/api/cart", data);
    },
    getCart:function(id){
        console.log("Getting Cart");
        return axios.get("/api/cart" + id );
    }
}

export default API

