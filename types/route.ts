import { runDescription, routeDetails, type RoutePartDescription } from "../methods";
import type { RouteInfo } from "./route-info";
import { Station } from "./station";

export interface RouteNativeData {
  Count: number; // TODO: what this is. maybe how many buses/etc?
  Sequence: number;

  DepartureStation: number; // ls_id
  DepartureTime: number; // in minutes since midnight
  DepStationName: string;
  DepartureSettle: number; // settlement_id
  FromSettle: string; // settlement name

  ArrivalSettle: number; // settlement_id
  ArrivalStation: number; // ls_id
  ArrStationName: string;
  ArrivalTime: number; // in minutes since midnight

  Distance: number; // in metres
  RestrictionId: number;
  RunId: number;
  NetworkId: number;
  WalkDistance: number; // not sure if this is correct?
  LrId: number;
  RdId: number;

  Domain_code: string; // The bus number
  Number: string; // end of the bus number
  LongName: string; // full number
  ShortName: string;

  DepartureOutside: boolean;
  ArrivalOutside: boolean;

  // coordinates?
  DepEovX: number;
  DepEovY: number;
  ArrEovX: number;
  ArrEovY: number;

  DomainCompanyName: string; // What's written on the bus (stops)
  Explanation: string; // types of days of week it works on?
  Prebuy: number; // bool?
  LocalDomainCode: string; // bus number again
  Heke: boolean;

  chargeInfo: {
    parts: {
      order: number;
      purposeOfJourneyPartition: string;
      fromStopPoint: number; // ls_id of dep
      toStopPoint: number; // ls_id of arr?
      distanceInMeter: number;
      fareClass: string; // eg. "secondClass"
      facilities: string[]; // enum?
      zones: unknown[]; // TODO
    }[];
    facilities: string[]; // enum?
    common_zone: string;
    productCategory: unknown; // TODO: NULL?
  };

  // Pass info
  local_pass_useable: boolean; // not sure which, maybe eg. v-busz pass?
  bkk_pass_useable: boolean;
  GlobalPassUsage: string; // eg. "County"
  CountyPass: string; // eg. "Veszprém"
  GlobalPass: string; // same as county? double check

  // Not sure what these are
  DepartureSeqnr: number;
  ArrivalSeqnr: number;

  // Fare info
  FareSumExtra: number;
  FareExtra: number;
  FareSeatRes: number; // seat reservation?
  Fare: number; // full fare
  FareFifty: number; // eg. diak
  FareNinty: number;

  TicketType: string; // eg. "OneRideOnly"
  LinkStation: number; // maybe ls_id?
  Bube: boolean; // not sure what this is
  PeakMemory: number;

  ToSettle: string; // the departure settlement

  Hitcount: number;
  ChangeTime: number;
  ChangeMode: string; // eg. "Walking"
  ChangeRoute: string;
  ChangeLs?: number; // if change, ls_id
  FromPs: number;
  ToPs: number;
  InternalId: number;

  // Bay things?
  // TODO: double check
  FromBay: string;
  ToBay: string;

  Owner: number;
  OwnerName: string; // eg. "Volánbusz", "MÁV"

  FirstClassFee: number;
  DatabaseVersion: number;

  BikeCarriage: number; // bool?
  BikeForbidden: number; // bool?
  BikeRestricted: number; // bool?
  BikeSeatTicket: number; // bool?

  BkszDomainCode: string;

  // all booleans?
  BufeCar: number;
  Detour: number;
  DiningCar: number;
  DirectCarriage: number;
  DisabledPeople: number;
  FirstClass: number;
  HighSpeed: number;
  Internet: number;
  LowFloor: number;
  NoSuperCharge: number;
  Premium: number;
  SeatTicketCompulsory: number;
  Superior: number; // ?
  SupplementaryTicketCompulsory: number;
  WheelChairNoLift: number;
  WheelChairWithLift: number;
  Wifi: number;

  JourneyName: string; // eg. "KATICA", "VIZIPOK"
  Remark: string;
  RunCategory: string; // eg. "VIR"
  RunType: string; // eg. "OO"
  NumberType: string; // eg. "TripNumber", "TrainNumber"
  TransportMode: string; // eg. "vehicles.bus", "vehicles.train"
  News: { Title: string; Url: string };
}

export class RoutePart {
  constructor(
    public readonly partId: number, // Index of the part
    public readonly runId: number, // RunID used in other requests

    public readonly from: Station,
    public readonly to: Station,

    public readonly departure: Date,
    public readonly arrival: Date,
    public readonly distance: number,

    public readonly vehicle: string, // "vehicles.train" "vehicles.bus"
    public readonly name: string,
    public readonly domainCode: string,

    public readonly fare: number,

    //private readonly rawData: RouteNativeData
  ) {}

