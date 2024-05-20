import { formatDate } from "../util";
import type { RoutePart } from "./route";

let a = {
  status: "success",
  results: {
    "1": {
      OwnerName: "BKK",
      muvelet: "felszállás",
      allomas: "Népliget M",
      localCode: "",
      idopont: "16:58",
      runId: 4308906,
      jaratszam: "1/C75374239",
      network: 12,
      jarmu: "villamos",
      DomainCompanyName: "Bécsi út / Vörösvári út - Etele út / Fehérvári út",
      Headsign: "Kelenföld vasútállomás M",
      jaratinfo: {
        alacsonypadlos: 0,
        nagysebessegu: 0,
        kozlekedik: "hétvégéken és ünnepnapokon",
        prebuy: 0,
        jelleg: "",
        emeltszintu: 0,
        wifi: 0,
        internet: 0,
        terelout: 0,
        remark: "",
        fare: 450,
        no_discountable_fare: 0,
        additional_ticket_price: 0,
        seat_ticket_price: 0,
        train_cat: "",
        fare_50_percent: 450,
        fare_90_percent: 450,
        dcLsId: 0,
        bube_accepted: 1,
        utazasi_tavolsag: 6.9,
        StartStation: 63828,
        StartStationName: "Bécsi út / Vörösvári út",
        StartSettleName: "Budapest",
        EndStation: 63736,
        EndStationName: "Kelenföld vasútállomás M (Etele tér)",
        EndSettleName: "Budapest",
        FromBay: "",
        ToBay: "",
        attribs: [
          {
            name: "Bube",
            icon_id: "BBP",
            description: "",
          },
        ],
        travelTime: 20,
        CountyPass: "Pest",
      },
      news: {
        Title: "",
        Url: "",
      },
      vegallomasok: "Budapest felől Budapest felé",
      description: "Bécsi út / Vörösvári út - Etele út / Fehérvári út",
      tarsasag: "BKK",
      varhato_indulas: "16:58",
      rendszam: "",
      keses_perc: 0,
    },
    "2": {
      allomas: "Kelenföld vasútállomás M (Etele tér)",
      localCode: "",
      idopont: "17:18",
      muvelet: "leszállás",
    },
  },
};

