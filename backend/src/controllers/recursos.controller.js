import { RecursosModel } from "../models/recursos.model.js";

export const getAllRecursos = async(req, res) => {
    try {
        
        const recursos = await RecursosModel.find({})
            .populate("creador")
            .populate("materia");

        res.status(200).json({
            message: "recursos OK",
            data: recursos,
        });

    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los recursos",
            error: error
        });
    }
}

export const createRecurso = async(req, res) => {
    
    const recurso = req.body;

    try {

        const recursoCreated = await RecursosModel.create(recurso);

        const foundRecurso = await RecursosModel.findById(recursoCreated._id).populate("creador").populate("materia");

        res.status(201).json({
            message: "recursos OK",
            data: foundRecurso,
        });


    } catch (error) {
        res.status(500).json({
            message: "Error al crear recurso",
            error: error
        });
    }
}

export const deleteRecurso = async(req, res) => {

    const { id } = req.params;

    try {

        const foundRecurso = await RecursosModel.findById(id);
        if(!foundRecurso) return res.status(404).json({
            message: "El recurso no existe."
        });

        const recursoDeleted = await RecursosModel.findByIdAndDelete(id);

        res.status(200).json({
            message: "Recurso OK",
            data: recursoDeleted,
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Error al elimimnar recurso",
            error: error
        });
    }
}
