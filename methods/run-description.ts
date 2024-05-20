import { postRoute } from "../api";
import type { Geometry, GeometryType, RoutePart } from "../types";
import { formatDate } from "../util";

let sample = {
  status: "success",
  results: {
    debug: "",
    mezo: 1510,
    jaratszam: 512,
    kozlekedteti: "Volánbusz",
    vonalszam: "",
    kozlekedik: "tanév tartama alatt naponta",
    network: 1,
    alacsonypadlos: 0,
    nagysebessegu: 0,
    jelleg: "O",
    emeltszintu: 0,
    wifi: 0,
    internet: 0,
    terelout: 0,
    remark: "",
    attribs: [
      {
        name: "RunType",
        icon_id: "",
        description: "OO",
      },
    ],
    kifejtes_sor: {
      "1": {
        megallo: "Veszprém, autóbusz-állomás",
        geom: {
          type: "Point",
          coordinates: [563939, 195201],
        },
        departureCity: "Veszprém",
        departureStation: "autóbusz-állomás",
        erkezik: "",
        indul: "16:55",
        color: "#ee0000",
        varhato_erkezik: "",
        arrival_estimated: "",
        varhato_indul: "16:56",
        departure_estimated: 0,
        km: "0.0",
        internetes_jegy: 0,
        bay: "14",
        felszallas_info: "csak felszallas",
        indulasi_hely_info: "",
      },
      "2": {
        megallo: "Székesfehérvár, autóbusz-állomás",
        geom: {
          type: "Point",
          coordinates: [601641, 205153],
        },
        departureCity: "Székesfehérvár",
        departureStation: "autóbusz-állomás",
        erkezik: "17:40",
        indul: "17:50",
        color: "#ee0000",
        varhato_erkezik: "17:38",
        arrival_estimated: 0,
        varhato_indul: "17:52",
        departure_estimated: 0,
        km: "44.7",
        internetes_jegy: 0,
        bay: "3",
        felszallas_info: "",
        indulasi_hely_info: "",
      },
      "3": {
        megallo: "Székesfehérvár, vasútállomás",
        geom: {
          type: "Point",
          coordinates: [602739, 204593],
        },
        departureCity: "Székesfehérvár",
        departureStation: "vasútállomás",
        erkezik: "17:56",
        indul: "17:56",
        color: "#ee0000",
        varhato_erkezik: "17:54",
        arrival_estimated: 0,
        varhato_indul: "17:56",
        departure_estimated: 0,
        km: "46.4",
        internetes_jegy: 0,
        bay: "",
        felszallas_info: "",
        indulasi_hely_info: "",
      },
      "4": {
        megallo: "Dunaújváros, Dózsa mozi",
        geom: {
          type: "Point",
          coordinates: [641913, 179916],
        },
        departureCity: "Dunaújváros",
        departureStation: "Dózsa mozi",
        erkezik: "18:45",
        indul: "18:47",
        color: "#ee0000",
        varhato_erkezik: "18:44",
        arrival_estimated: 0,
        varhato_indul: "18:47",
        departure_estimated: 0,
        km: "96.4",
        internetes_jegy: 0,
        bay: "",
        felszallas_info: "",
        indulasi_hely_info: "",
      },
      "5": {
        megallo: "Solt, Aranykulcs tér",
        geom: {
          type: "Point",
          coordinates: [646660, 161899],
        },
        departureCity: "Solt",
        departureStation: "Aranykulcs tér",
        erkezik: "19:10",
        indul: "19:20",
        color: "#ee0000",
        varhato_erkezik: "19:10",
        arrival_estimated: 0,
        varhato_indul: "19:21",
        departure_estimated: 0,
        km: "120.4",
        internetes_jegy: 0,
        bay: "",
        felszallas_info: "",
        indulasi_hely_info: "",
      },
      "6": {
        megallo: "Solt, nagymajori elágazás",
        geom: {
          type: "Point",
          coordinates: [648607, 161708],
        },
        departureCity: "Solt",
        departureStation: "nagymajori elágazás",
        erkezik: "19:23",
        indul: "19:23",
        color: "#ee0000",
        varhato_erkezik: "19:23",
        arrival_estimated: 0,
        varhato_indul: "19:24",
        departure_estimated: 0,
        km: "122.6",
        internetes_jegy: 0,
        bay: "",
        felszallas_info: "",
        indulasi_hely_info: "",
      },
      "7": {
        megallo: "Dunatetétlen, bejárati út",
        geom: {
          type: "Point",
          coordinates: [653409, 157611],
        },
        departureCity: "Dunatetétlen",
        departureStation: "bejárati út",
        erkezik: "19:30",
        indul: "19:30",
        color: "#ee0000",
        varhato_erkezik: "19:30",
        arrival_estimated: 0,
        varhato_indul: "19:30",
        departure_estimated: 0,
        km: "129.2",
        internetes_jegy: 0,
        bay: "",
        felszallas_info: "",
        indulasi_hely_info: "",
      },
      "8": {
        megallo: "Akasztó, kultúrház",
        geom: {
          type: "Point",
          coordinates: [662082, 149620],
        },
        departureCity: "Akasztó",
        departureStation: "kultúrház",
        erkezik: "19:42",
        indul: "19:42",
        color: "#ee0000",
        varhato_erkezik: "n.a.",
        arrival_estimated: 1,
        varhato_indul: "n.a.",
        departure_estimated: 1,
        km: "141.6",
        internetes_jegy: 0,
        bay: "",
        felszallas_info: "",
        indulasi_hely_info: "",
      },
      "9": {
        megallo: "Kiskőrős, városháza",
        geom: {
          type: "Point",
          coordinates: [668038, 141786],
        },
        departureCity: "Kiskőrös",
        departureStation: "Kiskőrős, városháza",
        erkezik: "19:53",
        indul: "19:56",
        color: "#ee0000",
        varhato_erkezik: "n.a.",
        arrival_estimated: 1,
        varhato_indul: "n.a.",
        departure_estimated: 1,
        km: "151.6",
        internetes_jegy: 0,
        bay: "",
        felszallas_info: "",
        indulasi_hely_info: "",
      },
      "10": {
        megallo: "Soltvadkert, autóbusz-váróterem",
        geom: {
          type: "Point",
          coordinates: [676273, 137418],
        },
        departureCity: "Soltvadkert",
        departureStation: "autóbusz-váróterem",
        erkezik: "20:08",
        indul: "20:10",
        color: "#ee0000",
        varhato_erkezik: "n.a.",
        arrival_estimated: 1,
        varhato_indul: "n.a.",
        departure_estimated: 1,
        km: "161.7",
        internetes_jegy: 0,
        bay: "",
        felszallas_info: "",
        indulasi_hely_info: "",
      },
      "11": {
        megallo: "Pirtó, községháza",
        geom: {
          type: "Point",
          coordinates: [679671, 130259],
        },
        departureCity: "Pirtó",
        departureStation: "községháza",
        erkezik: "20:19",
        indul: "20:19",
        color: "#ee0000",
        varhato_erkezik: "n.a.",
        arrival_estimated: 1,
        varhato_indul: "n.a.",
        departure_estimated: 1,
        km: "170.1",
        internetes_jegy: 0,
        bay: "",
        felszallas_info: "",
        indulasi_hely_info: "",
      },
      "12": {
        megallo: "Kiskunhalas, autóbusz-állomás",
        geom: {
          type: "Point",
          coordinates: [683000, 120717],
        },
        departureCity: "Kiskunhalas",
        departureStation: "autóbusz-állomás",
        erkezik: "20:30",
        indul: "20:35",
        color: "#ee0000",
        varhato_erkezik: "n.a.",
        arrival_estimated: 1,
        varhato_indul: "n.a.",
        departure_estimated: 1,
        km: "180.9",
        internetes_jegy: 0,
        bay: "2",
        felszallas_info: "",
        indulasi_hely_info: "",
      },
      "13": {
        megallo: "Zsana, bejárati út",
        geom: {
          type: "Point",
          coordinates: [697456, 115659],
        },
        departureCity: "Zsana",
        departureStation: "bejárati út",
        erkezik: "20:54",
        indul: "20:54",
        color: "#ee0000",
        varhato_erkezik: "n.a.",
        arrival_estimated: 1,
        varhato_indul: "n.a.",
        departure_estimated: 1,
        km: "198.1",
        internetes_jegy: 0,
        bay: "",
        felszallas_info: "",
        indulasi_hely_info: "",
      },
      "14": {
        megallo: "Üllés, autóbusz-váróterem",
        geom: {
          type: "Point",
          coordinates: [711631, 110677],
        },
        departureCity: "Üllés",
        departureStation: "autóbusz-váróterem",
        erkezik: "21:10",
        indul: "21:10",
        color: "#ee0000",
        varhato_erkezik: "n.a.",
        arrival_estimated: 1,
        varhato_indul: "n.a.",
        departure_estimated: 1,
        km: "214.4",
        internetes_jegy: 0,
        bay: "",
        felszallas_info: "csak leszallas",
        indulasi_hely_info: "",
      },
      "15": {
        megallo: "Bordány, autóbusz-váróterem",
        geom: {
          type: "Point",
          coordinates: [717052, 108829],
        },
        departureCity: "Bordány",
        departureStation: "autóbusz-váróterem",
        erkezik: "21:17",
        indul: "21:17",
        color: "#ee0000",
        varhato_erkezik: "n.a.",
        arrival_estimated: 1,
        varhato_indul: "n.a.",
        departure_estimated: 1,
        km: "220.6",
        internetes_jegy: 0,
        bay: "",
        felszallas_info: "csak leszallas",
        indulasi_hely_info: "",
      },
      "16": {
        megallo: "Szeged(Kiskundorozsma), ABC",
        geom: {
          type: "Point",
          coordinates: [728376, 103827],
        },
        departureCity: "Szeged",
        departureStation: "(Kiskundorozsma), ABC",
        erkezik: "21:31",
        indul: "21:31",
        color: "#ee0000",
        varhato_erkezik: "n.a.",
        arrival_estimated: 1,
        varhato_indul: "n.a.",
        departure_estimated: 1,
        km: "233.7",
        internetes_jegy: 0,
        bay: "",
        felszallas_info: "csak leszallas",
        indulasi_hely_info: "",
      },
      "17": {
        megallo: "Szeged, autóbusz-állomás",
        geom: {
          type: "Point",
          coordinates: [734307, 101980],
        },
        departureCity: "Szeged",
        departureStation: "autóbusz-állomás",
        erkezik: "21:40",
        indul: "",
        color: "#ee0000",
        varhato_erkezik: "n.a.",
        arrival_estimated: 1,
        varhato_indul: "",
        departure_estimated: "",
        km: "240.5",
        internetes_jegy: 0,
        bay: "",
        felszallas_info: "csak leszallas",
        indulasi_hely_info: "",
      },
    },
    status: "success",
  },
};

