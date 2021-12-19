import express from "express";
import { FutarAPI } from "../types/types";
import { ApiResponse, Departure } from "../types/departure";
import { decode } from "html-entities";

/**
 * Parses consumable departures data from Futár data on res.locals.payload. Client applications use this format.
 */
export default function parseResponseMW() {
  return async function (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const futarApiResponse: FutarAPI = res.locals.payload;

    if (!futarApiResponse)
      return next("Nem megfelelő bemeneti formátum a válaszformázónál!");

    const data = futarApiResponse.data;

    let apiResponse: ApiResponse = { departures: [] };

    data?.list?.forEach((entity) => {
      entity.stopTimes?.forEach((stopTime) => {
        let departure: Departure = {
          type: data.references.routes[entity.routeId].type,
          style: data.references.routes[entity.routeId].style,
          headsign: entity.headsign,
          scheduled: stopTime.departureTime,
          predicted: stopTime.predictedDepartureTime || stopTime.departureTime,
          alert: stopTime.alertIds?.map((id) =>
            decode(
              data.references.alerts[id].description.translations.hu
                .replace(/(\n)+/g, " ")
                .replace(/<\/?[^>]+(>|$)/g, "")
            )
          ),
          isDelayed:
            (stopTime.predictedDepartureTime || stopTime.departureTime) -
              stopTime.departureTime >
            180,
          departureText: "",
        };
        let departureTime = Math.floor(
          (departure.predicted * 1000 - Date.now()) / 60000
        );

        departure.departureText =
          departureTime < 1 ? "azonnal indul" : departureTime + " perc";
        apiResponse.departures.push(departure);
      });
    });

    res.locals.payload = apiResponse;
    return next();
  };
}
