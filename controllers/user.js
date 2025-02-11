import { User } from "../models/index.js";

async function getMe(req, res) {
  const { user_id } = req.user;

  try {
    const response = await User.findById(user_id).select(["-password"]);

    if (!response) {
      res.status(400).send({ msg: "No se ha encontrado el usuario" });
    } else {
      res.status(200).send(response);
    }
  } catch (error) {
    res.status(500).send({ msg: "Error del servidor" });
  }
}

async function getUsers(req, res) {
  try {
    const { user_id } = req.user;
    const users = await User.find({ _id: { $ne: user_id } }).select(["-password"]);

    if (!users) {
      res.status(400).send({ msg: "No se han encontardo usuarios" });
    } else {
      res.status(200).send(users);
    }
  } catch (error) {
    res.status(500).send({ msg: "Error del servidor" });
  }
}

async function getUser(req, res) {
  const { id } = req.params;

  try {
    const user = await User.findById(id).select(["-password"]);

    if (!user) {
      res.status(400).send({ msg: "No se ha encontrado el usuario" });
    } else {
      res.status(200).send(user);
    }
  } catch (error) {
    res.status(500).send({ msg: "Error del servidor" });
  }
}

async function updateUser(req, res) {
  res.status(200).send("OK");

  const userData = req.body;

  console.log(userData);
  console.log(req.files);
}

export const UserController = { getMe, getUsers, getUser, updateUser };
