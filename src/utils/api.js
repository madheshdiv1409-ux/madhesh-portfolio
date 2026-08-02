import axios from "axios";

const API = axios.create({
    baseURL: "https://madhesh-portfolio-backend.onrender.com/api"
});

export default API;