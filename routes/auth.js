import express from "express";
import { AuthController } from "../controllers/index.js";
import { mdAuth } from "../middlewares/index.js";

const api = express.Router();

api.post("/auth/register", AuthController.register);
api.post("/auth/login", AuthController.login);
api.post("/auth/refresh_access_token", AuthController.refreshAccessToken);

api.get("/auth/test_md", [mdAuth.asureAuth], (req, res) => {
  console.log("#########");
  console.log("#########");
  console.log("DATOS DEL USUARIO AUTENTICADO");
  console.log(req.user);
  console.log("#########");
  console.log("#########");

  res.status(200).send({ msg: "Todo OK" });
});

export const authRoutes = api;