let b = {
  status: "success",
  results: {
    "1": {
      OwnerName: "Volánbusz",
      muvelet: "felszállás",
      allomas: "Veszprém, autóbusz-állomás",
      localCode: "",
      idopont: "16:55",
      runId: 728065,
      jaratszam: "1510/512",
      network: 1,
      jarmu: "busz",
      DomainCompanyName: "Szeged - Solt - Székesfehérvár - Veszprém",
      Headsign: "",
      jaratinfo: {
        alacsonypadlos: 0,
        nagysebessegu: 0,
        kozlekedik: "tanév tartama alatt naponta",
        prebuy: 0,
        jelleg: "OO",
        emeltszintu: 0,
        wifi: 0,
        internet: 0,
        terelout: 0,
        remark: "",
        fare: 2520,
        no_discountable_fare: 0,
        additional_ticket_price: 0,
        seat_ticket_price: 0,
        train_cat: "",
        fare_50_percent: 1260,
        fare_90_percent: 250,
        dcLsId: 0,
        bube_accepted: 0,
        utazasi_tavolsag: 120.4,
        StartStation: 1817,
        StartStationName: "Veszprém, autóbusz-állomás",
        StartSettleName: "Veszprém",
        EndStation: 14611,
        EndStationName: "Szeged, autóbusz-állomás",
        EndSettleName: "Szeged",
        FromBay: "14",
        ToBay: "",
        attribs: [
          {
            name: "Orszagos",
            icon_id: "OO",
            description: "",
          },
        ],
        travelTime: 135,
        CountyPass: "Country",
      },
      news: {
        Title: "",
        Url: "",
      },
      vegallomasok: "Helyből indul Szeged felé",
      description: "Szeged - Solt - Székesfehérvár - Veszprém",
      tarsasag: "Volánbusz",
    },
    "2": {
      allomas: "Solt, Aranykulcs tér",
      localCode: "",
      idopont: "19:10",
      tarsasag: "",
      muvelet: "átszállás",
      ChangeMode: "",
      ChangeRoute: "",
      ChangeTime: "",
      tavolsag: 0,
      ido: 0,
      bywhat: "Walking",
      TimeForChange: 7,
      vegallomasok: "Átszállásra rendelkezésre álló idő:  7 perc",
    },
    "3": {
      OwnerName: "Volánbusz",
      muvelet: "felszállás",
      allomas: "Solt, Aranykulcs tér",
      localCode: "",
      idopont: "19:17",
      varhato_indulas: "19:17",
      rendszam: "",
      keses_perc: 0,
      runId: 826405,
      jaratszam: "1110/28",
      network: 1,
      jarmu: "busz",
      DomainCompanyName: "Budapest - Solt - Kalocsa - Baja",
      Headsign: "",
      jaratinfo: {
        alacsonypadlos: 0,
        nagysebessegu: 0,
        kozlekedik: "naponta",
        prebuy: 0,
        jelleg: "OO",
        emeltszintu: 0,
        wifi: 1,
        internet: 0,
        terelout: 0,
        remark: "",
        fare: 1680,
        no_discountable_fare: 0,
        additional_ticket_price: 0,
        seat_ticket_price: 0,
        train_cat: "",
        fare_50_percent: 840,
        fare_90_percent: 170,
        dcLsId: 0,
        bube_accepted: 0,
        utazasi_tavolsag: 87.5,
        StartStation: 2408,
        StartStationName: "Baja, autóbusz-állomás",
        StartSettleName: "Baja",
        EndStation: 16646,
        EndStationName: "Budapest, Népliget autóbusz-pályaudvar",
        EndSettleName: "Budapest",
        FromBay: "",
        ToBay: "",
        attribs: [
          {
            name: "Orszagos",
            icon_id: "OO",
            description: "",
          },
          {
            name: "Wifi",
            icon_id: "EW",
            description: "",
          },
        ],
        travelTime: 98,
        CountyPass: "Country",
      },
      news: {
        Title: "",
        Url: "",
      },
      vegallomasok: "Baja felől Budapest felé",
      description: "Budapest - Solt - Kalocsa - Baja",
      tarsasag: "Volánbusz",
    },
    "4": {
      allomas: "Budapest, Népliget autóbusz-pályaudvar",
      localCode: "",
      idopont: "20:55",
      muvelet: "leszállás",
    },
  },
};

export interface RawRouteInfo_Felszallas {
  OwnerName: string;
  muvelet: "felszállás";
  allomas: string;
  localCode: string;
  idopont: string;
  runId: number;
  jaratszam: string;
  network: number;
  jarmu: string;
  DomainCompanyName: string;
  Headsign: string;
  jaratinfo: {
    alacsonypadlos: number; // bool
    nagysebessegu: number; // bool
    kozlekedik: string; // when it works
    prebuy: number;
    jelleg: string;
    emeltszintu: number; // bool
    wifi: number; // bool
    internet: number; // bool
    terelout: number; // bool
    remark: string;
    fare: number;
    no_discountable_fare: number;
    additional_ticket_price: number;
    seat_ticket_price: number;
    train_cat: string;
    fare_50_percent: number;
    fare_90_percent: number;
    dcLsId: number;
    bube_accepted: number; // bool
    utazasi_tavolsag: number; // km
    StartStation: number; // ls_id
    StartStationName: string; // lsname
    StartSettleName: string; // settlement_name
    EndStation: number; // ls_id
    EndStationName: string; // lsname
    EndSettleName: string; // settlement_name
    FromBay: string;
    ToBay: string;
    attribs: { name: string; icon_id: string; description: string }[];
    travelTime: number;
    CountyPass: string;
  };
  news: { Title: string; Url: string };
  vegallomasok: string;
  description: string;
  tarsasag: string;
  varhato_indulas: string;
  rendszam: string;
  keses_perc?: number;
}

