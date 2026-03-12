// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchStats(): Promise<any> {
  const res = await fetch("https://api.kasiriserver.space/stats");
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchRanking(): Promise<any> {
  const res = await fetch("https://api.kasiriserver.space/ranking");
  if (!res.ok) throw new Error(res.statusText);
  return res.json();
}
