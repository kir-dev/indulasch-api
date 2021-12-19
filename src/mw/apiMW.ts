import express from "express";

/**
 * Middleware to send data back to the client. The data to be send is on res.locals.payload.
 * @param allowEmpty Set to true if empty data is allowed to be sent to the client. If false, an error will be generated.
 */
export default function apiMW(allowEmpty?: boolean) {
  return async function (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    console.log(req.originalUrl);
    if (process.env.DEBUG === "true") {
      console.log(res.locals.payload);
    }
    if (!res.locals.payload && !allowEmpty) return next("Nem található adat!");
    console.log("OK");
    res.send(res.locals.payload);
  };
}
