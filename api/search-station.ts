import { formatDate, padNum } from "../util";
import { postRoute } from "./fetch-route";

export interface Station {
  /** The name of the settlement */
  settlement_name: string;
  /** ID of the settlement */
  settlement_id: number;

  /** The name of the station */
  lsname: string;
  /** ID of the station */
  ls_id: number;
  
  relevance: number; // TODO

  site_code: string; // TODO: figure out what this is
  type: string; // "megallo"
  network_id: number; // Don't know what this is yet
  geomEov: {
    type: string; // Only "Point" encountered so far
    coordinates: [number, number]; // Probably depends on type being Point (TODO)
  };
}

interface SearchStationsOptions {
  when?: Date;
  maxResults?: number;
  language?: "hu" | "en";
}
export async function searchStations(inputText: string, options?: SearchStationsOptions): Promise<Station[]> {
  options = options ?? {};
  options.when = options.when ?? new Date();

  const result = await postRoute("/", {
    func: "getStationOrAddrByTextC",
    params: {
      inputText,
      searchIn: ["stations"],
      searchDate: formatDate(options.when),
      maxResults: options.maxResults ?? 10,
      networks: [1, 2, 3, 10, 11, 12, 13, 14, 24, 25, 26], // TODO - allow these to be chosen
      currentLang: options.language ?? "hu", // TODO - see if this affects anything at all?
    },
  });

  return result.results as Station[];
}
