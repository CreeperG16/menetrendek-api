import type { Station } from "../types/station";
import type { NetworkTypes } from "../types/network-types";

import { Route, type RouteNativeData } from "../types/route";
import { GetRoutesParameters } from "../types/get-route-parameters";
import { NETWORKS, groupArrayByField } from "../util";
import { postRoute } from "../api/fetch-route";

interface GetRoutesOptions {
  when?: Date;
  maximumTransfers?: number;
  maximumWaitingTime?: number; // in min
  maximumWalkingDistance?: number; // in metres
  networks?: NetworkTypes[];
}

// search(sData) in website code
export async function searchRoutes(from: Station, to: Station, options?: GetRoutesOptions): Promise<Route[]> {
  options ??= {};
  options.when ??= new Date();

  const params = new GetRoutesParameters(from, to, options.when, {
    maximumTransfers: options.maximumTransfers ?? 5,
    maximumWaitingTime: options.maximumWaitingTime ?? 240,
    maximumWalkingDistance: options.maximumWalkingDistance ?? 1000,
    networks: options.networks ?? NETWORKS,
    reverseDirection: false,
  });

  const res = await postRoute("/", { func: "getRoutes", params: params.toRaw() });
  if (res.status === "error") throw new Error(res.errMsg);

  const rawResults = res.nativeResults.Hits as RouteNativeData[];
  if (rawResults.length === 0) return [];

  const routeGroups = groupArrayByField(rawResults, "Count");
  const routes = routeGroups.map((r) => Route.fromRaw(options.when as Date, ...r));

  return routes;
}
