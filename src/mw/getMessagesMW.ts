import express from "express";
import { Messenger } from "../types/messenger";

export default function getMessagesMW() {
  return async function (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const messenger: Messenger = req.app.get("messenger");
    res.locals.payload = messenger.getMessages();
    return next();
  };
}
