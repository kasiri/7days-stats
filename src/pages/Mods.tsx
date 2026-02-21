import React from "react";
import Card from "../components/Card";
import ModItem from "../components/ModItem";
import SectionContent from "../components/SectionContent";
import PageHeader from "../components/PageHeader";

export default function Mods(): React.ReactElement {
  return (
    <div className="container">
      <PageHeader title="Mods Instalados" />

      <Card className="mods-card">
        <p className="mods-download">
          📥 <strong>Descárgalos aquí:</strong>{" "}
          <a
            href="https://u.pcloud.link/publink/show?code=XZex4K5ZyQqXvo4188kcVKNGPIE5nXChJbLk"
            target="_blank"
            rel="noreferrer"
          >
            Haz clic aquí
          </a>
        </p>

        <ModItem
          title="BdubsVehicles"
          href="https://7daystodiemods.com/bdubs-vehicles/"
        >
          Más diseños de vehículos
        </ModItem>
        <ModItem
          title="GNS_BeautifulBases"
          href="https://www.nexusmods.com/7daystodie/mods/3318"
        >
          Permite recoger ítems de decoración para vuestras bases
        </ModItem>
        <ModItem
          title="OcbStopFuelWaste"
          href="https://www.nexusmods.com/7daystodie/mods/1884"
        >
          Evita que se consuma todo el combustible cuando no hay nada en cola
        </ModItem>
      </Card>

      <Card className="thanks-card">
        <h2>💖 Agradecimientos</h2>
        <SectionContent>
          <p>
            Gracias a todos los creadores de mods por su trabajo y dedicación.
          </p>
          <p>Sin ellos, este servidor no sería lo mismo.</p>
        </SectionContent>
      </Card>
    </div>
  );
}
