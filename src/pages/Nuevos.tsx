import React from "react";
import SectionTitle from "../components/SectionTitle";
import SectionContent from "../components/SectionContent";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

export default function Nuevos(): React.ReactElement {
  function copyIP(): void {
    const ip = "kasiriserver.servegame.com:26900";
    navigator.clipboard?.writeText(ip);
    alert("IP copiada al portapapeles");
  }

  return (
    <div className="container">

      {/* HERO PEQUEÑO */}
      <div className="hero-epic" style={{ minHeight: "260px", marginTop: "40px" }}>
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">Bienvenido Superviviente</h1>
          <p className="hero-subtitle">
            Esta guía te ayudará a sobrevivir tus primeras horas en El Último Amanecer.
          </p>
        </div>
      </div>

      <div className="bloody-separator"></div>

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
        ⚠️ <strong>IMPORTANTE:</strong> Antes de abrir el juego debes instalar los mods del servidor.
        <br /><br />
        👉 Descarga los mods aquí: <Link to="/mods">🧩 Página de Mods</Link>
      </div>

      <div className="bloody-separator"></div>

      {/* PUNTO 1 */}
      <SectionTitle>🛠️ Preparativos Antes de Entrar</SectionTitle>
      <SectionContent>
        <div className="survival-card-red no-bullets">
          <p>
            Antes de poner un pie en este mundo devastado, asegúrate de que tu equipo está listo.
            Un superviviente mal preparado no dura mucho ahí fuera.
          </p>

          <p><strong>1. Instalación de Mods (OBLLIGATORIO)</strong></p>

          <p>Descarga los mods desde aquí: <Link to="/mods">🧩 Página de Mods</Link></p>
          <p>Extrae la carpeta <strong>Mods</strong> en la ruta de instalación del juego.</p>

          <p>Solo entonces estarás preparado para cruzar la frontera hacia El Último Amanecer.</p>
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
            <p><code>kasiriserver.servegame.com:26900</code></p>

            <button onClick={copyIP} className="hero-btn primary" style={{ marginTop: "10px" }}>
              📋 Copiar IP
            </button>

            <p>
              Introduce la IP, respira hondo… y da tu primer paso hacia la supervivencia.
            </p>
          </div>

          <div className="epic-block-line"></div>
        </div>
      </SectionContent>

      <div className="bloody-separator"></div>

      {/* PUNTO 3 */}
      <SectionTitle>🔥 Lecciones para Sobrevivir</SectionTitle>
      <SectionContent>
        <p>
          El mundo que estás a punto de recorrer no perdona errores.  
          Aprende estas lecciones y vivirás un día más.
        </p>

        {/* TARJETAS PRINCIPALES */}
        <div className="staff-row">

          <div className="lesson-card">
            <h3>📘 Completa el Tutorial Inicial</h3>
            <p>Coloca tu cama para fijar tu punto de respawn.</p>
            <p>Reúne materiales básicos: madera, piedra y fibra.</p>
            <p>Fabrica tus primeras herramientas.</p>
            <p>Busca un refugio para pasar la primera noche.</p>
          </div>

          <div className="lesson-card">
            <h3>🏠 No Uses tu Primera Casa como Base de Horda</h3>
            <p>Las hordas ocurren cada 7 días.</p>
            <p>La dificultad aumenta con el tiempo.</p>
            <p>Ten una base lista antes del Día 7.</p>
            <p>Puedes ver el tiempo restante en el Dashboard.</p>
          </div>

          <div className="lesson-card">
            <h3>🧱 Construye una Base Sencilla</h3>
            <p>Evita ciudades grandes los primeros días.</p>
            <p>Quédate en el bioma de bosque de pino.</p>
            <p>Guarda munición para la horda.</p>
            <p>Juega con amigos para avanzar más rápido.</p>
            <p>La dificultad es alta: no te preocupes si mueres.</p>
            <p>Si necesitas ayuda, pídela.</p>
          </div>

        </div>

        {/* BLOQUE ÉPICO DE CONSEJOS ANCHO */}
        <div className="epic-block-container">
          <div className="epic-block-line"></div>

          <div className="epic-block-content-wide">

            <h3>🩸 La Sangre Llama a la Sangre</h3>
            <p>Los zombis te escuchan, te huelen y te sienten.</p>
            <p>Evita hacer ruido innecesario.</p>
            <p>Las armas de fuego atraen más problemas de los que resuelven.</p>
            <p>Cierra siempre las puertas detrás de ti.</p>

            <h3>🌑 La Noche No Es Tu Aliada</h3>
            <p>Quédate bajo techo siempre que puedas.</p>
            <p>Si debes salir, muévete despacio y sin luz.</p>

            <h3>🗺️ El Mapa Es Tu Mejor Amigo</h3>
            <p>Marca traders, refugios y zonas de loot.</p>
            <p>No te alejes sin provisiones.</p>
            <p>Perderse es morir lentamente.</p>

            <h3>🔧 Repara, Repara, Repara</h3>
            <p>Una herramienta rota no sirve para nada.</p>
            <p>Un arma rota te mata más rápido que un zombi.</p>

            <h3>🧱 Construye con Cabeza</h3>
            <p>Refuerza esquinas y puertas.</p>
            <p>Una trampa bien colocada vale más que diez muros.</p>

            <h3>🧪 La Enfermedad También Mata</h3>
            <p>Lleva antibióticos o miel, vendas y agua limpia.</p>
            <p>No comas nada que no reconozcas.</p>
            <p>Si te infectas, actúa rápido...</p>

            <h3>🧍‍♀️ No Estás Sola</h3>
            <p>Pide ayuda cuando la necesites.</p>
            <p>Comparte recursos si te sobran.</p>
            <p>Un aliado vale más que cien balas.</p>

            <p style={{ marginTop: "20px" }}>
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
