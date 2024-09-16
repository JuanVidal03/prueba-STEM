import { UserModel } from "../models/users.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async(req, res) => {

    const user = req.body;

    try {
        const foundUser = await UserModel.findOne({ email: user.email });
        if(foundUser) return res.status(400).json({
            message: `El usuario con email: ${email} ya existe!`,
        });
        
        const hashPassword = await bcrypt.hash(user.password, 10);
        
        const newUser = {
            email: user.email,
            nombreCompleto: user.nombreCompleto,
            tipoUsuario: user.tipoUsuario,
            password: hashPassword,
        };
        console.log(newUser);
        console.log("***");

        const createdUser = await UserModel.create(newUser);

        console.log(createdUser);

        res.status(201).json({
            message: "Usuario creado correctamente!",
            data: createdUser
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error al registrar usuario.",
            error: error.message
        })
    }
}

export const login = async (req, res) => {

    const { email, password } = req.body;
    
    try {
        const userFound = await UserModel.findOne({ email });
        if(!userFound) return res.status(404).json({ message: `El usuario '${email}' no existe.` });

        const comparePassword = await bcrypt.compare(password, userFound.password);
        if(comparePassword === false) return res.status(400).json({message: 'Contraseña o usuario incorrectos.'});

        const user = {
            _id: userFound._id,
            nombreCompleto: userFound.nombreCompleto,
            email: userFound.email,
            tipoUsuario: userFound.tipoUsuario,
        }

        jwt.sign(
            { id: user._id, rol: user.tipoUsuario },
            "secret hash",
            { expiresIn: "1h" },
            (error, token) => {
                if (error) {
                    console.log(error);
                    return res.status(400).json({
                        message: "Error al generar el token.",

                    });
                }

                res.cookie("token", token, {
                    secure: true,
                    sameSite: "none",
                    httpOnly: false,
                });
                return res.status(200).json({user, token});
            }
        )

    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error.message,
            message: "Error al ingresar a la aplicacion."
        });

    }
}

export const verifyToken = async (req, res) => {

    const { token } = req.cookies;

    try {

        if(!token) return res.status(400).json({message: "Sin autorizacion"});

        jwt.verify(token, "secret hash", async (err, user) => {
            if(err) return res.status(400).json({message:err});

            const foundUser = await UserModel.findOne({_id: user.id});
            if (!foundUser) return res.status(400).json({message: "Usuario no encontrado."});
            
            return res.status(200).json(foundUser);
            
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Error al verificar el token",
            error: error.message
        });
    }

}

export const logout =  (req, res) => {

    try {
        
        res.cookie("token", "", {
            expires: new Date(0)
        });
        return res.status(200).json({message: "Sesion cerrada exitosamente!"});

    } catch (error) {
        res.status(500).json({
            message: 'Error al cerrar la sesion',
            error: error.message
        });
    }

}
