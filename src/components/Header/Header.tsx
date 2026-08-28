import React, { useState } from "react";
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

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar-7dtd">
      <div className="navbar-inner">
        <div className="logo">EL ÚLTIMO AMANECER</div>

        <button className="menu-toggle" onClick={() => setOpen(!open)}>
          ☰
        </button>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {routes.map((r) => (
            <Link key={r.to} to={r.to}>
              {r.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
