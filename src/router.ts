import { Express } from "express";
import apiMW from "./mw/apiMW";
import getDataMW from "./mw/getDataMW";
import parseResponseMW from "./mw/parseResponseMW";
import parseAlertsMW from "./mw/parseAlertsMW";

export function Router(app: Express) {
  app.post("/api", getDataMW(), parseResponseMW(), apiMW());
  app.post("/api/alerts", getDataMW(), parseAlertsMW(), apiMW());
}
