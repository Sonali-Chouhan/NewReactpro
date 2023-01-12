import instance from './axiosConfig';

const apiClient = ({ method, endPoint, header, body, baseUrl }) => {
    let res;
    switch (method) {
        case "GET":
            if(baseUrl){
                debugger
                res = instance({ baseURL: baseUrl, method: "GET", url: endPoint})
            }
            else{
                res = instance.get(endPoint, { headers: header });
            }
            break;
        case "POST":
            if (baseUrl) {
                res = instance({ baseURL: baseUrl, method: "POST", url: endPoint, data: body })
                // res = instance.post(endPoint,body,{headers:header})
            }
            else {
                res = instance.post(endPoint, body, { headers: header })
            }

            break;
        case "PUT":
            res = instance.put(endPoint, body, { headers: header });
            break;
        default:
            throw new Error("check method")
    }

    return res
}

export default apiClient;