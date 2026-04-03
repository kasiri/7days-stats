import React from "react";
import useRotatingTip from "../hooks/useRotatingTip";
import useStats from "../hooks/useStats";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import Loader from "../components/Loader";
import { DEFAULT_TIPS } from "@/config/tips";
import { images } from "@/data/images";

export default function Home(): React.ReactElement {
  const tip = useRotatingTip(DEFAULT_TIPS, 8000);
  const { stats, isLoading, hasError, isRetrying, retry } = useStats();

  // ⬅️ CAMBIA ESTO A false PARA QUITAR EL AVISO
  const servidorCerrado = true;

  // Seleccionar UNA imagen por grupo para el inicio
  const groupsShown = new Set();
  const featured = images
    .filter((img) => {
      if (groupsShown.has(img.group)) return false;
      groupsShown.add(img.group);
      return true;
    })
    .slice(0, 6);

  // AUTO‑SLIDE del mini‑slider
  React.useEffect(() => {
    const slider = document.getElementById("miniSlider");
    if (!slider) return;

    let index = 0;
    const interval = setInterval(() => {
      if (!slider) return;

      index = (index + 1) % featured.length;
      const width = slider.children[0]?.clientWidth || 200;

      slider.scrollTo({
        left: width * index,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [featured]);

  return (
    <div>
      <div className="container">

        {/* 🚧 AVISO DE SERVIDOR CERRADO */}
        {servidorCerrado && (
          <div
            style={{
              background: "#8b0000",
              color: "white",
              padding: "20px",
              borderRadius: "8px",
              marginBottom: "25px",
              textAlign: "center",
              fontSize: "1.2rem",
              fontWeight: "bold",
            }}
          >
            🚧 El servidor está cerrado hasta el próximo wipe.  
            <br />
            <a
              href="#/wipe"
              style={{
                color: "white",
                textDecoration: "underline",
                fontSize: "1.1rem",
              }}
            >
              Ver información del wipe →
            </a>
          </div>
        )}

        <p className="page-subtitle-main"></p>

        <div className="tips-banner">
          <div className="tips-text">{tip}</div>
        </div>

        <div className="grid">
          <Card>
            <h2>Estado del Mundo</h2>
            {isLoading ? (
              <Loader text="Cargando estado del mundo..." />
            ) : hasError ? (
              <div className="alert-red">
                En estos momentos no podemos acceder a los datos
                <div>
                  <button
                    className="retry-btn"
                    onClick={retry}
                    disabled={isRetrying}
                  >
                    {isRetrying ? "Reintentando..." : "Reintentar ahora"}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p>Día actual: <span>{stats.day}</span></p>
                <p>Hora del servidor: <span>{stats.time}</span></p>
                <p>Próxima horda: <span>{stats.nextHordeDay}</span></p>
                <p>Tiempo restante: <span>{stats.nextHordeIn}</span></p>
              </>
            )}
          </Card>

          <Card>
            <h2>Jugadores Online</h2>
            {isLoading ? (
              <Loader text="Cargando jugadores..." />
            ) : hasError ? (
              <div className="alert-red">
                En estos momentos no podemos acceder a los datos
                <div>
                  <button
                    className="retry-btn"
                    onClick={retry}
                    disabled={isRetrying}
                  >
                    {isRetrying ? "Reintentando..." : "Reintentar ahora"}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <p>Total: <span>{stats.players.length}</span></p>
                <div>
                  {stats.players.map((p) => (
                    <p key={p.name}>👤 {p.name} — ⭐ {p.level}</p>
                  ))}
                </div>
              </>
            )}
          </Card>
        </div>

        <SectionTitle>🏠 Bases de los Jugadores</SectionTitle>

        <div className="mini-slider-container">
          <div className="mini-slider" id="miniSlider">
            {featured.map((img) => (
              <img key={img.src} src={img.src} alt={img.alt} />
            ))}
          </div>
        </div>

        <div className="bases-button-container">
          <a href="#/bases" className="bases-button">
            Ver galería completa →
          </a>
        </div>
      </div>
    </div>
  );
}
