import https from "https";
import { getUrl } from "./futarApiUrlBuilder";
import { FutarAPI } from "./types/types";

/**
 *
 * @param {string} lat Latitude of location.
 * @param {string} lon Longitude of location.
 * @param {string} radius Radius for departures.
 * @returns Promise with the https request. Resolves if data is received and is in the correct format, rejects if any error happened.
 */
export function getData(lat: string, lon: string, radius: string) {
  return new Promise<FutarAPI>((resolve, reject) => {
    https.get(
      getUrl(lat, lon, radius),
      { headers: { "Content-Type": "application/json" } },
      (res) => {
        let str = "";
        res.on("data", (chunk) => {
          str += chunk;
        });
        res.on("end", () => {
          try {
            let result: FutarAPI = JSON.parse(str);
            resolve(result);
          } catch (error) {
            reject("A formázás sikertelen.");
          }
        });
        res.on("error", (err) => {
          reject(err);
        });
      }
    );
  });
}
