import { Router } from "express";
import { getAllRecursos, createRecurso, deleteRecurso } from "../controllers/recursos.controller.js"

const recursoRouter = Router();

recursoRouter.get("/recursos", getAllRecursos);
recursoRouter.post("/recurso", createRecurso);
recursoRouter.delete("/recurso/:id", deleteRecurso);

export default recursoRouter;
