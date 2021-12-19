export interface Route {
  id: string;
  shortName: string;
  description: string;
  type: string;
  color: string;
  textColor: string;
  agencyId: string;
  iconDisplayType: string;
  iconDisplayText: string;
  bikesAllowed: boolean;
  style: Style;
  sortOrder: number;
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
