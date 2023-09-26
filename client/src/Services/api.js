import { commonrequest } from "./apiCall";
import { backend_url } from "./helper";

export const registerfunction = async(name, phone, email,   gender) => {
    try {
        const response = await commonrequest("POST", `${backend_url}/user/register`, {name: name, phone:phone, email: email,  gender:gender});
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

export const adminfetch = async() => {
    try {
        const response = await commonrequest("GET", `${backend_url}/admin/getinfo`);
        return response.data;
    }
    catch(error) {
        throw error;
    }
}

export const userfetch = async() => {
    try {
        const response = await commonrequest("GET", `${backend_url}/user/getinfo`);
        return response.data;
    }
    catch(error) {
        throw error;
    }
}

export const adminDelete = async(id) => {
    try {
        const response = await commonrequest("Delete", `${backend_url}/admin/delete/${id}`);
        return response.data;
    }
    catch(error) {
        throw error;
    }
}

export const taskDelete = async(id) => {
    try {
        const response = await commonrequest("Delete", `${backend_url}/task/delete/${id}`);
        return response.data;
    }
    catch(error) {
        throw error;
    }
}
export const taskcomplete = async(id) => {
    try {
        const response = await commonrequest("PUT", `${backend_url}/task/update/${id}`, { status: 'Complete' });
        return response.data;
    }
    catch(error) {
        throw error;
    }
}


export const newtask = async(title, description,id) => {
    try {
        const response = await commonrequest("POST", `${backend_url}/task/new`, {title: title, description: description, id:id});
        return response.data;
    }
    catch(error) {
        throw error;
    }
}

export const getTask = async() => {
    try {
        const response = await commonrequest("GET", `${backend_url}/task/all`);
        return response.data;
    }
    catch(error) {
        throw error;
    }
}
export const getcompletedTask = async() => {
    try {
        const response = await commonrequest("GET", `${backend_url}/task/completed`);
        return response.data;
    }
    catch(error) {
        throw error;
    }
}