import axios from "axios";

const API = {
    getItems:function(){
        return axios.get("/api/products")
    },
    login:function(newUser){
        return axios.post("/login", newUser)
    }
}

export default API