interface RunDescription {
  debug: string;
  mezo: number;
  jaratszam: number;
  kozlekedteti: string;
  vonalszam: string;
  kozlekedik: string;
  network: number;
  alacsonypadlos: number;
  nagysebessegu: number;
  jelleg: string;
  emeltszintu: number;
  wifi: number;
  internet: number;
  terelout: number;
  remark: string;
  attribs: { name: string; icon_id: string; description: string }[];
  kifejtes_sor: Stop[];
  status: "success" | "error";
}

interface Stop {
  megallo: string;
  geom: Geometry<"point">;
  departureCity: string;
  departureStation: string;
  erkezik: string;
  indul: string;
  color: string;
  varhato_erkezik: string;
  arrival_estimated: string | number;
  varhato_indul: string;
  departure_estimated: number | number;
  km: string;
  internetes_jegy: number;
  bay: string;
  felszallas_info: string;
  indulasi_hely_info: string;
}

export class RouteStop {
  public constructor(
    public readonly stationName: string,
    public readonly settlementName: string,
    public readonly bay: string | null,
    public readonly distanceFromStart: number,
    public readonly location: Geometry<"point">,

    public readonly arrival: {
      readonly original: Date;
      readonly expected: Date;
    } | null,
    public readonly departure: {
      readonly original: Date;
      readonly expected: Date;
    } | null,

    private readonly rawData: Stop
  ) {}

