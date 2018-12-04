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
    },
    addToCart:function(data){
        console.log("Adding Item to cart");
        return axios.post("/api/cart", {product:data.product, price:data.price, amount:data.amount});
    },
    getCart:function(){
        console.log("Getting Cart");
        return axios.get("/api/cart");
    },
    deleteItem:function(id){
        console.log("Deleting Item from cart");
        return axios.delete("/api/cart/" + id)
    }, 
    clearCart:function(){
        console.log("Clearing Cart");
        return axios.delete("/api/cart/")
    },
    userSearch:function(query){
        console.log("Searching for " + query);
        return axios.get(`/api/products/search/${query}`)
    }
}

export default API

