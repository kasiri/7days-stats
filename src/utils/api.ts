import { API_BASE_URL } from "../config/api";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchStats(): Promise<any> {
  const res = await fetch(`${API_BASE_URL}/stats`);
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchRanking(): Promise<any> {
  const res = await fetch(`${API_BASE_URL}/ranking`);
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}
