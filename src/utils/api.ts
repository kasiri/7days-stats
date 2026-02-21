// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchStats(): Promise<any> {
  const res = await fetch("/api/stats.json");
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchRanking(): Promise<any> {
  const res = await fetch("/api/ranking.json");
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}
