import React from "react";
import PageHeader from "../components/PageHeader";
import useStats from "../hooks/useStats";
import Loader from "../components/Loader";

export default function Stats(): React.ReactElement {
  const { stats, isLoading, hasError, isRetrying, retry } = useStats();

  return (
    <div className="container">
      <PageHeader title="Estado del Mundo" />

      <div className="card">
        <h2>Información del Servidor</h2>
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
