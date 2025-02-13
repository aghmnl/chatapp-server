import { User } from "../models/index.js";
import { getFilePath } from "../utils/index.js";

async function getMe(req, res) {
  const { user_id } = req.user;

  try {
    const response = await User.findById(user_id).select(["-password", "-__v"]);

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
    const users = await User.find({ _id: { $ne: user_id } }).select(["-password", "-__v"]);

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
    const user = await User.findById(id).select(["-password", "-__v"]);

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
  const { user_id } = req.user;
  const userData = req.body;

  if (req.files.avatar) {
    const imagePath = getFilePath(req.files.avatar);
    userData.avatar = imagePath;
  }

  User.findByIdAndUpdate({ _id: user_id }, userData, (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al actualizar el usuario" });
    } else {
      res.status(200).send(userData);
    }
  });
}

export const UserController = { getMe, getUsers, getUser, updateUser };
