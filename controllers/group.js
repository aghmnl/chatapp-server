import { Group } from "../models/index.js";

function create(req, res) {
  res.status(200).send("OK");
}

export const GroupController = { create };
