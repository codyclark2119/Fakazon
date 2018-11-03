import axios from "axios";

const API = {
    getItems:function(){
        return axios.get("/api/products")
    },
}

export default API