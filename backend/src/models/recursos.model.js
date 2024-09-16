import mongoose from "mongoose";

const recursosSchema = await mongoose.Schema({
    nombre: {
        type:String,
        trim: true,
        required: true
    },
    descripcion: {
        type:String,
        trim: true,
        required: true
    },
    creador: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    materia: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "materia"
    }
});

export const RecursosModel = await mongoose.model("recurso", recursosSchema);
