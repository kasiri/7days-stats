import React from "react";
import SectionTitle from "../components/SectionTitle";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import SectionContent from "../components/SectionContent";

export default function Normas(): React.ReactElement {
  // ⬅️ CAMBIA ESTO A false PARA VOLVER A MOSTRAR LA PÁGINA NORMAL
  const mantenimiento = false;

  // ⛔ MODO MANTENIMIENTO
  if (mantenimiento) {
    return (
      <div className="container">
        <div
          className="survival-card-red"
          style={{ textAlign: "center", padding: "60px 20px", marginTop: "120px" }}
        >
          <h1 className="bloody-title">🚧 Página en Mantenimiento 🚧</h1>
          <div className="bloody-separator"></div>

          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
            Estamos actualizando esta sección.  
            <br />
            Vuelve más tarde para ver las nuevas normas del servidor.
          </p>
        </div>
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

        <SectionTitle>🤝 RESPETO</SectionTitle>
        <SectionContent>
          <ul>
            <li>No se permiten insultos, acoso, toxicidad ni faltas de respeto.</li>
            <li>Cualquier comportamiento hostil hacia otros jugadores será sancionado.</li>
          </ul>
        </SectionContent>

        <SectionTitle>🎒 PROPIEDAD Y SAQUEO</SectionTitle>
        <SectionContent>
          <ul>
            <li>Prohibido robar objetos, recursos o pertenencias de otros jugadores.</li>
            <li>No está permitido aprovecharse de bases, trampas o estructuras creadas por otros.</li>
            <li>Respeta el trabajo y progreso de cada jugador.</li>
          </ul>
        </SectionContent>

        <SectionTitle>🧱 ESTRUCTURAS Y CONSTRUCCIÓN</SectionTitle>
        <SectionContent>
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

        <SectionTitle>💬 COMUNICACIÓN</SectionTitle>
        <SectionContent>
          <ul>
            <li>Usa el chat con educación.</li>
            <li>No spam, no publicidad, no enlaces sospechosos.</li>
          </ul>
        </SectionContent>

        <SectionTitle>🛡️ PVP / PVE</SectionTitle>
        <SectionContent>
          <ul>
            <li>El servidor es PvE.</li>
          </ul>
        </SectionContent>

        <SectionTitle>⚠️ SEGURIDAD</SectionTitle>
        <SectionContent>
          <ul>
            <li>No exploits, hacks, duplicaciones ni uso de bugs para obtener ventaja.</li>
            <li>Cualquier intento de dañar el servidor o a otros jugadores será motivo de expulsión.</li>
            <li>Prohibido arrastrar hordas hacia otros jugadores o sus bases.</li>
            <li>No pasar con moto/coche arrastrando zombis hacia otra persona.</li>
            <li>No provocar que una horda cambie de objetivo hacia otro jugador.</li>
            <li>No usar hordas para molestar, matar o perjudicar.</li>
            <li>Si no tienes base antihordas, no pases hordas por delante de otras bases.</li>
            <li>
              Si no puedes aguantar la horda: sal del servidor antes de que empiece (Tampoco salgas 5 minutos antes si no hay mas players online).
            </li>
          </ul>
        </SectionContent>

        <SectionTitle>🆘 SOPORTE</SectionTitle>
        <SectionContent>
          <p>
            Si encuentras un problema, o bug, debes reportarlo
            <strong> SIEMPRE mediante un ticket en Discord</strong>, en la sección correspondiente.
            La administración revisará cada caso y lo solucionará a la mayor brevedad posible.
          </p>

          <h4>🧩 Bugs de misiones</h4>
          <ul>
            <li>
              Si una misión no se puede completar porque no aparecen los zombis, no detecta el área
              o aparece cualquier tipo de error, seguramente es un bug del propio juego.
            </li>
            <li>La administración revisará este tipo de misiones una o dos veces como máximo.</li>
            <li>Si vuelve a ocurrir, deberás cancelar la misión y coger otra distinta.</li>
          </ul>

          <h4>🛠️ Bugs generales</h4>
          <ul>
            <li>Todos los bugs deben ser reportados exclusivamente mediante ticket.</li>
            <li>No se atenderán reportes por privado, chat general o mensajes sueltos.</li>
            <li>Incluye siempre: qué pasó, dónde, cuándo y si es posible, captura o vídeo.</li>
          </ul>

          <h4>🎨 Decoración, objetos para eventos y solicitudes especiales</h4>
          <ul>
            <li>Para pedir decoración, o ayuda con estructuras, usa la sección correspondiente en Discord.</li>
            <li>Cualquier miembro del staff podrá ayudarte.</li>
          </ul>

          <h4>🔫 Armas del mod</h4>
          <ul>
            <li>Algunas armas del mod indican que no están terminadas o pueden causar errores.</li>
            <li>Se recomienda NO usarlas.</li>
            <li>
              Si un jugador las usa igualmente y provocan bugs o pérdidas, la administración NO se hace responsable.
            </li>
          </ul>
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

  {/* 🌍 MUNDO */}
  <SectionTitle>🌍 MUNDO</SectionTitle>
  <SectionContent>
    <ul>
      <li>Tipo: RWG</li>
      <li>Nombre: <strong>South Culalisa Territory</strong></li>
      <li>Seed: <strong>programacion</strong></li>
      <li>Tamaño: <strong>8192 (8K)</strong></li>
      <li>Modo: Supervivencia</li>
      <li>Dificultad: <strong>Aventurero (Fácil)</strong></li>
    </ul>
  </SectionContent>

  {/* 💥 DAÑOS Y PROGRESO */}
  <SectionTitle>💥 DAÑOS Y PROGRESO</SectionTitle>
  <SectionContent>
    <ul>
      <li>Daño a distancia: 150%</li>
      <li>Daño cuerpo a cuerpo: 150%</li>
      <li>Daño recibido por el jugador: 75%</li>
      <li>Daño jugador → bloques: 100%</li>
      <li>Daño IA → bloques: 100%</li>
      <li>Daño IA Luna de Sangre: 100%</li>
      <li>Multiplicador de disparo a la cabeza: 100%</li>
      <li>XP multiplicada: 100%</li>
      <li>Modo de detección IA por olfato: Corre, corre</li>
    </ul>
  </SectionContent>

  {/* 🌧️ TIEMPO Y CLIMA */}
  <SectionTitle>🌧️ TIEMPO Y CLIMA</SectionTitle>
  <SectionContent>
    <ul>
      <li>Duración del día: 60 min</li>
      <li>Horas de luz: 18 h</li>
      <li>Progresión de biomas: Activada</li>
      <li>Tormentas: Ninguna</li>
      <li>Alerta de tormenta: ----</li>
      <li>Sensibilidad del mapa de calor: Predeterminado</li>
    </ul>
  </SectionContent>

  {/* 💀 MUERTE Y RESPAWN */}
  <SectionTitle>💀 MUERTE Y RESPAWN</SectionTitle>
  <SectionContent>
    <ul>
      <li>Potenciador de nuevo jugador: Sí</li>
      <li>Pérdida al morir: Solo mochila</li>
      <li>Degradación por muerte: Durabilidad</li>
      <li>Soltar al morir: Solo mochila</li>
      <li>Penalización por morir: Ninguno</li>
      <li>Objetos perdidos al morir: 1–3</li>
      <li>Degradación por muerte: 20%</li>
      <li>Soltar al salir: Nada</li>
    </ul>
  </SectionContent>

  {/* 🛏️ RESPAWN Y CAMAS */}
  <SectionTitle>🛏️ RESPAWN Y CAMAS</SectionTitle>
  <SectionContent>
    <ul>
      <li>Zona muerta: 15 bloques</li>
      <li>Expiración: 45 días</li>
      <li>Cerca de amigos: Solo bosque</li>
      <li>Cerca de mochila: Activado</li>
    </ul>
  </SectionContent>

  {/* 🎥 CÁMARA */}
  <SectionTitle>🎥 CÁMARA</SectionTitle>
  <SectionContent>
    <ul>
      <li>Vista libre entre 1ª y 3ª persona</li>
    </ul>
  </SectionContent>

  {/* 🧟 SPAWN ENEMIGOS / ANIMALES */}
  <SectionTitle>🧟 SPAWN ENEMIGOS / ANIMALES</SectionTitle>
  <SectionContent>
    <ul>
      <li>Aparición de enemigos: Sí</li>
      <li>Densidad día enemigos: Predeterminado</li>
      <li>Densidad día animales: Predeterminado</li>
      <li>Densidad noche enemigos: Predeterminado</li>
      <li>Densidad noche animales: Predeterminado</li>
      <li>Reaparición día enemigos: Predeterminado</li>
      <li>Reaparición día animales: Predeterminado</li>
      <li>Reaparición noche enemigos: Predeterminado</li>
      <li>Reaparición noche animales: Predeterminado</li>
      <li>Zombis: 80</li>
      <li>Animales: 50</li>
      <li>Visión: 8</li>
      <li>Malla: 1000</li>
    </ul>
  </SectionContent>

  {/* 🔥 COMPORTAMIENTO ZOMBI */}
  <SectionTitle>🔥 COMPORTAMIENTO ZOMBI</SectionTitle>
  <SectionContent>
    <ul>
      <li>Velocidad día zombi: Corre, corre (Jog)</li>
      <li>Velocidad noche zombi: Esprintar (Sprint)</li>
      <li>Velocidad salvaje: Esprintar</li>
      <li>Velocidad luna de sangre: Esprintar</li>
      <li>Sentido salvaje: Deshabilitado</li>
      <li>Furia zombi: 15%</li>
      <li>Zombis comen animales: Sí</li>
      <li>Excavación de zombis: No</li>
      <li>Frecuencia Luna de Sangre: 14 días</li>
      <li>Recuento Luna de Sangre: 10 enemigos</li>
      <li>Advertencia: Mañana</li>
    </ul>
  </SectionContent>

  {/* 📦 LOOT Y EVENTOS */}
  <SectionTitle>📦 LOOT Y EVENTOS</SectionTitle>
  <SectionContent>
    <ul>
      <li>Calidad máxima de botín: Predeterminado</li>
      <li>Días de respawn del loot: 7 días</li>
      <li>Probabilidad bolsa de botín: 75%</li>
      <li>Loot general: 85%</li>
      <li>Loot comida: 85%</li>
      <li>Loot bebidas: 85%</li>
      <li>Loot medicinas: 75%</li>
      <li>Loot munición: 75%</li>
      <li>Loot armaduras: 75%</li>
      <li>Loot armas distancia: 75%</li>
      <li>Loot armas melee: 85%</li>
      <li>Loot recursos: 85%</li>
      <li>Loot moneda: 85%</li>
      <li>Loot libros: 65%</li>
      <li>Respawn: 15 días</li>
      <li>Airdrops: 72 h</li>
      <li>Marcador: Off</li>
      <li>XP compartida: 500 bloques</li>
    </ul>
  </SectionContent>

  {/* ⚔️ PVP / PVE */}
  <SectionTitle>⚔️ PVP / PVE</SectionTitle>
  <SectionContent>
    <ul>
      <li>PvE (No Killing)</li>
    </ul>
  </SectionContent>

  {/* 🏠 LAND CLAIM */}
  <SectionTitle>🏠 LAND CLAIM</SectionTitle>
  <SectionContent>
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
