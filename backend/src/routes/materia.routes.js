import { Router } from "express";
import { getAllMaterias, createMaterias, deleteMateria } from "../controllers/materia.controller.js";

const materiaRouter = Router();

materiaRouter.get("/materias", getAllMaterias);
materiaRouter.post("/materia", createMaterias);
materiaRouter.delete("/materia/:id", deleteMateria);

export default materiaRouter;
