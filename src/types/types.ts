import { Route, Style } from "./route";
import { Agency } from "./agency";
import { Stop } from "./stop";
import { Trip } from "./trip";
import { Alert } from "./alert";

export interface FutarAPI {
  currentTime: number;
  version: number;
  status: string;
  code: number;
  text: string;
  data: Data;
}

export interface Data {
  list?: ListEntity[] | null;
  outOfRange: boolean;
  limitExceeded: boolean;
  references: References;
  class: string;
}

export interface ListEntity {
  routeId: string;
  headsign: string;
  stopTimes?: StopTimesEntity[] | null;
}

export interface StopTimesEntity {
  stopId: string;
  stopHeadsign: string;
  departureTime: number;
  predictedDepartureTime?: number | null;
  tripId: string;
  serviceDate: string;
  alertIds?: string[] | null;
}

export interface References {
  agencies: Record<string, Agency>;
  routes: Record<string, Route>;
  stops: Record<string, Stop>;
  trips: Record<string, Trip>;
  alerts: Record<string, Alert>;
}

export interface AlertApiResponse {
  alerts: AlertApiEntity[];
}

export interface AlertApiEntity {
  routes: Style[];
  header: string;
  description: string;
  start: number;
  end: number;
}
