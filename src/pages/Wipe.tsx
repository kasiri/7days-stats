import React from "react";
import useCountdown from "../hooks/useCountdown";
import Card from "../components/Card";
import FeatureList from "../components/FeatureList";
import SectionContent from "../components/SectionContent";
import PageHeader from "../components/PageHeader";
//import SectionTitle from "../components/SectionTitle";

export default function Wipe(): React.ReactElement {
  const countdown = useCountdown("2026-03-13T00:00:00");

  return (
    <div className="wipe-wrapper">
      <PageHeader title="🔥 Wipe del Servidor" />
      

      <Card className="wipe-small-card">
        <h2>📅 Próximo Wipe</h2>
        <SectionContent>
          <p className="wipe-date">13 de marzo de 2026</p>
          <p>Un nuevo mundo está por comenzar.</p>
        </SectionContent>
      </Card>

      <Card className="wipe-small-card">
        <h2>⏳ Cuenta atrás</h2>
        <p className="wipe-countdown">{countdown}</p>
      </Card>

      <Card className="wipe-small-card">
        <h2>🔥 ¿Qué traerá el nuevo mundo?</h2>
        <SectionContent>
          <FeatureList
            items={[
              "🌍 Mapa completamente limpio",
              "🏠 Bases desde cero",
              "⚙️ Ajustes de dificultad mejorados",
            ]}
          />
        </SectionContent>
      </Card>

      <div className="wipe-quote-small">
        <p>“Cada Wipe es una nueva oportunidad para sobrevivir.”</p>
      </div>
    </div>
  );
}
