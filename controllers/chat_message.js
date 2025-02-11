import { ChatMessage } from "../models/index.js";
import { io, getFilePath } from "../utils/index.js";

function sendText(req, res) {
  const { chat_id, message } = req.body;
  const { user_id } = req.user;

  const chat_message = new ChatMessage({
    chat: chat_id,
    user: user_id,
    message,
    type: "TEXT",
  });

  chat_message.save(async (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al enviar el mensaje" });
    } else {
      const data = await chat_message.populate("user");
      io.sockets.in(chat_id).emit("message", data);
      io.sockets.in(`${chat_id}_notify`).emit("message_notify", data);
      res.status(201).send({});
    }
  });
}

function sendImage(req, res) {
  const { chat_id } = req.body;
  const { user_id } = req.user;

  const chat_message = new ChatMessage({
    chat: chat_id,
    user: user_id,
    message: getFilePath(req.files.image),
    type: "IMAGE",
  });

  chat_message.save(async (error) => {
    if (error) {
      res.status(400).send({ msg: "Error al enviar el mensaje" });
    } else {
      const data = await chat_message.populate("user");
      io.sockets.in(chat_id).emit("message", data);
      io.sockets.in(`${chat_id}_notify`).emit("message_notify", data);
      res.status(201).send({});
    }
  });
}

export const ChatMessageController = { sendText, sendImage };
