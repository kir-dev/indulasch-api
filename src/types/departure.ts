export interface ApiResponse {
  departures: Departure[];
}

export interface Departure {
  type: string;
  style: Style;
  headsign: string;
  scheduled: number;
  predicted: number;
  alert: string[] | undefined;
  isDelayed: boolean;
  departureText: string;
}
export interface Style {
  color: string;
  icon: Icon;
  vehicleIcon: VehicleIcon;
}
export interface Icon {
  type: string;
  text: string;
  textColor: string;
}
export interface VehicleIcon {
  name: string;
}
