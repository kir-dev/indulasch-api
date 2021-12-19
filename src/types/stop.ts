export interface Stop {
  id: string;
  lat: number;
  lon: number;
  name: string;
  code: string;
  direction: string;
  description: string;
  locationType: number;
  parentStationId: string;
  type: string;
  wheelchairBoarding: boolean;
  routeIds?: string[] | null;
  stopColorType: string;
  style: Style;
}

export interface Style {
  colors?: string[] | null;
}
