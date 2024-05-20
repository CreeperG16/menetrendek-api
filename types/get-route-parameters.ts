import type { Station } from "./station";
import type { NetworkTypes } from "./network-types";
import { NETWORKS, formatDate, padNum } from "../util";

export interface RawGetRoutesParameters {
  networks: number[]; // TODO: allow these to be chosen

  // Date in format "YYYY-MM-DD"
  datum: string;
  // Time
  hour: string;
  min: string;

  // Starting point
  honnan: string; // Name of the starting point (lsname)
  honnan_ls_id: number; // ls_id of the starting point
  honnan_settlement_id: number; // settlement_id of the starting point
  honnan_site_code: string; // site_code of the starting point
  honnan_eovx?: number;
  honnan_eovy?: number;
  honnan_zoom?: number;
  ind_stype: string;

  // Type of the destination
  hova: string; // Name of the destination (lsname)
  hova_ls_id: number; // ls_id of the destination
  hova_settlement_id: number; // settlement_id of the destination
  hova_site_code: string; // site_code of the destination
  hova_eovx?: number;
  hova_eovy?: number;
  hova_zoom?: number;
  erk_stype: string;

  // Keresztul
  keresztul?: string;
  keresztul_ls_id?: number;
  keresztul_settlement_id?: number;
  keresztul_site_code?: string;
  keresztul_eovx?: number;
  keresztul_eovy?: number;
  keresztul_zoom?: number;
  keresztul_stype: string;

  // Max amount of transfers
  maxatszallas: string; // actually a number LOL
  // Max waiting time
  maxvar: string; // actually a number
  // Max walking distance
  maxwalk: string; // actually a number

  // Other things
  ext_settings: string; // TODO - "block" or other values?
  filtering: number; // TODO - what are the possible values? 0 by default?
  helyi: "Yes" | "No"; // TODO - "Yes" or "No"? (shhh dont tell them bools exist)
  napszak: number; // TODO
  naptipus: number; // TODO
  odavissza: number; // TODO
  preferencia: string; // TODO
  rendezes: string; // TODO
  submitted: number; // TODO
  talalatok: number; // TODO
  target: number; // TODO
  var: string; // TODO

  utirany: string; // TODO - "oda" or "vissza"?
}

interface ExtraInfo {
  maximumTransfers: number;
  maximumWaitingTime: number;
  maximumWalkingDistance: number;
  reverseDirection: boolean;
  networks: NetworkTypes[];
}

export class GetRoutesParameters {
  public constructor(
    public readonly from: Station,
    public readonly to: Station,
    public readonly when: Date,
    public readonly extraInfo: ExtraInfo,
    public readonly via: Station | null = null
  ) {}

  public toRaw(): RawGetRoutesParameters {
    return {
      networks: this.extraInfo.networks, // TODO: allow these to be set in options
      datum: formatDate(this.when),
      hour: padNum(this.when.getHours(), 2), // Must be 2 digits
      min: padNum(this.when.getMinutes(), 2),

      honnan: this.from.stationName,
      honnan_ls_id: this.from.stationId, // Can be 0, when the start position is a settlement
      honnan_settlement_id: this.from.settlementId, // always required
      honnan_site_code: this.from.siteCode, // site code if known, otherwise 0
      ind_stype: this.from.type, // according to website code, never changes from "megallo"
      honnan_eovx: this.from.location.coordinates.x, // Optional, usually not provided for searching
      honnan_eovy: this.from.location.coordinates.y, // Optional, usually not provided for searching
      honnan_zoom: 1, // TODO: Suggested map zoom amount

      // --same as honnan
      hova: this.to.stationName,
      hova_ls_id: this.to.stationId,
      hova_settlement_id: this.to.settlementId,
      hova_site_code: this.to.siteCode,
      erk_stype: this.to.type, // according to website code, never changes "megallo"
      hova_eovx: this.from.location.coordinates.x, // Optional, usually not provided for searching
      hova_eovy: this.from.location.coordinates.y, // Optional, usually not provided for searching
      hova_zoom: 1, // TODO: Suggested map zoom amount

      // via
      ...(this.via !== null
        ? {
            keresztul: this.via.stationName,
            keresztul_ls_id: this.via.stationId,
            keresztul_settlement_id: this.via.settlementId,
            keresztul_site_code: this.via.siteCode,

            keresztul_eovx: this.via.location.coordinates.x,
            keresztul_eovy: this.via.location.coordinates.y,
            keresztul_zoom: 1, // TODO: Suggested map zoom amount
          }
        : {}),
      keresztul_stype: "megallo", // according to website code, never changes "megallo"

      maxatszallas: this.extraInfo.maximumTransfers.toString(),
      maxvar: this.extraInfo.maximumWaitingTime.toString(), // maximum waiting time in minutes
      maxwalk: this.extraInfo.maximumWalkingDistance.toString(),
      utirany: this.extraInfo.reverseDirection ? "vissza" : "oda",

      napszak: 0, // 0 - all day, 1 - morning, 2 - afternoon, 3 - specific time
      naptipus: 0, // 0 - on a specific day, 1 - any day
      preferencia: "0", // "0 - doesn't matter, 1 - bus, 4 - train" (???)
      rendezes: "1", // Order by: 0 - transfers, 1 - departure time, 2 - arrival time, 3 - total time, 4 - fare

      // TODO - ?
      ext_settings: "block", // always "block"
      helyi: "No", // always "No"
      filtering: 0, // always 0
      odavissza: 0, // (???) always 0
      submitted: 1, // always 1
      talalatok: 1, // always 1
      target: 0, // always 0
      var: "0", // minimum waiting time 0-20 multiples of 5 only

      // These are commented out in the website code, they might not work
      //honnan_multi_ls: "2132#2312#23", // multiple starting points (split by #)
      //hova_multi_ls: "66#57", // multiple starting points (split by #)
      // ? keresztul_multi_ls: "...", // this is just a guess by me, MOST LIKELY DOESNT WORK
    };
  }
}
