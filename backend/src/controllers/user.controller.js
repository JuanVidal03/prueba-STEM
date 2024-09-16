import { UserModel } from "../models/users.model.js";

export const getAllUsers = async(req, res) => {
    try {
        
        const users = await UserModel.find({});

        res.status(200).json({
            message: "users OK",
            data: users,
        });

    } catch (error) {
        res.status(500).json({
            message: "Error al obtener los users",
            error: error
        });
    }
}

export const createUser = async(req, res) => {
    
    const user = req.body;

    try {

        const userCreated = await UserModel.create(user);

        res.status(201).json({
            message: "recursos OK",
            data: userCreated,
        });


    } catch (error) {
        res.status(500).json({
            message: "Error al crear user",
            error: error
        });
    }
}

export const deleteUser = async(req, res) => {

    const { id } = req.params;

    try {

        const foundUser = await UserModel.findById(id);
        if(!foundUser) return res.status(404).json({
            message: "El user no existe."
        });

        const userDeleted = await UserModel.findByIdAndDelete(id);

        res.status(200).json({
            message: "user OK",
            data: userDeleted,
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Error al elimimnar user",
            error: error
        });
    }
}
