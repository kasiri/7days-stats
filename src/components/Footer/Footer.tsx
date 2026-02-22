import React from "react";
import "./Footer.scss";

export default function Footer(): React.ReactElement {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2026 El Último Amanecer — Comunidad 7 Days to Die</p>
        <div className="footer-links">
          <a
            href="https://discord.gg/SaZdsmvJsg"
            target="_blank"
            rel="noreferrer"
          >
            💬 Discord
          </a>
          <a
            href="https://twitter.com/Kasiri93"
            target="_blank"
            rel="noreferrer"
          >
            🐦 Twitter
          </a>
          <a href="https://twitch.tv/Kasiri" target="_blank" rel="noreferrer">
            🎮 Twitch
          </a>
          <a
            href="https://www.youtube.com/@kasiri93"
            target="_blank"
            rel="noreferrer"
          >
            🎮 Youtube
          </a>
        </div>
      </div>
    </footer>
  );
}
