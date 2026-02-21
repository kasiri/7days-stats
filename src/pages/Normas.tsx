import React from "react";
import SectionTitle from "../components/SectionTitle";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import SectionContent from "../components/SectionContent";

export default function Normas(): React.ReactElement {
  return (
    <div className="container">
      <PageHeader title="📜 Normas del Servidor" h1ClassName="normas-title" />

      <Card className="normas-card">
        <h2 className="bloody-title">🌟 REGLAS DE LA COMUNIDAD</h2>

        <SectionTitle>🤝 RESPETO</SectionTitle>
        <SectionContent>
          <ul>
            <li>
              No se permiten insultos, acoso, toxicidad ni faltas de respeto.
            </li>
            <li>
              Cualquier comportamiento hostil hacia otros jugadores será
              sancionado.
            </li>
          </ul>
        </SectionContent>

        <SectionTitle>🎒 PROPIEDAD Y SAQUEO</SectionTitle>
        <SectionContent>
          <ul>
            <li>
              Prohibido robar objetos, recursos o pertenencias de otros
              jugadores.
            </li>
            <li>
              No está permitido aprovecharse de bases, trampas o estructuras
              creadas por otros.
            </li>
          </ul>
        </SectionContent>

        <SectionTitle>🧱 ESTRUCTURAS Y CONSTRUCCIÓN</SectionTitle>
        <SectionContent>
          <ul>
            <li>No destruyas construcciones ajenas.</li>
            <li>No bloquees accesos, traders o zonas importantes del mapa.</li>
          </ul>
        </SectionContent>

        <SectionTitle>💬 COMUNICACIÓN</SectionTitle>
        <SectionContent>
          <ul>
            <li>Usa el chat con educación.</li>
            <li>No spam, no publicidad, no enlaces sospechosos.</li>
          </ul>
        </SectionContent>

        <div className="bloody-separator" />

        <SectionTitle>🆘 SOPORTE</SectionTitle>
        <SectionContent>
          <p>
            Si encuentras un problema, bug o caída del servidor, avisa a la
            administración:
          </p>
          <p>
            <strong>@Kasiri @what_a_caramel @OQ49</strong>
          </p>
        </SectionContent>
      </Card>

      <div className="bloody-separator" />

      <Card className="normas-card">
        <h2 className="bloody-title">
          ⚙️ CONFIGURACIÓN DEL SERVER – 7 DAYS TO DIE
        </h2>
        <p>
          <strong>🚫 ENTRAD SIN EASY ANTICHEAT</strong> — Igual que para
          instalar los mods. Ejecutad <strong>7dLauncher.exe</strong> para
          iniciar sin anticheat.
        </p>

        <SectionTitle>🌍 MUNDO</SectionTitle>
        <SectionContent>
          <ul>
            <li>Tipo: RWG</li>
            <li>
              Nombre: <strong>WestDepowukuTerritory</strong>
            </li>
            <li>
              Seed: <strong>KazurriMeoFran</strong>
            </li>
          </ul>
        </SectionContent>
      </Card>
    </div>
  );
}