export interface RawRouteInfo_Atszallas {
  allomas: string;
  localCode: string;
  idopont: string;
  tarsasag: string;
  muvelet: "átszállás";
  ChangeMode: string;
  ChangeRoute: string;
  ChangeTime: string;
  tavolsag: number;
  ido: number;
  bywhat: string;
  TimeForChange: number;
  vegallomasok: string;
}

export interface RawRouteInfo_Leszallas {
  allomas: string;
  localCode: string;
  idopont: string;
  muvelet: "leszállás";
}

export type RawRouteInfo<Muvelet extends "felszállás" | "átszállás" | "leszállás"> = Muvelet extends "felszállás"
  ? RawRouteInfo_Felszallas
  : Muvelet extends "leszállás"
  ? RawRouteInfo_Leszallas
  : RawRouteInfo_Atszallas;

export class BaseRouteInfoPart {
  constructor(
    public readonly stationName: string,
    public readonly when: Date,
    public readonly muvelet: "felszállás" | "leszállás" | "átszállás"
  ) {}
}

export class FelszallasRouteInfoPart extends BaseRouteInfoPart {
  public constructor(
    public readonly stationName: string,
    public readonly when: Date,
    public readonly runId: number,
    public readonly vehicle: string,
    public readonly expectedDeparture: Date,
    public readonly delayMin: number,
    public readonly name: string,

    private readonly rawData: RawRouteInfo_Felszallas
  ) {
    super(stationName, when, "felszállás");
  }

  public static fromRaw(date: Date, raw: RawRouteInfo_Felszallas) {
    const when = new Date(formatDate(date) + " " + raw.idopont);
    const expectedDeparture = new Date(formatDate(date) + " " + (raw.varhato_indulas || raw.idopont));

    return new FelszallasRouteInfoPart(raw.allomas, when, raw.runId, raw.jarmu, expectedDeparture, raw.keses_perc ?? 0, raw.jaratszam, raw);
  }

  public getRaw(): RawRouteInfo_Felszallas {
    return this.rawData;
  }
}

export class AtszallasRouteInfoPart extends BaseRouteInfoPart {
  public constructor(
    public readonly stationName: string,
    public readonly when: Date,
    public readonly changeMin: number,
    public readonly changeDistance: number
  ) {
    super(stationName, when, "átszállás");
  }

  public static fromRaw(date: Date, raw: RawRouteInfo_Atszallas) {
    const when = new Date(formatDate(date) + " " + raw.idopont);

    return new AtszallasRouteInfoPart(raw.allomas, when, raw.TimeForChange, raw.tavolsag);
  }
}

export class LeszallasRouteInfoPart extends BaseRouteInfoPart {
  public constructor(public readonly stationName: string, public readonly when: Date) {
    super(stationName, when, "leszállás");
  }

  public static fromRaw(date: Date, raw: RawRouteInfo_Leszallas) {
    const when = new Date(formatDate(date) + " " + raw.idopont);

    return new LeszallasRouteInfoPart(raw.allomas, when);
  }
}

export class RouteInfo {
  constructor(public readonly parts: BaseRouteInfoPart[]) {}

  public static fromRaw(when: Date, raw: { [key: number]: RawRouteInfo<"felszállás" | "átszállás" | "leszállás"> }) {
    const parts = new Array<BaseRouteInfoPart>();

    for (const rawPart of Object.values(raw)) {
      muvelet: switch (rawPart.muvelet) {
        case "felszállás":
          parts.push(FelszallasRouteInfoPart.fromRaw(when, rawPart));
          break muvelet;
        case "átszállás":
          parts.push(AtszallasRouteInfoPart.fromRaw(when, rawPart));
          break muvelet;
        case "leszállás":
          parts.push(LeszallasRouteInfoPart.fromRaw(when, rawPart));
          break muvelet;
      }
    }

    return new RouteInfo(parts);
  }
}
