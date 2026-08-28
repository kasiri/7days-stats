import React from "react";
import PageHeader from "../components/PageHeader";
import useStats from "../hooks/useStats";
import Loader from "../components/Loader";

export default function Stats(): React.ReactElement {
  const { stats, isLoading, hasError, isRetrying, retry } = useStats();

  return (
    <div className="container">
      {/* Título principal */}
      <PageHeader title="Estado del Mundo" />

      {/* Tarjeta principal */}
      <div className="card survival-card-red" style={{ marginTop: "25px" }}>
        <h2 className="bloody-title">Información del Servidor</h2>
        <div className="bloody-separator"></div>

        {isLoading ? (
          <Loader text="Cargando datos del servidor..." />
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
              Día actual: <span id="day">{stats.day}</span>
            </p>
            <p>
              Hora del servidor: <span id="time">{stats.time}</span>
            </p>
            <p>
              Próxima horda: <span id="hordeDay">{stats.nextHordeDay}</span>
            </p>
            <p>
              Tiempo restante: <span id="hordeIn">{stats.nextHordeIn}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
