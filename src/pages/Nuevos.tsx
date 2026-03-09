import React from "react";
import SectionTitle from "../components/SectionTitle";
import SectionContent from "../components/SectionContent";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

export default function Nuevos(): React.ReactElement {
  function copyIP(): void {
    const ip = "kasiriserver.servegame.com:26900";
    if (navigator.clipboard) navigator.clipboard.writeText(ip);
    else alert(ip);
    alert("IP copiada al portapapeles");
  }

  return (
    <div className="container">
      <PageHeader title="Bienvenido Superviviente" />

      {/* BLOQUE ÉPICO DE INTRO */}
      <div className="epic-block-container">
        <div className="epic-block-line"></div>

        <div className="epic-block-content">
          <h3>🌅 El Último Amanecer</h3>
          <p>
            Has despertado en un mundo que ya no pertenece a los vivos.  
            Las ciudades están en ruinas, la noche trae horrores, y cada amanecer  
            es un regalo que pocos llegan a ver.
          </p>

          <p>
            Pero no estás solo.  
            Has llegado a <strong>El Último Amanecer</strong>, un refugio donde la comunidad  
            se mantiene unida frente al caos.  
            Tu historia empieza aquí.
          </p>
        </div>

        <div className="epic-block-line"></div>
      </div>

      {/* ALERTA IMPORTANTE */}
      <div className="alert-red">
        ⚠️ <strong>IMPORTANTE:</strong> Antes de abrir el juego debes instalar
        los mods del servidor.
        <br /><br />
        👉 Descarga los mods aquí: <Link to="/mods">🧩 Página de Mods</Link>
      </div>

      <div className="bloody-separator"></div>

      {/* PUNTO 1 */}
      <SectionTitle>🛠️ Preparativos Antes de Entrar</SectionTitle>
      <SectionContent className="no-gap">
        <div className="survival-card-red no-bullets">
          <p>
            Antes de poner un pie en este mundo devastado, debes asegurarte de que tu equipo
            está listo. Un superviviente mal preparado no dura mucho ahí fuera.
          </p>

          <p><strong>1. Instalación de Mods (OBLIGATORIO)</strong></p>
          <ul>
            <li>
              Descarga los mods desde aquí:{" "}
              <Link to="/mods">🧩 Página de Mods</Link>
            </li>
            <li>
              Extrae la carpeta <strong>Mods</strong> en la ruta de instalación del juego (Desde steam, en vuestra biblioteca buscad el 7 days - Click derecho - Administrar - Ver archivos locales, y copias el contenido del archivo (extraído) en la carpeta mods).
            </li>
          </ul>

          <p>
            Solo entonces estarás preparado para cruzar la frontera hacia El Último Amanecer.
          </p>
        </div>
      </SectionContent>

      <div className="bloody-separator"></div>

      {/* PUNTO 2 */}
      <SectionTitle>🚪 Cruzando la Frontera</SectionTitle>
      <SectionContent>

        <div className="epic-block-container">
          <div className="epic-block-line"></div>

          <div className="epic-block-content">
            <p>
              Nuestro servidor no aparece en el buscador.  
              Como todo refugio seguro, permanece oculto a los ojos de los incautos.
            </p>

            <p>Para entrar, debes hacerlo manualmente:</p>

            <p><strong>Dirección del servidor:</strong></p>
            <p><code>kasirisserver.servegame.com:26900</code></p>
            <button onClick={copyIP}>📋 Copiar IP</button>

            <p>
              Introduce la IP, respira hondo… y da tu primer paso hacia la supervivencia.
            </p>
          </div>

          <div className="epic-block-line"></div>
        </div>

      </SectionContent>

      <div className="bloody-separator"></div>

      {/* PUNTO 3 — TARJETAS NUEVAS SIN HUECO */}
      <SectionTitle>🔥 Lecciones para Sobrevivir</SectionTitle>

      <SectionContent>
        <p>
          El mundo que estás a punto de recorrer no perdona errores.  
          Aprende estas lecciones y vivirás un día más.
        </p>

        <div className="staff-row">

          <div className="lesson-card no-bullets">
            <h3>📘 Completa el Tutorial Inicial</h3>
            <ul>
              <li>Coloca tu cama para fijar tu punto de respawn.</li>
              <li>Reúne materiales básicos: madera, piedra y fibra.</li>
              <li>Fabrica tus primeras herramientas.</li>
              <li>Busca un refugio para pasar la primera noche.</li>
            </ul>
          </div>

          <div className="lesson-card no-bullets">
            <h3>🏠 No Uses tu Primera Casa como Base de Horda</h3>
            <ul>
              <li>Las hordas ocurren cada 7 días.</li>
              <li>La dificultad aumenta con el tiempo.</li>
              <li>Recomendamos tener una base lista antes del Día 7.</li>
              <li>Puedes ver el tiempo restante en el Dashboard.</li>
            </ul>
          </div>

          <div className="lesson-card no-bullets">
            <h3>🧱 Construye una Base Sencilla al Principio</h3>
            <ul>
              <li>Evita ciudades grandes los primeros días.</li>
              <li>No construyas en ningún bioma que no sea el bosque de pino inicial.</li>
              <li>Guarda munición para la horda.</li>
              <li>Juega con amigos para avanzar más rápido.</li>
              <li>El servidor tiene una dificultad más alta de lo normal: no te preocupes si mueres.</li>
              <li>Si necesitas ayuda, pídela. La comunidad está para apoyarte.</li>
            </ul>
          </div>

        </div>

        {/* BLOQUE ÉPICO FINAL */}
        <div className="epic-block-container">
          <div className="epic-block-line"></div>

          <div className="epic-block-content no-bullets">

            <h3>🩸 La Sangre Llama a la Sangre</h3>
            <ul>
              <li>Los zombis te escuchan, te huelen y te sienten.</li>
              <li>Evita hacer ruido innecesario.</li>
              <li>Las armas de fuego atraen más problemas de los que resuelven.</li>
              <li>Cierra siempre las puertas detrás de ti.</li>
            </ul>

            <h3>🌑 La Noche No Es Tu Aliada</h3>
            <ul>
              <li>Quédate bajo techo siempre que puedas.</li>
              <li>Si debes salir, muévete despacio y sin luz.</li>
            </ul>

            <h3>🧭 El Mapa Es Tu Mejor Amigo</h3>
            <ul>
              <li>Marca traders, refugios y zonas de loot.</li>
              <li>No te alejes sin provisiones.</li>
              <li>Perderse es morir lentamente.</li>
            </ul>

            <h3>🔧 Repara, Repara, Repara</h3>
            <ul>
              <li>Una herramienta rota no sirve para nada.</li>
              <li>Un arma rota te mata más rápido que un zombi.</li>
            </ul>

            <h3>🧱 Construye con Cabeza</h3>
            <ul>
              <li>Refuerza esquinas y puertas.</li>
              <li>Una trampa bien colocada vale más que diez muros.</li>
            </ul>

            <h3>🧪 La Enfermedad También Mata</h3>
            <ul>
              <li>Lleva antibióticos o miel, vendas y agua limpia.</li>
              <li>No comas nada que no reconozcas.</li>
              <li>Si te infectas, actúa rápido...</li>
            </ul>

            <h3>🧍‍♀️ No Estás Sola</h3>
            <ul>
              <li>Pide ayuda cuando la necesites.</li>
              <li>Comparte recursos si te sobran.</li>
              <li>Un aliado vale más que cien balas.</li>
            </ul>

            <p>
              Estas no son simples recomendaciones.  
              Son las reglas no escritas que mantienen con vida a quienes caminan bajo este cielo rojo.
            </p>

          </div>

          <div className="epic-block-line"></div>
        </div>

      </SectionContent>
    </div>
  );
}
