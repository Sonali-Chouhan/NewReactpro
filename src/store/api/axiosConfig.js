import axios from "axios";


const instance = axios.create({
   
    baseURL: "https://62458ed12cfed1881722c047.mockapi.io"
});


export default instance;