import mongoose from "mongoose";

const userSchema = await mongoose.Schema({
    nombreCompleto: {
        type:String,
        trim: true,
        required: true
    },
    email: {
        type:String,
        trim: true,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true
    },
    tipoUsuario: {
        type: String,
        enum: ['estudiante', 'admin', 'profesor'],
        required: true
    }
});

export const UserModel = await mongoose.model("user", userSchema);
