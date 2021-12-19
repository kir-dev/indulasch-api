export interface Trip {
  id: string;
  routeId: string;
  shapeId: string;
  blockId: string;
  tripHeadsign: string;
  serviceId: string;
  directionId: string;
  bikesAllowed: boolean;
  wheelchairAccessible: boolean;
}
