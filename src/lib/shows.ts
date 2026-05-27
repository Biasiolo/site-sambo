import Papa from "papaparse";

const SHEET_ID = "1PpLiGKipY06RoNVT9b-b72MqJEfAEp27xZt14WAT7xE";

const CSV_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv`;

export type Show = {
  mes: string;
  data: string;
  horario: string;
  local: string;
  cidade: string;
  ingresso: string;
};

export async function fetchShows(): Promise<Show[]> {
  const res = await fetch(CSV_URL);

  if (!res.ok) {
    throw new Error("Erro ao carregar agenda");
  }

  const csv = await res.text();

  const parsed = Papa.parse<Record<string, string>>(csv, {
    header: true,
    skipEmptyLines: true,
  });

  return parsed.data
    .map((row) => ({
      mes: (row["MÊS"] ?? row["MES"] ?? "").trim(),
      data: (row["DATA"] ?? "").trim(),
      horario: (row["HORÁRIO"] ?? row["HORARIO"] ?? "").trim(),
      local: (row["LOCAL"] ?? "").trim(),
      cidade: (row["CIDADE"] ?? "").trim(),
      ingresso: (row["INGRESSO"] ?? "").trim(),
    }))
    .filter((show) => show.data || show.local);
}