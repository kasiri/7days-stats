import React from "react";
import PageHeader from "../components/PageHeader";

export default function Bot(): React.ReactElement {
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
            Vuelve más tarde.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <PageHeader title="🤖 Bot del Servidor" />

      {/* BLOQUE ÉPICO */}
      <div className="epic-block-container" style={{ marginBottom: "35px" }}>
        <div className="epic-block-line"></div>

        <div className="epic-block-content">
          <h3>El Vigilante del Mundo</h3>
          <p>
            Nuestro bot está conectado directamente al servidor de 7 Days to Die.  
            Observa, analiza y responde en tiempo real para ayudarte a sobrevivir.
          </p>
          <p>
            Desde Discord podrás consultar información vital, pedir ayuda,  
            enviar tickets y participar en eventos dinámicos.
          </p>
        </div>

        <div className="epic-block-line"></div>
      </div>

      {/* QUÉ HACE EL BOT */}
      <div className="card survival-card-red">
        <h2 className="bloody-title">📡 ¿Qué hace nuestro bot?</h2>
        <div className="bloody-separator"></div>

        <p>
          El bot del servidor está conectado directamente al mundo de 7 Days to Die y desde Discord os permite:
        </p>

        <ul className="no-bullets">
          <li>📢 Verificar el estado del servidor</li>
          <li>🧟 Mostrar la info del servidor</li>
          <li>📊 Estadísticas del server</li>
          <li>👥 Mostrar jugadores conectados</li>
          <li>⚙️ Consejos mineros</li>
          <li>🎫 Enviar tickets para reportar bugs o problemas</li>
          <li>🎮 Juegos dinámicos dentro de Discord</li>
          <li>🪑 Pedir ítems de decoración permitidos</li>
          <li>🔔 Aviso cuando un streamer del servidor inicia directo</li>
        </ul>
      </div>

      {/* COMANDOS */}
      <div className="card survival-card-red">
        <h2 className="bloody-title">⌨️ Comandos disponibles</h2>
        <div className="bloody-separator"></div>

        <ul className="no-bullets">
          <li><strong>!status</strong> — Muestra el estado del servidor</li>
          <li><strong>!players</strong> — Lista de jugadores online</li>
          <li><strong>!ranking</strong> — Ranking global de jugadores</li>
          <li><strong>!player NombreJugador</strong> — Saca las stats de ese jugador</li>
          <li><strong>!stats</strong> — Muestra las estadísticas del servidor</li>
        </ul>
      </div>

      {/* MEJORAS */}
      <div className="card survival-card-red">
        <h2 className="bloody-title">🔧 Próximas mejoras del bot</h2>
        <div className="bloody-separator"></div>

        <ul className="no-bullets">
          <li>📡 Alertas automáticas de hordas</li>
          <li>📊 Estadísticas avanzadas por jugador</li>
          <li>⏳ Contador de tiempo para el próximo wipe</li>
        </ul>
      </div>

      {/* CRÉDITOS */}
      <div className="card survival-card-red">
        <h2 className="bloody-title">👨‍💻 Créditos del bot</h2>
        <div className="bloody-separator"></div>

        <p><strong>Desarrollado por:</strong></p>

        <p style={{ margin: "10px 0" }}>
          <a
            href="https://steamcommunity.com/profiles/76561198298033682/"
            target="_blank"
            rel="noreferrer"
            className="twitch-link"
            style={{ fontSize: 20, fontWeight: "bold" }}
          >
            ⭐ Fran23135 ⭐
          </a>
        </p>

        <p>Miembro de la comunidad y creador oficial del bot del servidor.</p>
      </div>
    </div>
  );
}
