import axios from "./axios.js";

export const getAllMateriasService = async() => {
    try {
        
        const materias = await axios.get("/materias");
        return materias;

    } catch (error) {
        console.log(error);
        return error.message;
    }
}

export const  createMateriaService = async(materia) => {
    try {
        
        const materiaCreated = await axios.post("/materia", materia);
        return materiaCreated;

    } catch (error) {
        console.log(error);
        return error.message;
    }
}

export const  deleteMateriaService = async(idMateria) => {
    try {
        
        const materiaDeleted = await axios.delete(`/materia/${idMateria}`);
        return materiaDeleted;

    } catch (error) {
        console.log(error);
        return error.message;
    }
}
