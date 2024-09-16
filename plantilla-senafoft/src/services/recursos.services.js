import axios from "./axios.js";

export const getAllRecursosService = async() => {
    try {
        
        const recursos = await axios.get("/recursos");
        return recursos;

    } catch (error) {
        console.log(error);
        return error.message;
    }
}

export const  createRecursosService = async(recurso) => {
    try {
        
        const recursoCreated = await axios.post("/recurso", recurso);
        console.log(recursoCreated);
        return recursoCreated;

    } catch (error) {
        console.log(error);
        return error.message;
    }
}

export const  deleteRecursosService = async(id) => {
    try {
        
        const recursoDeleted = await axios.delete(`/recurso/${id}`);
        return recursoDeleted;

    } catch (error) {
        console.log(error);
        return error.message;
    }
}
