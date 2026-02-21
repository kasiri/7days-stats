import { useEffect, useState } from "react";

export default function useCountdown(targetDateISO: string): string {
  const [value, setValue] = useState<string>("Cargando...");

  useEffect(() => {
    const target = new Date(targetDateISO).getTime();
    if (Number.isNaN(target)) return;

    function tick(): void {
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) {
        setValue("¡El nuevo mundo ya está activo!");
        return;
      }
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);
      setValue(`${d} días, ${h} horas, ${m} min, ${s} seg`);
    }

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [targetDateISO]);

  return value;
}
