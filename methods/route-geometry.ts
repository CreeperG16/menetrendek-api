import { postRoute } from "../api/fetch-route";
import type { Geometry, GeometryType, LineStringGeometry, MultiPointGeometry, PointGeometry } from "../types/geometry";
import type { Route } from "../types/route";

interface RawRouteGeometry {
  type: string; // FeatureCollection
  features: Feature<GeometryType>[];
}

interface Feature<Type extends GeometryType> {
  type: "Feature";
  geometry: Geometry<Type>;
  properties: Type extends "point" ? {
    type: string; // leszall, felszall?
    names: string[]; // one entry
    style: string;
  } : Type extends "line" ? ({
    f_ls_id: number;
    t_ls_id: number;
    inside: number; // bool
  } | {
    type: string;
    distance: number;
  }) : {
    names: {
      ls_id: number;
      name: string;
    }[];
    inside: number; // bool
  }
}

// geodata(data, nativeData) in website code
export async function routeGeometry(route: Route): Promise<RawRouteGeometry> {
  const result = await postRoute("/", {
    query: "getGeomC", // "jarat_kifejtes2_json" ?
    nativeData: route.routeParts.map(part => part.getRaw()),
  });

  if (result.status === "error") throw new Error(result.errMsg);

  return result.results as RawRouteGeometry;
}
