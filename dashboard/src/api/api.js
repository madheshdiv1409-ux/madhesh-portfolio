import axios from "axios";

const api = axios.create({
  baseURL: "https://madhesh-portfolio-backend.onrender.com/api/",
});

export default api;