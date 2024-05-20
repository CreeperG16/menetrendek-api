//import { getRoutes } from "./methods/get-routes";
//import { searchStations } from "./methods/search-stations";

//console.time("req");
//console.timeLog("req", "Starting...")

//const fromAll = await searchStations("Veszprém");
//const from = fromAll.find((s) => s.stationName === "Veszprém, autóbusz-állomás")!;

//console.timeLog("req", from.stationName);

//const toAll = await searchStations("Balatonfűzfő");
//const to = toAll.find((s) => s.stationName === "Balatonfűzfő, vasútállomás")!;

//console.timeLog("req", to.stationName);

//const routes = await getRoutes(from, to);

//console.timeLog("req", "routes");
//console.timeEnd("req");

//const info = routes.map((route) => ({
//  from: route.from.stationName + " | " + route.from.bay,
//  depart: route.departure.toLocaleString(),
//  to: route.to.stationName + " | " + route.to.bay,
//  arrive: route.arrival.toLocaleString(),
//  parts: route.routeParts.map((part) => ({
//    name: part.name,
//    from: part.from.stationName + " | " + part.from.bay,
//    depart: part.departure.toLocaleString(),
//    to: part.to.stationName + " | " + part.to.bay,
//    arrive: part.arrival.toLocaleString(),
//  })),
//}));

//console.dir(info.slice(1, 5), { depth: null });

export * from "./methods";
export * from "./types";
