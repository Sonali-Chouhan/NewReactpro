import axios from "axios";


const instance = axios.create({
   
    baseURL: "https://62458ed12cfed1881722c047.mockapi.io"
});
// instance.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     // let token = localStorage.getItem("auth-token");
//     // config.headers["Authorization"] = "Bearer " + token;
//     // return config;
//   });


export default instance;