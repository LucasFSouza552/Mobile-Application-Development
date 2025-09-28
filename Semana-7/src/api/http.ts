import axios from "axios";

const api = axios.create({
    baseURL: "https://random.dog/woof.json",
});


export default api;