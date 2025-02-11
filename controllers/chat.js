import {} from "../models/index.js";

async function create(req, res) {
  res.status(200).send("Creación OK");
}

export const ChatController = { create };
