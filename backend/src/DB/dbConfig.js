import mongoose from "mongoose";

export const dbConnection = async() => {
    try {
        await mongoose.connect("mongodb+srv://juanmvg2003:7qlWsP506QfQjosr@cluster0.9zu8e.mongodb.net/prueba?retryWrites=true&w=majority&appName=Cluster0");
        console.log("<< DB conectada >>");

    } catch (error) {
        console.log("<< error al conectar db >>");
    }
}
