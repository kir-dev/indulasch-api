import { Express } from "express";
import apiMW from "./mw/apiMW";
import getDataMW from "./mw/getDataMW";
import parseResponseMW from "./mw/parseResponseMW";
import parseAlertsMW from "./mw/parseAlertsMW";
import getMessagesMW from "./mw/getMessagesMW";
import addMessageMW from "./mw/addMessageMW";
import removeMessageMW from "./mw/removeMessageMW";

export function Router(app: Express) {
  app.post("/api", getDataMW(), parseResponseMW(), apiMW());
  app.post("/api/alerts", getDataMW(), parseAlertsMW(), apiMW());
  app.get("/api/messages", getMessagesMW(), apiMW());
  app.put("/api/messages", addMessageMW(), apiMW(true));
  app.delete("/api/messages/:id", removeMessageMW(), apiMW(true));
  app.delete("/api/messages/", removeMessageMW(true), apiMW(true));
}
