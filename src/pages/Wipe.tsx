import React from "react";
import useCountdown from "../hooks/useCountdown";
import Card from "../components/Card";
import FeatureList from "../components/FeatureList";
import SectionContent from "../components/SectionContent";
import PageHeader from "../components/PageHeader";
//import SectionTitle from "../components/SectionTitle";

export default function Wipe(): React.ReactElement {
  const countdown = useCountdown("2026-04-04T18:00:00");

  return (
    <div className="wipe-wrapper">
      <PageHeader title="🔥 Wipe del Servidor" />
      

      <Card className="wipe-small-card">
        <h2>📅 Próximo Wipe</h2>
        <SectionContent>
          <p className="wipe-date">4 de abril de 2026</p>
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
              "🌍 Mapa completamente nuevo, diferente..",
              "🏠 Bases desde cero con diferentes eventos.",
              "⚙️ Ajustes de dificultad mejorados.",
              "🎉 Nuevos eventos especiales y dinámicos durante lo que dure el server."
            ]}
          />
        </SectionContent>
      </Card>

      <div className="wipe-quote-small">
        <p>“Recuerda que cada wipe es una nueva oportunidad para sobrevivir.”</p>
      </div>
    </div>
  );
}
