import React from "react";
import Card from "../components/Card";
import ModItem from "../components/ModItem";
import SectionContent from "../components/SectionContent";
import PageHeader from "../components/PageHeader";

export default function Mods(): React.ReactElement {
  const mantenimiento = false;

  if (mantenimiento) {
    return (
      <div className="container">
        <div className="survival-card-red" style={{ textAlign: "center", padding: "40px 20px", marginTop: "120px" }}>
          <h1 className="bloody-title">🚧 Página en Mantenimiento 🚧</h1>
          <div className="bloody-separator"></div>

          <p style={{ fontSize: "1.2rem", opacity: 0.9 }}>
            Estamos actualizando esta sección.  
            <br />
            Vuelve más tarde para ver los mods instalados en el servidor.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <PageHeader title="Mods Instalados" />

      {/* BLOQUE ÉPICO DE INTRO */}
      <div className="epic-block-container">
        <div className="epic-block-line"></div>
        <div className="epic-block-content">
          <h3>Información Importante</h3>
          <p>
            Antes de instalar los mods, asegúrate de borrar tu carpeta anterior
            para evitar conflictos. Todos los mods están probados y optimizados
            para el servidor PvE de El Último Amanecer.
          </p>
        </div>
        <div className="epic-block-line"></div>
      </div>

      <Card className="survival-card-red">
        {/* DESCARGA */}
        <h2 className="bloody-title">📥 Descarga de Mods</h2>
        <div className="bloody-separator"></div>

        <p className="mods-download">
          <strong>Descárgalos aquí:</strong><br />
          🔗{" "}
          <a
            href="https://drive.google.com/file/d/1al8GVgtTHtmb-hEUWLGRxrGn-M02MNiL/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="twitch-link"
          >
            Drive (Carpeta principal)
          </a>
        </p>

        <div className="survival-card-red" style={{ marginTop: "20px" }}>
          <p>
            Tenéis que borrar la carpeta <strong>Mods</strong> anterior.
          </p>
          <p>
            Y tal cual se os descarga en el PC, la extraéis en vuestra carpeta:
          </p>
          <p className="code">
            C:\Program Files (x86)\Steam\steamapps\common\7 Days To Die
          </p>
        </div>

        {/* 🔥 MODS ELIMINADOS */}
        <h2 className="bloody-title" style={{ marginTop: "30px" }}>🔥 Mods Eliminados</h2>
        <div className="bloody-separator"></div>

        <div className="survival-card-red">
          <ul className="no-bullets">
            <li style={{ textDecoration: "line-through", color: "#b33" }}>
              izygunpack (Solo armas melee y modelos nuevos)
            </li>
            <li style={{ textDecoration: "line-through", color: "#b33" }}>
              izygunpack (Eliminada la patada)
            </li>
            <li style={{ textDecoration: "line-through", color: "#b33" }}>
              Oakraven Chicken Coops
            </li>
          </ul>
        </div>

        {/* SEPARADOR */}
        <div className="bloody-separator" style={{ margin: "25px 0" }}></div>

        {/* LISTA DE MODS */}
        <h2 className="bloody-title">📦 Lista de Mods Actuales</h2>
        <div className="bloody-separator"></div>

        <div className="grid">
          <ModItem title="BdubsVehicles" href="https://7daystodiemods.com/bdubs-vehicles/">
            Más diseños de vehículos
          </ModItem>

          <ModItem title="GNS_BeautifulBases" href="https://www.nexusmods.com/7daystodie/mods/3318">
            Permite recoger ítems de decoración para vuestras bases
          </ModItem>

          <ModItem title="OcbStopFuelWaste" href="https://www.nexusmods.com/7daystodie/mods/1884">
            Evita que se consuma todo el combustible cuando no hay nada en cola
          </ModItem>

          <ModItem
            title="IZY-All in One Gun Pack v5.1"
            href="https://www.nexusmods.com/7daystodie/mods/5458"
          >
            Nuevas armas para todas las habilidades
          </ModItem>

          <ModItem title="Little Red Sonja Zombie Pack" href="https://www.nexusmods.com/7daystodie/mods/7573">
            Pack de zombies personalizados
          </ModItem>

          <ModItem title="Horn Opens Doors" href="https://www.nexusmods.com/7daystodie/mods/8041">
            Permite abrir las puertas tocando el claxon del vehículo
          </ModItem>

          <ModItem title="LittleRedSonja Mumpfy ArmorPack01DangerGirls" href="https://www.nexusmods.com/7daystodie/mods/7344">
            Cosméticos añadidos
          </ModItem>

          <ModItem title="LittleRedSonja and Mumpfy ArmorPack02 VanillaReVamp" href="https://www.nexusmods.com/7daystodie/mods/7377">
            Cosméticos añadidos
          </ModItem>

          <ModItem title="LittleRedSonja and Mumpfy ArmorPack03 Some Traders" href="https://www.nexusmods.com/7daystodie/mods/7440">
            Cosméticos añadidos
          </ModItem>

          <ModItem title="LittleRedSonja and Mumpfy ArmorPack04 GNS Armors" href="https://www.nexusmods.com/7daystodie/mods/7758">
            Cosméticos añadidos
          </ModItem>

          <ModItem title="LittleRedSonja and Mumpfy ArmorPack06 Resident Evil" href="https://www.nexusmods.com/7daystodie/mods/8466">
            Cosméticos añadidos
          </ModItem>

          <ModItem title="LittleRedSonja and Mumpfy ArmorPack07 The Walking Dead" href="https://www.nexusmods.com/7daystodie/mods/8662">
            Cosméticos añadidos
          </ModItem>

          <ModItem title="LittleRedSonja and Mumpfy ArmorPack09 - Fallout" href="https://www.nexusmods.com/7daystodie/mods/9489">
            Cosméticos añadidos
          </ModItem>

          <ModItem title="LittleRedSonja and Mumpfy ArmorPack08 Goofy Time" href="https://www.nexusmods.com/7daystodie/mods/8929">
            Cosméticos añadidos
          </ModItem>

          <ModItem title="Drone Lock To Player" href="https://www.nexusmods.com/7daystodie/mods/6817">
            Coloca el dron detrás del player como si fuese una mochila
          </ModItem>

          <ModItem title="Quick Stack modeado por SixtoST" href="https://www.nexusmods.com/7daystodie/mods/1357">
            Meter objetos en cajas sin abrirlas
          </ModItem>

          <ModItem title="Partes legendarias crafteables" href="https://www.nexusmods.com/7daystodie/mods/7602">
            Se pueden craftear partes legendarias
          </ModItem>

          <ModItem title="Añade decoración" href="https://www.nexusmods.com/7daystodie/mods/1242">
            Para tener tu propia cocina del Ikea :D
          </ModItem>

          <ModItem title="Quest POI Preview" href="https://www.nexusmods.com/7daystodie/mods/8631">
            Imagen referencial del POI para misiones
          </ModItem>

          <ModItem title="Crafting Preview Stats" href="https://www.nexusmods.com/7daystodie/mods/10232">
            Añade estadísticas del objeto a craftear
          </ModItem>

          <ModItem title="Fluffy Panda POI Pack" href="https://7daystodiemods.com/fluffy-panda-poi-pack/">
            Añade más POIs
          </ModItem>

          <ModItem title="Pyro Paints" href="https://www.nexusmods.com/7daystodie/mods/5836">
            Añade más pinturas
          </ModItem>

          <ModItem title="Have you read this" href="https://www.nexusmods.com/7daystodie/mods/9696">
            Info sobre compañeros y libros leídos
          </ModItem>
        </div>
      </Card>

      {/* AGRADECIMIENTOS */}
      <Card className="thanks-card">
        <h2>💖 Agradecimientos</h2>
        <SectionContent>
          <p>Gracias a todos los creadores de mods por su trabajo y dedicación.</p>
          <p>Sin ellos, este servidor no sería lo mismo.</p>
        </SectionContent>
      </Card>
    </div>
  );
}
