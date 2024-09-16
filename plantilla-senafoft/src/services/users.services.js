import axios from "./axios.js";

export const getAllUsersService = async() => {
    try {
        
        const users = await axios.get("/users");
        return users;

    } catch (error) {
        console.log(error);
        return error.message;
    }
}

export const  createUserService = async(user) => {
    try {
        
        const userCreated = await axios.post("/user", user);
        return userCreated;

    } catch (error) {
        console.log(error);
        return error.message;
    }
}

export const  deleteUserService = async(idUser) => {
    try {
        
        const userDeleted = await axios.delete(`/user/${idUser}`);
        return userDeleted;

    } catch (error) {
        console.log(error);
        return error.message;
    }
}
