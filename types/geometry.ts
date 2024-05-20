export type GeometryType = "point" | "line" | "multipoint";

export type Geometry<T extends GeometryType> = T extends "point"
  ? PointGeometry
  : T extends "line"
  ? LineStringGeometry
  : MultiPointGeometry;

export interface PointGeometry {
  type: "Point";
  coordinates: [number, number];
}

export interface LineStringGeometry {
  type: "LineString";
  coordinates: [number, number][];
}

export interface MultiPointGeometry {
  type: "MultiPoint";
  coordinates: [number, number][];
}
