import { ChatMessage } from "../models/index.js";

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
      res.status(201).send({});
    }
  });
}

export const ChatMessageController = { sendText };
