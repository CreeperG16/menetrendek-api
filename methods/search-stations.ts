import { postRoute } from "../api/fetch-route";
import { Station } from "../types/station";
import { NETWORKS, formatDate } from "../util";
import type { RawStation } from "../types/station";

interface SearchStationsOptions {
  when?: Date;
  maxResults?: number;
  language?: "hu" | "en";
}

export async function searchStations(inputText: string, options?: SearchStationsOptions): Promise<Station[]> {
  options = options ?? {};
  options.when = options.when ?? new Date();

  const rawResult = (await postRoute("/", {
    func: "getStationOrAddrByTextC",
    params: {
      inputText,
      networks: NETWORKS, // TODO: make this an option in options
      searchIn: ["stations"], // TODO "addresses"?
      searchDate: formatDate(options.when),
      maxResults: options.maxResults ?? 30,
      currentLang: options.language ?? "hu",
    },
  })) as { results: RawStation[] };

  return rawResult.results.map((rawStation) => Station.fromRaw(rawStation));
}
