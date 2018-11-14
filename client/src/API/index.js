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
<<<<<<< HEAD
    getUser:function(id){
        console.log("Getting user");
        return axios.get("/api/user/" + id);
    },
    getUserSession:function(id){
        console.log("Getting user session");
        return axios.get("/api/user/");
    },
    createUsers:function(data){
        console.log("Creating User");
        return axios.get("/api/user", data);
    },
    updateUser:function(data){
        console.log("Updating User");
        return axios.put("/api/user/update", data);
=======
    getUser:function(){
        return axios.get("/api/user");
>>>>>>> 4c8be427a0b4f92e23b41b42e297007485c30c48
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
    clearCart:function(id){
        console.log("Clearing Cart");
        return axios.delete("/api/cart/")
    },
    userSearch:function(query){
        console.log("Searching for " + query);
        return axios.get("/api/products/" + query)
    }
}

export default API

