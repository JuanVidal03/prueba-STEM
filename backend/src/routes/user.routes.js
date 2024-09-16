import { Router } from "express";
import { getAllUsers, createUser, deleteUser } from "../controllers/user.controller.js";

const userRouter = Router();

userRouter.get("/users", getAllUsers);
userRouter.post("/user", createUser);
userRouter.delete("/user/:id", deleteUser);

export default userRouter;
