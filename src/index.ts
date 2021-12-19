import express, { NextFunction } from "express";
import cors from "cors";
import { Router } from "./router";

require("dotenv").config();
const port = process.env.PORT || 3001;

const app = express();
app.use(cors());
app.use(express.json());
Router(app);

app.use(
  (
    err: string | Error,
    req: express.Request,
    res: express.Response,
    next: NextFunction
  ) => {
    console.error(err);
    res.statusCode = 400;
    res.send(err.toString());
  }
);

app.listen(port, () => {
  console.log("Server listening on " + port);
});
