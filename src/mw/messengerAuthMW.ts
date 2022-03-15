import express from "express";

export default function messengerAuthMW() {
  return async function (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (!req.headers.authorization) {
      return res.status(403).json({ error: "Token szükséges!" });
    }
    if (req.headers.authorization !== "Bearer " + process.env.MESSENGER_PASS) {
      return res.status(403).json({ error: "Rossz token!" });
    }
    return next();
  };
}
