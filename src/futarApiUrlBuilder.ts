import { URL } from "url";

/**
 *
 * @param {string} lat Latitude of location.
 * @param {string} lon Longitude of location.
 * @param {string} radius Radius for departures.
 * @returns URL The generated URL with query params.
 */
export function getUrl(lat: string, lon: string, radius: string) {
  let api_url = new URL(
    "https://futar.bkk.hu/api/query/v1/ws/otp/api/where/arrivals-and-departures-for-location.json"
  );
  api_url.searchParams.append("lon", lon);
  api_url.searchParams.append("lat", lat);
  api_url.searchParams.append("clientLon", lon);
  api_url.searchParams.append("clientLat", lat);
  api_url.searchParams.append("minutesBefore", "0");
  api_url.searchParams.append("limit", "30");
  api_url.searchParams.append("groupLimit", "1");
  api_url.searchParams.append("onlyDepartures", "true");
  api_url.searchParams.append("radius", radius);
  return api_url;
}
