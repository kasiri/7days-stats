import { useEffect, useState } from "react";

export default function useRotatingTip(
  tips: string[] = [],
  intervalMs: number = 8000,
): string {
  const [tip, setTip] = useState<string>(tips[0] || "");

  useEffect(() => {
    if (!tips.length) return;
    let lastIndex = -1;

    function showNext(): void {
      let idx: number;
      do {
        idx = Math.floor(Math.random() * tips.length);
      } while (idx === lastIndex && tips.length > 1);
      lastIndex = idx;
      setTip(tips[idx]);
    }

    showNext();
    const id = setInterval(showNext, intervalMs);
    return () => clearInterval(id);
  }, [tips, intervalMs]);

  return tip;
}
