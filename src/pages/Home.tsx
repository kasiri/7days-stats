import React from "react";
import useRotatingTip from "../hooks/useRotatingTip";
import useStats from "../hooks/useStats";
import Card from "../components/Card";
import SectionTitle from "../components/SectionTitle";
import PageHeader from "../components/PageHeader";
import Loader from "../components/Loader";
import { DEFAULT_TIPS } from "@/config/tips";

export default function Home(): React.ReactElement {
  const tip = useRotatingTip(DEFAULT_TIPS, 8000);
  const { stats, isLoading, hasError, isRetrying, retry } = useStats();

  return (
    <div>
      <div className="container">
        <PageHeader title="EL ÚLTIMO AMANECER" />
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
                <p>
                  Día actual: <span>{stats.day}</span>
                </p>
                <p>
                  Hora del servidor: <span>{stats.time}</span>
                </p>
                <p>
                  Próxima horda: <span>{stats.nextHordeDay}</span>
                </p>
                <p>
                  Tiempo restante: <span>{stats.nextHordeIn}</span>
                </p>
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
                <p>
                  Total: <span>{stats.players.length}</span>
                </p>
                <div>
                  {stats.players.map((p) => (
                    <p key={p.name}>
                      👤 {p.name} — ⭐ {p.level}
                    </p>
                  ))}
                </div>
              </>
            )}
          </Card>
        </div>

        <SectionTitle>🏠 Bases de los Jugadores</SectionTitle>

        <div className="mini-slider-container">
          <div className="mini-slider" id="miniSlider">
            <img src="images/base1.jpg" alt="Base 1" />
            <img src="images/base2.jpg" alt="Base 2" />
          </div>
        </div>
      </div>
    </div>
  );
}
