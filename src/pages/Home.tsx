import React from "react";
import { Link } from "react-router-dom";
import useStats from "../hooks/useStats";

export default function Home(): React.ReactElement {
  const { stats, isLoading } = useStats();

  return (
    <div className="container home-wrapper">

      {/* BARRA DE CONSEJOS */}
      <div className="tips-banner-home">
        💡 Consejo: Revisa la Guía del Superviviente antes de entrar al servidor.
      </div>

      {/* HERO ÉPICO */}
      <div className="hero-epic">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">El Último Amanecer</h1>
          <p className="hero-subtitle">
            Servidor PvE español — supervivencia, comunidad y caos controlado.
          </p>

          <div className="hero-buttons">
            <Link to="/nuevos" className="hero-btn primary">
              🧭 Guía del Superviviente
            </Link>
            <Link to="/mods" className="hero-btn secondary">
              🧩 Mods del Servidor
            </Link>
            <Link to="/bases" className="hero-btn secondary">
              🏠 Bases de Jugadores
            </Link>
          </div>

          {/* PANEL DE ESTADO INTEGRADO */}
          <div className="hero-status-card">
            {isLoading ? (
              <p>Cargando estado del mundo...</p>
            ) : (
              <>
                <p>🌅 Día actual: <strong>{stats.day}</strong></p>
                <p>🕒 Hora del servidor: <strong>{stats.time}</strong></p>
                <p>🧟 Próxima horda: <strong>{stats.nextHordeDay}</strong></p>
                <p>⏳ Tiempo restante: <strong>{stats.nextHordeIn}</strong></p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* SEPARADOR */}
      <div className="bloody-separator"></div>

      {/* SECCIÓN BASES DESTACADAS */}
      <div className="epic-block-container">
        <div className="epic-block-line"></div>

        <div className="epic-block-content">
          <h3>🏠 Bases Destacadas</h3>
          <p>
            La creatividad de la comunidad brilla incluso en un mundo en ruinas.
          </p>

          <Link to="/bases" className="hero-btn primary">
            🔍 Ver Galería de Bases
          </Link>
        </div>

        <div className="epic-block-line"></div>
      </div>

      {/* SEPARADOR */}
      <div className="bloody-separator"></div>

      {/* SECCIÓN COMUNIDAD */}
      <div className="epic-block-container">
        <div className="epic-block-line"></div>

        <div className="epic-block-content">
          <h3>💬 Comunidad</h3>
          <p>
            Únete al refugio, comparte tus aventuras y mantente al día con los eventos.
          </p>

          <div className="community-buttons">
            <Link to="/bot" className="hero-btn primary">
              🤖 Bot del Servidor
            </Link>

            <Link to="/staff" className="hero-btn secondary">
              🛡️ Equipo del Servidor
            </Link>

            <Link to="/normas" className="hero-btn secondary">
              📜 Normas del Servidor
            </Link>

            <a
              href="https://discord.gg/"
              target="_blank"
              rel="noreferrer"
              className="hero-btn secondary"
            >
              💬 Discord
            </a>
          </div>
        </div>

        <div className="epic-block-line"></div>
      </div>

      {/* SEPARADOR */}
      <div className="bloody-separator"></div>

      {/* CIERRE ÉPICO */}
      <div className="epic-block-container">
        <div className="epic-block-line"></div>

        <div className="epic-block-content">
          <h3>🌅 El amanecer es solo el principio</h3>
          <p>
            Sobrevive un día más.  
            Construye. Explora. Lucha.  
            Y recuerda: en este mundo, cada amanecer es una victoria.
          </p>
        </div>

        <div className="epic-block-line"></div>
      </div>
    </div>
  );
}
