import React from "react";
import PageHeader from "../components/PageHeader";

export default function Bot(): React.ReactElement {
  return (
    <div className="container">
      <PageHeader title="Bot del Servidor" />

      <div className="card">
        <h2>¿Qué hace nuestro bot?</h2>
        <p>
          El bot del servidor está conectado directamente al mundo de 7 Days to
          Die y desde discord os permite:
        </p>
        <ul>
          <li>📢 Verificar el estado del servidor</li>
          <li>🧟 Mostrar la info del servidor</li>
          <li>📊 Estadísticas del server</li>
          <li>👥 Mostrar jugadores conectados</li>
          <li>⚙️ Consejos mineros</li>
        </ul>
      </div>

      <div className="card">
        <h2>Comandos disponibles</h2>
        <ul>
          <li>
            <strong>!status</strong> — Muestra el estado del servidor
          </li>
          <li>
            <strong>!players</strong> — Lista de jugadores online
          </li>
          <li>
            <strong>!ranking</strong> — Ranking global de jugadores
          </li>
          <li>
            <strong>!player NombreJugador</strong> — Saca las stats de ese
            jugador
          </li>
          <li>
            <strong>!stats</strong> - Muestra las estadísticas del servidor
          </li>
        </ul>
      </div>

      <div className="card">
        <h2>🔧 Próximas mejoras del bot</h2>
        <ul>
          <li>📡 Alertas automáticas de hordas</li>
          <li>📊 Estadísticas avanzadas por jugador</li>
          <li>⏳ Contador de tiempo para el próximo wipe</li>
        </ul>
      </div>

      <div className="card">
        <h2>👨‍💻 Créditos del bot</h2>
        <p>
          <strong>Desarrollado por:</strong>
        </p>
        <p style={{ margin: "10px 0" }}>
          <a
            href="https://steamcommunity.com/profiles/76561198298033682/"
            target="_blank"
            rel="noreferrer"
            style={{
              color: "#ff4d4d",
              fontSize: 20,
              fontWeight: "bold",
              textDecoration: "none",
            }}
          >
            ⭐ Fran23135 ⭐
          </a>
        </p>
        <p>Miembro de la comunidad y creador oficial del bot del servidor.</p>
      </div>
    </div>
  );
}
