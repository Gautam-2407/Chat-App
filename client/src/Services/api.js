import { commonrequest } from "./apiCall";
import { backend_url } from "./helper";

export const registerfunction = async(name, phone, email, gender,role) => {
    try {
        const response = await commonrequest("POST", `${backend_url}/user/register`, {name: name, phone:phone, email: email, gender:gender, role:role});
        return response.data;
    }
    catch(error) {
        throw error;
    }
}


export const loginfunction = async(phone) => {
    try {
        const response = await commonrequest("POST", `${backend_url}/user/login`, {phone: phone});
        return response.data;
    }
    catch(error) {
        throw error;
    }
}