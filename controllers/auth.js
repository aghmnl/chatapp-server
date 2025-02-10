import { User } from "../models/index.js";

function register(req, res) {
  res.status(201).send({ msg: "Todo OK" });
}

export const AuthController = { register };
