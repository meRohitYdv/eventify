import axios from "axios";
import {BACKEND_URL} from "../../constants/apiEndPoints";

const makeRequest = async (apiEndPoint, dynamicConfig={})=>{
    const requestDetails = {
        baseURL: BACKEND_URL,
        url: apiEndPoint.url,
        method: apiEndPoint.method,
        ...dynamicConfig,
    };
    console.log(requestDetails);
    const { data } = await axios(requestDetails);
    console.log(data);
    return data; 
};

export default makeRequest;