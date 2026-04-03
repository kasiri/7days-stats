import React from "react";
import SectionTitle from "../components/SectionTitle";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import SectionContent from "../components/SectionContent";

export default function Normas(): React.ReactElement {
  // ⬅️ CAMBIA ESTO A false PARA VOLVER A MOSTRAR LA PÁGINA NORMAL
  const mantenimiento = true;

  // ⛔ MODO MANTENIMIENTO
  if (mantenimiento) {
    return (
      <div className="container" style={{ textAlign: "center", padding: "80px 20px" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          🚧 Página en Mantenimiento 🚧
        </h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.8 }}>
          Estamos actualizando esta sección.  
          Vuelve más tarde para ver las nuevas normas del servidor.
        </p>
      </div>
    );
  }

  // ✅ TU PÁGINA ORIGINAL (INTACTA)
  return (
    <div className="container">
      <PageHeader title="📜 Normas del Servidor" h1ClassName="normas-title" />

      {/* REGLAS DE LA COMUNIDAD */}
      <Card className="normas-card">
        <h2 className="bloody-title">🌟 REGLAS DE LA COMUNIDAD</h2>

        <SectionTitle>🤝 RESPETO</SectionTitle><SectionContent>
          <ul>
            <li>No se permiten insultos, acoso, toxicidad ni faltas de respeto.</li>
            <li>Cualquier comportamiento hostil hacia otros jugadores será sancionado.</li>
          </ul>
        </SectionContent>

        <SectionTitle>🎒 PROPIEDAD Y SAQUEO</SectionTitle><SectionContent>
          <ul>
            <li>Prohibido robar objetos, recursos o pertenencias de otros jugadores.</li>
            <li>No está permitido aprovecharse de bases, trampas o estructuras creadas por otros.</li>
            <li>Respeta el trabajo y progreso de cada jugador.</li>
          </ul>
        </SectionContent>

        <SectionTitle>🧱 ESTRUCTURAS Y CONSTRUCCIÓN</SectionTitle><SectionContent>
          <ul>
            <li>No destruyas construcciones ajenas.</li>
            <li>No bloquees accesos, traders o zonas importantes del mapa.</li>
            <li>Evita construir en lugares que puedan causar lag o problemas al servidor.</li>
            <li>Prohibidas las bases subterráneas sin salida donde haya un bloque de reclamación.</li>
            <li>Nada de pozos sin escaleras, túneles cerrados o habitaciones sin salida.</li>
            <li>Si un jugador cae dentro, no podrá salir ni recuperar su mochila.</li>
            <li>Toda base subterránea debe tener al menos una salida funcional y accesible.</li>
          </ul>
        </SectionContent>

        <SectionTitle>💬 COMUNICACIÓN</SectionTitle><SectionContent>
          <ul>
            <li>Usa el chat con educación.</li>
            <li>No spam, no publicidad, no enlaces sospechosos.</li>
          </ul>
        </SectionContent>

        <SectionTitle>🛡️ PVP / PVE</SectionTitle><SectionContent>
          <ul>
            <li>El servidor es PvE.</li>
          </ul>
        </SectionContent>

        <SectionTitle>⚠️ SEGURIDAD</SectionTitle><SectionContent>
          <ul>
            <li>No exploits, hacks, duplicaciones ni uso de bugs para obtener ventaja.</li>
            <li>Cualquier intento de dañar el servidor o a otros jugadores será motivo de expulsión.</li>
            <li>Prohibido arrastrar hordas hacia otros jugadores o sus bases.</li>
            <li>No pasar con moto/coche arrastrando zombis hacia otra persona.</li>
            <li>No provocar que una horda cambie de objetivo hacia otro jugador.</li>
            <li>No usar hordas para molestar, matar o perjudicar.</li>
            <li>Si no tienes base antihordas, no pases hordas por delante de otras bases.</li>
            <li>Si no puedes aguantar la horda: sal del servidor antes de que empiece (Tampoco salgas 5 minutos antes si no hay mas players online).</li>
          </ul>
        </SectionContent>

        <SectionTitle>🆘 SOPORTE</SectionTitle><SectionContent>
          <p>Si encuentras un problema, bug o caída del servidor, avisa a la administración</p>
        </SectionContent>
      </Card>

      <div className="bloody-separator" />

      {/* CONFIGURACIÓN DEL SERVER */}
      <Card className="normas-card">
        <h2 className="bloody-title">⚙️ CONFIGURACIÓN DEL SERVER – 7 DAYS TO DIE</h2>

        <SectionContent>
          <p>
            <strong>🚫 ENTRAD SIN EASY ANTICHEAT</strong> — Igual que para instalar los mods.
            Ejecutad <strong>7dLauncher.exe</strong> para iniciar sin anticheat.
          </p>
        </SectionContent>

        <SectionTitle>🌍 MUNDO</SectionTitle><SectionContent>
          <ul>
            <li>Tipo: Mod</li>
            <li>Nombre: <strong>New York Map</strong></li>
            <li>Seed: <strong>nuevayork</strong></li>
            <li>Tamaño: 7148</li>
            <li>Modo: Supervivencia</li>
            <li>Dificultad: Guerrero (Hard)</li>
          </ul>
        </SectionContent>

        <SectionTitle>💥 DAÑOS Y PROGRESO</SectionTitle><SectionContent>
          <ul>
            <li>Daño jugador → bloques: 100%</li>
            <li>Daño IA → bloques: 100%</li>
            <li>Daño IA Luna de Sangre: 100%</li>
            <li>XP multiplicada: 100%</li>
          </ul>
        </SectionContent>

        <SectionTitle>🌧️ TIEMPO Y CLIMA</SectionTitle><SectionContent>
          <ul>
            <li>Duración del día: 60 min</li>
            <li>Horas de luz: 18 h</li>
            <li>Progresión de biomas: Activada</li>
            <li>Tormentas: 50</li>
          </ul>
        </SectionContent>

        <SectionTitle>💀 MUERTE Y RESPAWN</SectionTitle><SectionContent>
          <ul>
            <li>Penalización: XP clásico</li>
            <li>Al morir: Solo mochila</li>
            <li>Al salir: Nada</li>
          </ul>
        </SectionContent>

        <SectionTitle>🛏️ RESPAWN Y CAMAS</SectionTitle><SectionContent>
          <ul>
            <li>Zona muerta: 15 bloques</li>
            <li>Expiración: 45 días</li>
            <li>Cerca de amigos: Solo bosque</li>
            <li>Cerca de mochila: Activado</li>
          </ul>
        </SectionContent>

        <SectionTitle>🎥 CÁMARA</SectionTitle><SectionContent>
          <ul>
            <li>Vista libre entre 1ª y 3ª persona</li>
          </ul>
        </SectionContent>

        <SectionTitle>🧟 SPAWN ENEMIGOS / ANIMALES</SectionTitle><SectionContent>
          <ul>
            <li>Zombis: 80</li>
            <li>Animales: 50</li>
            <li>Visión: 8</li>
            <li>Malla: 1000</li>
          </ul>
        </SectionContent>

        <SectionTitle>🔥 COMPORTAMIENTO ZOMBI</SectionTitle><SectionContent>
          <ul>
            <li>Día: Jog</li>
            <li>Noche: Sprint</li>
            <li>Ferales: Sprint</li>
            <li>Luna de Sangre: Sprint</li>
            <li>Frecuencia: 7 días</li>
          </ul>
        </SectionContent>

        <SectionTitle>📦 LOOT Y EVENTOS</SectionTitle><SectionContent>
          <ul>
            <li>Loot: 100%</li>
            <li>Respawn: 7 días</li>
            <li>Airdrops: 72 h</li>
            <li>Marcador: Off</li>
            <li>XP compartida: 250 bloques</li>
          </ul>
        </SectionContent>

        <SectionTitle>⚔️ PVP / PVE</SectionTitle><SectionContent>
          <ul>
            <li>PvE (No Killing)</li>
          </ul>
        </SectionContent>

        <SectionTitle>🏠 LAND CLAIM</SectionTitle><SectionContent>
          <ul>
            <li>Claims: 2</li>
            <li>Tamaño: 41 bloques</li>
            <li>Zona muerta: 30 bloques</li>
            <li>Expiración: 15 días</li>
          </ul>
        </SectionContent>
      </Card>
    </div>
  );
}

