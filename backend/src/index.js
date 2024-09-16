import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import { dbConnection } from "./DB/dbConfig.js";


dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

app.use(cors({
    origin: "http://localhost:5173",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
    credentials: true,
}));


import materiaRoutes from "./routes/materia.routes.js";
import recursoRouter from "./routes/recurso.routes.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";

app.use("/api", materiaRoutes);
app.use("/api", recursoRouter);
app.use("/api", userRouter);
app.use("/api", authRouter);


app.listen(PORT, console.log(`server running on port http://localhost:${PORT}`));
dbConnection();
