import type { Station } from "../types";
import type { NetworkTypes } from "../types/network-types";

export interface RawTimeTableParams {
  networks: NetworkTypes[];
  datum: string;
  erk_stype: "megallo"; // always "megallo"
  ext_settings: "none"; // always "none"
  filtering: 0; // always 0
  helyi: "No"; // always "No"
  honnan: string; // lsname
  honnan_eovx?: number;
  honnan_eovy?: number;
  honnan_ls_id: number; // optional, set to 0 if not present
  honnan_settlement_id: number; // required
  honnan_site_code: string; // optional
  honnan_zoom?: number; // suggested zoom for map
  hour: string; // two digits
  maxatszallas: string;
  maxvar: string;
  maxwalk: string;
  min: string; // two digits
  napszak: 0 | 1 | 2 | 3; // TODO: enum
  naptipus: 0 | 1; // TODO: enum
  odavissza: 0; // always 0
  option1: "relacio"; // always relacio
  option2: "helykozi"; // always helykozi
  preferencia: number; // 0 - doesnt matter, 1 - bus, 4 - train (???)
  rendezes: 0 | 1 | 2 | 3 | 4; // order by (see search-routes)
  submitted: 1; // always 1
  talalatok: 1; // always 1
  target: 0; // always 0
  utirany: "oda" | "vissza";
  code: "none";
  jegyzek: "ind" | "erk"; // jegyzék típusa? website code has (sData.from.lsname) ? "ind" : "erk"
  ls_id: number; // the ls_id of the station being requested
  interval: number; // "ha konkrét időpontot adott meg, akkor mennyi időre előre adja vissza a találatokat"
  maxCount: number; // "induló járatok limitálása, ha túl sok elemű lenne a lista, pld több száz vagy ezer, akkor max. ennyi elemet ad vissza"
}

// TODO: response

// TODO
//function getStationTimeTable(station: Station): any {
//  const 
//}
