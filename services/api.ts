import axios from "axios";

const api = axios.create({
  baseURL: "https://qa.corider.in/assignment",
});

export default api;
