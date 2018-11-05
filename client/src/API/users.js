import axios from "axios";

const API = {
    getUser:function(id){
        console.log("Getting user");
        return axios.get("/api/user" + id);
        
    },
    createUsers:function(data){
        console.log("Creating User");
        return axios.get("/api/users", data);
    },
    updateUser:function(data){
        console.log("Updating User");
        return axios.put("/api/users/update", data);
    },
}

export default API
