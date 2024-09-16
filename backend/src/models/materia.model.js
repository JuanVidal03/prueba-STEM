import mongoose from "mongoose";

const materiaSchema = await mongoose.Schema({
    nombre: {
        type:String,
        trim: true,
        required: true
    },
    descripcion: {
        type:String,
        trim: true,
        required: true
    }
});

export const MateriaModel = await mongoose.model("materia", materiaSchema);
