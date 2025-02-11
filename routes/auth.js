import express from "express";
import { AuthController } from "../controllers/index.js";

const api = express.Router();

api.post("/auth/register", AuthController.register);
api.post("/auth/login", AuthController.login);
api.post("/auth/refresh_access_token", AuthController.refreshAccessToken);

api.get("/auth/test_md", (req, res) => {
  res.status(200).send({ msg: "Todo OK" });
});

export const authRoutes = api;
