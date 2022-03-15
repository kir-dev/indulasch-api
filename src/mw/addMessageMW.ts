import express from "express";
import { Message, Messenger } from "../types/messenger";

export default function addMessageMW() {
  return async function (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const messenger: Messenger = req.app.get("messenger");
    messenger.addMessage(req.body as Message);
    return next();
  };
}
