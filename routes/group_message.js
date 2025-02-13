import express from "express";
import multiparty from "connect-multiparty";
import { GroupMessageController } from "../controllers/index.js";
import { mdAuth } from "../middlewares/index.js";

const mdUpload = multiparty({ uploadDir: "./uploads/images" });

const api = express.Router();

api.post("/group/message", [mdAuth.asureAuth], GroupMessageController.sendText);
api.post("/group/message/image", [mdAuth.asureAuth, mdUpload], GroupMessageController.sendImage);
api.get("/group/message/:group_id", [mdAuth.asureAuth], GroupMessageController.getAll);

export const groupMessageRoutes = api;
