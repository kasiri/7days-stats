import React from "react";
import PageHeader from "../components/PageHeader";

export default function Staff(): React.ReactElement {
  return (
    <div className="container">
      <PageHeader title="Equipo del Servidor" />

      <h2 className="section-title">Administración</h2>

      <div className="staff-row">
        <div className="staff-card">
          <a
            href="https://steamcommunity.com/id/kasiri93/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://avatars.fastly.steamstatic.com/25d04b901dfc91c7584f4346eaadc1f29343b92e_full.jpg"
              className="staff-avatar"
              alt="Kasiri"
            />
          </a>
          <h3>👑 Kasiri</h3>
          <p>
            Owner — Administración - Mantenimiento Técnico y Web - Moderador
          </p>
          <div className="twitch-center">
            <a
              href="https://twitch.tv/Kasiri"
              target="_blank"
              rel="noreferrer"
              className="twitch-btn"
            >
              🎮 Twitch
            </a>
          </div>
        </div>

        <div className="staff-card">
          <a
            href="https://steamcommunity.com/id/OQ49/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://avatars.fastly.steamstatic.com/75d33ccdf6fa42690b11932b881f562b51ef4203_full.jpg"
              className="staff-avatar"
              alt="OQ49"
            />
          </a>
          <h3>⚒️ OQ49</h3>
          <p>Administración — Gestión de Mods - Moderador</p>
          <div className="twitch-center">
            <a
              href="https://twitch.tv/oq49"
              target="_blank"
              rel="noreferrer"
              className="twitch-btn"
            >
              🎮 Twitch
            </a>
          </div>
        </div>

        <div className="staff-card">
          <a
            href="https://steamcommunity.com/profiles/76561198298033682/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://avatars.fastly.steamstatic.com/403ab2b6c9446827bf339d6c30524ac65554ac38_full.jpg"
              className="staff-avatar"
              alt="Fran23135"
            />
          </a>
          <h3>⚙️ Fran23135</h3>
          <p>Desarrollador — Creador del Bot de Discord - Moderador</p>
        </div>

        <div className="staff-card">
          <a
            href="https://steamcommunity.com/id/Neo89/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://avatars.fastly.steamstatic.com/0c9bdea45a4daf271baa099ae7a4302038c1d950_full.jpg"
              className="staff-avatar"
              alt="Neo"
            />
          </a>
          <h3>🔧 Neo</h3>
          <p>Moderador</p>
        </div>
      </div>
    </div>
  );
}
