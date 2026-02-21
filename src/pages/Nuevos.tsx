import React from "react";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import SectionContent from "../components/SectionContent";
import PageHeader from "../components/PageHeader";

export default function Nuevos(): React.ReactElement {
  function copyIP(): void {
    const ip = "kasiriserver.servegame.com:26900";
    if (navigator.clipboard) navigator.clipboard.writeText(ip);
    else alert(ip);
    alert("IP copiada al portapapeles");
  }

  return (
    <div className="container">
      <PageHeader title="Guía para Nuevos Jugadores" />

      <div className="alert-red">
        ⚠️ <strong>IMPORTANTE:</strong> Antes de abrir el juego debes instalar
        los mods del servidor.
        <br />
        <br />
        👉 Descarga los mods aquí: <a href="/mods">🧩 Página de Mods</a>
      </div>

      <Card>
        <h2>1. Instalación de Mods (OBLIGATORIO)</h2>
        <SectionContent>
          <p>1. Descarga los mods desde nuestra página.</p>
          <p>
            2. Extrae la carpeta <strong>Mods</strong> en la ruta de instalación
            del juego.
          </p>
        </SectionContent>
      </Card>

      <Card>
        <h2>2. Cómo entrar al servidor</h2>
        <SectionContent>
          <p>
            Nuestro servidor <strong>NO aparece en el buscador</strong>, debes
            añadirlo manualmente.
          </p>
          <div className="copy-box">
            <span id="serverIP">kasiriserver.servegame.com:26900</span>
            <button onClick={copyIP}>📋 Copiar IP</button>
          </div>
        </SectionContent>
      </Card>

      <SectionTitle>
        🧭 Consejos para Principiantes en 7 Days to Die
      </SectionTitle>
      <p className="intro-text">
        Si es tu primer wipe o tu primera partida, estos consejos te ayudarán a
        sobrevivir y avanzar.
      </p>

      <div className="cards-container">
        <Card className="consejo-card">
          <h3>📘 Completa el tutorial inicial</h3>
          <p>Te da herramientas básicas...</p>
        </Card>
        <Card className="consejo-card">
          <h3>🏠 No uses tu primera casa como base de horda</h3>
        </Card>
        <Card className="consejo-card">
          <h3>🧱 Construye una base sencilla al principio</h3>
        </Card>
      </div>
    </div>
  );
}
