import React from "react";
import useCountdown from "../hooks/useCountdown";
import Card from "../components/Card";
import SectionContent from "../components/SectionContent";
import PageHeader from "../components/PageHeader";

export default function Wipe(): React.ReactElement {
  const countdown = useCountdown("2026-05-03T16:45:00");

  return (
    <div className="wipe-wrapper">
      <PageHeader title="🔥 Wipe del Servidor" />

      {/* BLOQUE ÉPICO DE INTRO */}
      <div className="epic-block-container">
        <div className="epic-block-line"></div>

        <div className="epic-block-content">
          <h3>Un nuevo amanecer se acerca</h3>
          <p>
            Cada wipe trae un mundo renovado, nuevas oportunidades y desafíos
            que pondrán a prueba tu habilidad para sobrevivir.
          </p>
        </div>

        <div className="epic-block-line"></div>
      </div>

      {/* FECHA DEL WIPE */}
      <Card className="wipe-small-card">
        <h2 className="bloody-title">📅 Próximo Wipe</h2>
        <div className="bloody-separator"></div>

        <SectionContent>
          <p className="wipe-date">Mediados de Septiembre de 2026</p>
          <p>Un nuevo mundo está por comenzar.</p>
        </SectionContent>
      </Card>

      {/* CUENTA ATRÁS */}
      <Card className="wipe-small-card">
        <h2 className="bloody-title">⏳ Cuenta atrás</h2>
        <div className="bloody-separator"></div>

        <p className="wipe-countdown">{countdown}</p>
      </Card>

      {/* LISTA DE CAMBIOS — SIN PUNTOS */}
      <Card className="wipe-small-card">
        <h2 className="bloody-title">🔥 ¿Qué traerá el nuevo mundo?</h2>
        <div className="bloody-separator"></div>

        <SectionContent>
          <div className="wipe-list">
            <p>🌍 Mapa completamente nuevo</p>
            <p>🏠 Bases desde cero con diferentes eventos.</p>
            <p>⚙️ Ajustes de dificultad mejorados.</p>
            <p>🎉 Nuevos eventos especiales y dinámicos durante lo que dure el server.</p>
            <p>🛠️ Nuevo staff.</p>
          </div>
        </SectionContent>
      </Card>

      {/* FRASE ÉPICA */}
      <div className="wipe-quote-small">
        <p>“Recuerda que cada wipe es una nueva oportunidad para sobrevivir.”</p>
      </div>
    </div>
  );
}
