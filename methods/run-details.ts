import { postRoute } from "../api/fetch-route";

interface RunDetail {
  run_id: number;
  seqnr: number;
  ls_id: number;

  ain_depttime: string | null;
  departure_time: string | null;
  departurestand: number | null;
  departure_estimated: number;

  aim_arrtime: string | null;
  arrival_time: string | null;
  arrivalstand: number | null;
  arrival_estimated: number;
}

// run_delay(runId, ext) in website code
export async function runDetails(runId: number): Promise<RunDetail[]> {
  const result = await postRoute("/", { func: "getRunDetails", params: { run_id: runId } });
  if (result.status === "error") throw new Error(result.errMsg);
  if (result.result.status === "error") throw new Error(result.result.errMsg);

  if (result.result === null) return [];

  return result.result.data as RunDetail[];
}
