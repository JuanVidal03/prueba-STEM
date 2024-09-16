import axios from "./axios.js";

export const login = async(credentials) => {
    try {
        
        const response = await axios.post("/login", credentials);
        return response;

    } catch (error) {
        console.log(error);
        return error.message;
    }
}

export const verifyToken = async() => {
    try {
        
        const response = await axios.get("/verify-token");
        return response;

    } catch (error) {
        console.log(error);
        return error.message;
    }
}

export const logout = async() => {
    try {
        
        const logout = await axios.post("/logout");
        console.log(logout);
        return logout;

    } catch (error) {
        console.log(error);
        return error.message;
    }
}