  public static fromRaw(when: Date, raw: Stop): RouteStop {
    const day = formatDate(when) + " ";

    const arrival =
      raw.erkezik === ""
        ? null
        : {
            original: new Date(day + raw.erkezik),
            expected: new Date(day + (raw.varhato_erkezik || raw.erkezik)),
          };

    const departure =
      raw.indul === ""
        ? null
        : {
            original: new Date(day + raw.indul),
            expected: new Date(day + (raw.varhato_indul || raw.indul)),
          };

    return new RouteStop(
      raw.megallo,
      raw.departureCity,
      raw.bay || null,
      parseFloat(raw.km),
      raw.geom,
      arrival,
      departure,

      // Raw data
      raw
    );
  }
}

export class RoutePartDescription {
  constructor(
    public readonly code: string,
    public readonly stops: RouteStop[],

    private readonly rawData: RunDescription
  ) {}

  public static fromRaw(when: Date, raw: RunDescription): RoutePartDescription {
    return new RoutePartDescription(
      raw.jaratszam.toString(),
      Object.values(raw.kifejtes_sor).map((stop) => RouteStop.fromRaw(when, stop)),

      // Raw data
      raw
    );
  }
}

// this is route_details in menetrendek.hu
export async function runDescription(part: RoutePart): Promise<RoutePartDescription> {
  const result = await postRoute("/", {
    query: "runDecriptionC",
    run_id: part.runId,
    domain_type: 1, // 1 = helyközi busz, 2 = vonat
    sls_id: part.from.stationId, // the start's ls_id
    els_id: part.to.stationId, // the end's ls_id
    location: "hk", // Always "hk" according to the code's comments
    datum: formatDate(part.departure), // TODO: Apparently this is used to calculate delays? need to give correct value
  });

  if (result.status === "error") throw new Error(result.errMsg);

  const runDesc = result.results as RunDescription;
  const partDesc = RoutePartDescription.fromRaw(part.departure, runDesc);

  return partDesc;
}
