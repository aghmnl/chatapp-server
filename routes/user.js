import express from "express";
import { UserController } from "../controllers/index.js";
import { mdAuth } from "../middlewares/index.js";

const api = express.Router();

api.get("/user/me", [mdAuth.asureAuth], UserController.getMe);
api.patch("/user/me", [mdAuth.asureAuth], UserController.updateUser);
api.get("/user", [mdAuth.asureAuth], UserController.getUsers);
api.get("/user/:id", [mdAuth.asureAuth], UserController.getUser);

export const userRoutes = api;
