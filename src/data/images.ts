// AUTO‑IMPORT de todas las imágenes dentro de /images/
const importedImages = import.meta.glob("@/images/*.{jpg,jpeg,png,webp}", {
  eager: true,
});

// MAPA DE GRUPOS POR PREFIJO
const groupMap: Record<string, string> = {
  "base1": "Base de OQ49",
  
  "base2": "Base de CalvoTeam primer server",

  "basekn": "Base de Kasiri & Neo",

  "fran": "Base de FranNumeritos",

  "joserayo": "Base de JoseRayo",

  "moto": "Base de Motopatin",

  "oq": "Base 1 de OQ49",

  "oscar": "Base 2 de OQ49",

  "pool": "Base Piscina Kasi & Neo",

  "ptakks": "Base Ptakks-Sorian",

  "sixto": "Base Sixto",

  "wil": "Base equipo Tryjard (Wil - Lithu - JFML)",

  "piscina": "Base Piscina Kasi & Neo",
  
  "tryjard": "Base equipo Tryjard (Wil - Lithu - JFML)",
};

// PROCESAR IMÁGENES → ORDENAR POR GRUPO → ASIGNAR CAPTION
export const images = Object.entries(importedImages)
  .map(([path, img]: any) => {
    const file = path.split("/").pop()?.toLowerCase() ?? "";
    const prefix = Object.keys(groupMap).find((key) =>
      file.startsWith(key)
    );
    const caption = prefix ? groupMap[prefix] : "Imagen sin grupo";

    return {
      src: img.default,
      caption,
      alt: caption,
      group: prefix ?? "zzz",
      file,
    };
  })
  .sort((a, b) => a.group.localeCompare(b.group));
