import { MateriaModel } from "../models/materia.model.js";

export const getAllMaterias = async(req, res) => {
    try {
        
        const materias = await MateriaModel.find({});

        res.status(200).json({
            message: "materias OK",
            data: materias,
        });

    } catch (error) {
        res.status(500).json({
            message: "Error al obtener todos los materiales",
            error: error
        });
    }
}

export const createMaterias = async(req, res) => {
    
    const materia = req.body;

    try {

        const materiaCreated = await MateriaModel.create(materia);

        res.status(201).json({
            message: "materias OK",
            data: materiaCreated,
        });


    } catch (error) {
        res.status(500).json({
            message: "Error al crear materias",
            error: error
        });
    }
}

export const deleteMateria = async(req, res) => {

    const { id } = req.params;

    try {

        const foundMateria = await MateriaModel.findById(id);
        if(!foundMateria) return res.status(404).json({
            message: "La materia no existe."
        });

        const materiaDeleted = await MateriaModel.findByIdAndDelete(id);

        res.status(200).json({
            message: "Materia OK",
            data: materiaDeleted,
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Error al elimimnar materia",
            error: error
        });
    }
}
