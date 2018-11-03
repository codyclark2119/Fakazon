import axios from "axios";

const API = {
    getItems:function(){
        return axios.get("/")
    },
    login:function(newUser){
        return axios.post("/login", newUser)
    }
}

export default API