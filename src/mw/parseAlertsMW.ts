import express from "express";
import { AlertApiEntity, AlertApiResponse, FutarAPI } from "../types/types";
import { Alert } from "../types/alert";
import { decode } from "html-entities";

/**
 * Parses consumable alerts data from Futár data on res.locals.payload. Client applications use this format.
 */
export default function parseAlertsMW() {
  return async function (
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const futarApiResponse: FutarAPI = res.locals.payload;

    if (!futarApiResponse)
      return next("Nem megfelelő bemeneti formátum a válaszformázónál!");

    const data = futarApiResponse.data;

    let apiResponse: AlertApiResponse = { alerts: [] };

    for (let key of Object.keys(data.references.alerts)) {
      let alert: Alert = data.references.alerts[key];
      let alertApiEntity: AlertApiEntity = {
        routes:
          alert.routeIds?.map((id) => {
            return data.references.routes[id].style;
          }) || [],
        header: alert.header.translations.hu,
        description: decode(
          alert.description.translations.hu
            .replace(/(\n)+/g, " ")
            .replace(/<\/?[^>]+(>|$)/g, "")
        ),
        start: alert.start,
        end: alert.end,
      };
      apiResponse.alerts.push(alertApiEntity);
    }

    res.locals.payload = apiResponse;
    return next();
  };
}
