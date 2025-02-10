import { User } from "../models/index.js";

function register(req, res) {
  const { email, password } = req.body;

  const user = new User({
    email: email.toLowerCase(),
    password: password,
  });

  user.save((error, userStorage) => {
    if (error) {
      console.log(error);
      res.status(400).send({ msg: "Error al registrar el usuario" });
    } else {
      res.status(201).send(userStorage);
    }
  });
}

export const AuthController = { register };
