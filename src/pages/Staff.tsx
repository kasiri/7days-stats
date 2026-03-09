import React from "react";
import PageHeader from "../components/PageHeader";

export default function Staff(): React.ReactElement {
  return (
    <div className="container">
      <PageHeader title="Equipo del Servidor" />

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

      {/* BLOQUE ÉPICO */}
      <div className="epic-block-container">
        <div className="epic-block-line"></div>

        <div className="epic-block-content">
          <h3>💗 Agradecimiento Especial</h3>

          <p>
            Este proyecto no solo está construido con código, sino con personas que aportan
            su tiempo, su energía y su pasión.
          </p>

          <p>
            Por eso queremos dar las gracias a <strong>Kheile</strong>, cuya ayuda en la
            administración de la web ha sido esencial.
          </p>

          <p>
            Ha hecho que todo sea más fácil, ha resuelto problemas antes de que aparecieran
            y ha compartido conocimientos que nos han permitido crecer.
          </p>

          <p>
            Gracias por tu dedicación, tu apoyo y por enseñarnos tanto.  
            Este amanecer es un poco más brillante gracias a ti.
          </p>
        </div>

        <div className="epic-block-line"></div>
      </div>

    </div>
  );
}
