import { postRoute } from "../api/fetch-route";
import type { Route, RouteNativeData } from "../types/route";
import { RouteInfo } from "../types/route-info";
import { formatDate } from "../util";

interface RawParameters {
  query: "jarat_kifejtes_text_jsonC";
  datum: string;
  start_ls_id: number;
  start_ls_name: string;
  stop_ls_id: number;
  stop_ls_name: string;
  nativeData: RouteNativeData[];
}

export class RouteMoreInfoParameters {
  constructor(public readonly route: Route) {}

  public getRaw(): RawParameters {
    return {
      query: "jarat_kifejtes_text_jsonC", // "jarat_kifejtes_text_json" ?
      datum: formatDate(this.route.departure),
      start_ls_id: this.route.from.stationId,
      start_ls_name: this.route.from.stationName,
      stop_ls_id: this.route.to.stationId,
      stop_ls_name: this.route.to.stationName,
      nativeData: this.route.routeParts.map((part) => part.getRaw()),
    };
  }
}

export async function routeDetails(route: Route): Promise<RouteInfo> {
  const params = new RouteMoreInfoParameters(route);

  const result = await postRoute("/", params.getRaw());
  if (result.status === "error") throw new Error(result.errMsg);

  const info = RouteInfo.fromRaw(route.departure, result.results);
  return info;
}
