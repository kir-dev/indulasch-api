import express from "express";
import { Messenger } from "../types/messenger";

export default function removeMessageMW(all?: boolean) {
  return async function (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const messenger: Messenger = req.app.get("messenger");
    try {
      if (all) {
        messenger.clearMessages();
      } else {
        messenger.removeMessage(parseInt(req.params.id));
      }
      return next();
    } catch (err) {
      return next("ID formátum nem megfelelő.");
    }
  };
}
