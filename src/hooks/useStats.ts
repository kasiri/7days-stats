import { useEffect, useRef, useState } from "react";
import { fetchStats } from "../utils/api";
import type { ServerStats } from "@types";

const defaultStats: ServerStats = {
  day: "...",
  time: "...",
  nextHordeDay: "...",
  nextHordeIn: "...",
  players: [],
};

type UseStatsResult = {
  stats: ServerStats;
  isLoading: boolean;
  hasError: boolean;
  isRetrying: boolean;
  retry: () => void;
};

export default function useStats(pollMs: number = 30000): UseStatsResult {
  const [stats, setStats] = useState<ServerStats>(defaultStats);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [hasError, setHasError] = useState<boolean>(false);
  const [isRetrying, setIsRetrying] = useState<boolean>(false);
  const [reloadKey, setReloadKey] = useState<number>(0);
  const inFlightRef = useRef<boolean>(false);
  const retryStartRef = useRef<number | null>(null);
  const retryTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    let mounted = true;

    async function load(): Promise<void> {
      if (inFlightRef.current) return;
      inFlightRef.current = true;
      try {
        const data = await fetchStats();
        if (!mounted) return;
        setHasError(false);
        setStats({
          day: data.day || "...",
          time: data.time || "...",
          nextHordeDay: data.nextHordeDay || "...",
          nextHordeIn: data.nextHordeIn || "...",
          players: data.players || [],
        });
      } catch (err) {
        if (mounted) {
          setHasError(true);
          setIsLoading(false);
          // respect minimum retry display time
          const finishRetrying = () => {
            const start = retryStartRef.current;
            if (!start) {
              setIsRetrying(false);
              return;
            }
            const elapsed = Date.now() - start;
            const remaining = Math.max(0, 3000 - elapsed);
            if (retryTimeoutRef.current) {
              clearTimeout(retryTimeoutRef.current);
              retryTimeoutRef.current = null;
            }
            if (remaining > 0) {
              retryTimeoutRef.current = window.setTimeout(() => {
                setIsRetrying(false);
                retryTimeoutRef.current = null;
                retryStartRef.current = null;
              }, remaining);
            } else {
              setIsRetrying(false);
              retryStartRef.current = null;
            }
          };
          finishRetrying();
        }
        console.error("useStats: failed to fetch", err);
      } finally {
        inFlightRef.current = false;
        if (mounted) {
          setIsLoading(false);
          // ensure finishRetrying behavior when successful or after failure
          const start = retryStartRef.current;
          if (!start) {
            setIsRetrying(false);
          } else {
            const elapsed = Date.now() - start;
            const remaining = Math.max(0, 3000 - elapsed);
            if (retryTimeoutRef.current) {
              clearTimeout(retryTimeoutRef.current);
              retryTimeoutRef.current = null;
            }
            if (remaining > 0) {
              retryTimeoutRef.current = window.setTimeout(() => {
                setIsRetrying(false);
                retryTimeoutRef.current = null;
                retryStartRef.current = null;
              }, remaining);
            } else {
              setIsRetrying(false);
              retryStartRef.current = null;
            }
          }
        }
      }
    }

    load();
    const id = setInterval(load, pollMs);
    return () => {
      mounted = false;
      clearInterval(id);
    };
  }, [pollMs, reloadKey]);

  function retry(): void {
    if (inFlightRef.current) return;
    if (retryTimeoutRef.current) {
      clearTimeout(retryTimeoutRef.current);
      retryTimeoutRef.current = null;
    }
    setHasError(false);
    setIsRetrying(true);
    setIsLoading(true);
    retryStartRef.current = Date.now();
    setReloadKey((prev) => prev + 1);
  }

  return { stats, isLoading, hasError, isRetrying, retry };
}