  public static fromRaw(date: Date, raw: RouteNativeData): RoutePart {
    const from = new Station(
      raw.DepStationName,
      raw.DepartureStation,
      raw.FromSettle,
      raw.DepartureSettle,
      "", // Not present in raw data
      "megallo", // Not present
      0,
      0,
      {
        type: "Point",
        coordinates: { x: raw.DepEovX, y: raw.DepEovY },
      },
      raw.FromBay || null
    );

    const to = new Station(
      raw.ArrStationName,
      raw.ArrivalStation,
      raw.ToSettle,
      raw.ArrivalSettle,
      "", // Not present in route data
      "megallo", // Also not present
      0, // Not present
      0, // Not present
      {
        type: "Point",
        coordinates: { x: raw.ArrEovX, y: raw.ArrEovY },
      },
      raw.ToBay || null
    );

    const departure = new Date(date);
    departure.setHours(0);
    departure.setSeconds(0);
    departure.setMilliseconds(0);
    departure.setMinutes(raw.DepartureTime);

    const arrival = new Date(date);
    arrival.setHours(0);
    arrival.setSeconds(0);
    arrival.setMilliseconds(0);
    arrival.setMinutes(raw.ArrivalTime);

    return new RoutePart(
      raw.Sequence,
      raw.RunId,
      from,
      to,
      departure,
      arrival,
      raw.Distance,
      raw.TransportMode,
      raw.LongName,
      raw.Domain_code,
      raw.Fare,

      //raw // raw data
    );
  }

  //public getRaw(): RouteNativeData {
  //  return this.rawData;
  //}

  public async getDescription(): Promise<RoutePartDescription> {
    return await runDescription(this);
  }

  public json(): { [key: string]: any } {
    return {
      partId: this.partId,
      runId: this.runId,
      from: this.from.json(),
      to: this.to.json(),
      departure: this.departure,
      arrival: this.arrival,
      distance: this.distance,
      vehicle: this.vehicle,
      name: this.name,
      domainCode: this.domainCode,
      fare: this.fare,

      // TEMP
      //rawData: this.rawData,
    };
  }

  public static fromJson(json: { [key: string]: any }): RoutePart {
    return new RoutePart(
      json.partId,
      json.runId,
      Station.fromJson(json.from),
      Station.fromJson(json.to),
      new Date(json.departure),
      new Date(json.arrival),
      json.distance,
      json.vehicle,
      json.name,
      json.domainCode,
      json.fare,

      // TEMP
      //json.rawData // raw data
    );
  }
}

export class Route {
  constructor(
    /** Not a unique ID; just the index at which this route lies in a search result. */
    public readonly routeId: number, // increments with results

    /** The parts (transfers) that make up this route. */
    public readonly routeParts: RoutePart[],

    /** Where the first part of the route departs from. */
    public readonly from: Station,
    /** Where the last part of the route arrives at. */
    public readonly to: Station,

    /** When the first part of the route is set to depart. */
    public readonly departure: Date,
    /** When the last part of the route is set to arrive. */
    public readonly arrival: Date,
    /** The total distance travelled in this route. */
    public readonly distance: number,

    //private readonly rawData: RouteNativeData[]
  ) {}

  /** Create a new Route instance from raw data. */
  public static fromRaw(date: Date, ...raw: RouteNativeData[]): Route {
    if (raw.length === 0) throw new Error("No route!");

    const from = new Station(
      raw.at(0)!.DepStationName,
      raw.at(0)!.DepartureStation,
      raw.at(0)!.FromSettle,
      raw.at(0)!.DepartureSettle,
      "", // Not present in raw data
      "megallo", // Not present
      0,
      0,
      {
        type: "Point",
        coordinates: { x: raw.at(0)!.DepEovX, y: raw.at(0)!.DepEovY },
      },
      raw.at(0)!.FromBay || null
    );

    const to = new Station(
      raw.at(-1)!.ArrStationName,
      raw.at(-1)!.ArrivalStation,
      raw.at(-1)!.ToSettle,
      raw.at(-1)!.ArrivalSettle,
      "", // Not present in route data
      "megallo", // Also not present
      0, // Not present
      0, // Not present
      {
        type: "Point",
        coordinates: { x: raw.at(-1)!.ArrEovX, y: raw.at(-1)!.ArrEovY },
      },
      raw.at(-1)!.ToBay || null
    );

    const departure = new Date(date);
    departure.setHours(0);
    departure.setSeconds(0);
    departure.setMilliseconds(0);
    departure.setMinutes(raw.at(0)!.DepartureTime);

    const arrival = new Date(date);
    arrival.setHours(0);
    arrival.setSeconds(0);
    arrival.setMilliseconds(0);
    arrival.setMinutes(raw.at(-1)!.ArrivalTime);

    return new Route(
      raw[0].Count,
      raw.map((r) => RoutePart.fromRaw(date, r)),
      from,
      to,
      departure,
      arrival,
      raw.reduce((a, b) => a + b.Distance, 0),

      //raw // Raw data
    );
  }

  //public getRawData(): RouteNativeData[] {
  //  return this.rawData;
  //}

  public async getMoreInfo(): Promise<RouteInfo> {
    return await routeDetails(this);
  }

  public getPart(runId: number): RoutePart | undefined {
    return this.routeParts.find(part => part.runId === runId);
  }

  public json(): { [key: string]: any } {
    return {
      routeId: this.routeId,
      routeParts: this.routeParts.map((part) => part.json()),
      from: this.from.json(),
      to: this.to.json(),
      departure: this.departure,
      arrival: this.arrival,
      distance: this.distance,

      // TEMP
      //rawData: this.rawData,
    };
  }

  public static fromJson(json: { [key: string]: any }): Route {
    return new Route(
      json.routeId,
      json.routeParts.map((part: { [key: string]: any }) => RoutePart.fromJson(part)),
      Station.fromJson(json.from),
      Station.fromJson(json.to),
      new Date(json.departure),
      new Date(json.arrival),
      json.distance,

      // TEMP
      //json.rawData
    );
  }
}
