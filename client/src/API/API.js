import axios from "axios";

const API = {
    getItems:function(){
        return axios.get("/")
    },
}

export default API