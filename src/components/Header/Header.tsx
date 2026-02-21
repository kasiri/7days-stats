import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const routes = [
  { to: "/", label: "Inicio" },
  { to: "/stats", label: "Estado" },
  { to: "/ranking", label: "Ranking" },
  { to: "/mods", label: "Mods" },
  { to: "/staff", label: "Staff" },
  { to: "/wipe", label: "Wipe" },
  { to: "/normas", label: "Normas" },
  { to: "/nuevos", label: "Guía" },
  { to: "/bot", label: "Bot" },
  { to: "/bases", label: "Bases" },
];

export default function Header(): React.ReactElement {
  return (
    <header className="navbar">
      <div className="logo">EL ÚLTIMO AMANECER</div>
      <p className="nav-subtitle">Servidor PvE — Comunidad Española — 24/7</p>
      <nav>
        {routes.map((r) => (
          <Link key={r.to} to={r.to} style={{ marginRight: 10 }}>
            {r.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
