import express from "express";
import { getData } from "../getData";

/**
 * Uses the BKK Futár API Arrivals and Departures for Location endpoint. Gets raw data for location and radius.
 */
export default function getDataMW() {
  return async function (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const lat: number | string = req.body.lat;
    const lon: number | string = req.body.lon;
    const radius: number | string = req.body.radius;
    if (!lat || !lon || !radius)
      return next("Érvénytelen lekérdezési paraméterek!");
    getData(String(lat), String(lon), String(radius))
      .then((data) => {
        res.locals.payload = data;
        return next();
      })
      .catch((err) => {
        return next(err);
      });
  };
}
