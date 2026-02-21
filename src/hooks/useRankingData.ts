import { useEffect, useRef, useState } from "react";
import { fetchRanking } from "../utils/api";
import type { Player } from "@types";

type UseRankingDataResult = {
  data: Player[];
  isLoading: boolean;
  hasError: boolean;
  isRetrying: boolean;
  retry: () => void;
};

export default function useRankingData(
  pollMs: number = 30000,
): UseRankingDataResult {
  const [data, setData] = useState<Player[]>([]);
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
        const json = await fetchRanking();
        if (!mounted) return;
        setHasError(false);
        const arr = Object.entries(json).map(
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          ([name, stats]: [string, any]) => ({
            name,
            level: stats.level,
            zombies: stats.zombies,
            deaths: stats.deaths,
          }),
        );
        setData(arr);
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
        console.error("useRankingData: failed", err);
      } finally {
        inFlightRef.current = false;
        if (mounted) {
          setIsLoading(false);
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

  return { data, isLoading, hasError, isRetrying, retry };
}
