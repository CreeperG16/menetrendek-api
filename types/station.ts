export interface RawStation {
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

export class Station {
  public constructor(
    public readonly stationName: string,
    public readonly stationId: number,

    public readonly settlementName: string,
    public readonly settlementId: number,
    public readonly siteCode: string,

    public readonly type: string, // "megallo"

    public readonly networkId: number, // Don't know what this is yet
    public readonly relevance: number, // TODO
    public readonly location: {
      type: string; // Only "Point" encountered so far
      coordinates: { x: number; y: number }; // Probably depends on type being Point (TODO)
    },

    public readonly bay: string | null = null
  ) {}

  public static fromRaw(raw: RawStation): Station {
    if (raw.geomEov.type !== "Point")
      throw new Error("Unsupported location type. " + JSON.stringify(raw.geomEov, null, 2));

    return new Station(
      raw.lsname,
      raw.ls_id,
      raw.settlement_name,
      raw.settlement_id,
      raw.site_code,
      raw.type,
      raw.network_id,
      raw.relevance,
      {
        type: raw.geomEov.type,
        coordinates: { x: raw.geomEov.coordinates[0], y: raw.geomEov.coordinates[1] },
      }
    );
  }

  public toRaw(): RawStation {
    return {
      lsname: this.stationName,
      ls_id: this.stationId,
      settlement_name: this.settlementName,
      settlement_id: this.settlementId,
      site_code: this.siteCode,
      type: this.type,
      network_id: this.networkId,
      relevance: this.relevance,
      geomEov: {
        type: this.location.type,
        coordinates: [this.location.coordinates.x, this.location.coordinates.y],
      },
    };
  }
}
