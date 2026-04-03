import React from "react";
import Card from "../components/Card";
import ModItem from "../components/ModItem";
import SectionContent from "../components/SectionContent";
import PageHeader from "../components/PageHeader";

export default function Mods(): React.ReactElement {
  // ⬅️ CAMBIA ESTO A false PARA VOLVER A MOSTRAR LA PÁGINA NORMAL
  const mantenimiento = true;

  // ⛔ MODO MANTENIMIENTO
  if (mantenimiento) {
    return (
      <div className="container" style={{ textAlign: "center", padding: "80px 20px" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          🚧 Página en Mantenimiento 🚧
        </h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.8 }}>
          Estamos actualizando esta sección.  
          Vuelve más tarde para ver los mods instalados en el servidor.
        </p>
      </div>
    );
  }

  // ✅ TU PÁGINA ORIGINAL (INTACTA)
  return (
    <div className="container">
      <PageHeader title="Mods Instalados" />

      <Card className="mods-card">
        <p className="mods-download">
          📥 <strong>Descárgalos aquí:</strong>{" "}
          <a
            href="https://e.pcloud.link/publink/show?code=kZiGFGZ7Rwp6ws8D8m8wDnMYzHmLmD739IV"
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

        <ModItem
          title="IZY-All in One Gun Pack v5.1"
          href="https://www.nexusmods.com/7daystodie/mods/5458"
        >
          Nuevas armas para todas las habilidades
        </ModItem>

        <ModItem
          title="Little Red Sonja Zombie Pack"
          href="https://www.nexusmods.com/7daystodie/mods/7573"
        >
          Pack de zombies personalizados
        </ModItem>

        <ModItem
          title="Horn Opens Doors"
          href="https://www.nexusmods.com/7daystodie/mods/8041"
        >
          Permite abrir las puertas tocando el claxon del vehículo
        </ModItem>

        <ModItem
          title="Oakraven Chicken Coops"
          href="https://www.nexusmods.com/7daystodie/mods/5051"
        >
          Permite críar pollitos para conseguir huevos
        </ModItem>

        <ModItem
          title="LittleRedSonja Mumpfy ArmorPack01DangerGirls"
          href="https://www.nexusmods.com/7daystodie/mods/7344"
        >
          Cosméticos añadidos
        </ModItem>

        <ModItem
          title="LittleRedSonja and Mumpfy ArmorPack02 VanillaReVamp"
          href="https://www.nexusmods.com/7daystodie/mods/7377"
        >
          Cosméticos añadidos
        </ModItem>

        <ModItem
          title="LittleRedSonja and Mumpfy ArmorPack03 Some Traders"
          href="https://www.nexusmods.com/7daystodie/mods/7440"
        >
          Cosméticos añadidos
        </ModItem>

        <ModItem
          title="LittleRedSonja and Mumpfy ArmorPack04 GNS Armors"
          href="https://www.nexusmods.com/7daystodie/mods/7758"
        >
          Cosméticos añadidos
        </ModItem>

        <ModItem
          title="LittleRedSonja and Mumpfy ArmorPack06 Resident Evil"
          href="https://www.nexusmods.com/7daystodie/mods/8466"
        >
          Cosméticos añadidos
        </ModItem>

        <ModItem
          title="LittleRedSonja and Mumpfy ArmorPack07 The Walking Dead"
          href="https://www.nexusmods.com/7daystodie/mods/8662"
        >
          Cosméticos añadidos
        </ModItem>

        <ModItem
          title="LittleRedSonja and Mumpfy ArmorPack09 - Fallout"
          href="https://www.nexusmods.com/7daystodie/mods/9489"
        >
          Cosméticos añadidos
        </ModItem>

        <ModItem
          title="Drone Lock To Player"
          href="https://www.nexusmods.com/7daystodie/mods/6817"
        >
          Coloca el dron detrás del player como si fuese una mochila, y así no molesta
        </ModItem>

        <ModItem
          title="Asylum Smart Storage"
          href="https://www.nexusmods.com/7daystodie/mods/7624"
        >
          Creas un cofre, en el que vacías todo tu loot, y se coloca en tus cofres cercanos perfectamente ordenado
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
