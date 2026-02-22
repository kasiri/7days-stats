import React, { useMemo, useState } from "react";
import PageHeader from "../components/PageHeader";
import useRankingData from "../hooks/useRankingData";
import type { Player } from "@types";
import Loader from "../components/Loader";

function sortData(
  data: Player[],
  column: keyof Player,
  ascending: boolean,
): Player[] {
  const copy = [...data];
  copy.sort((a, b) => {
    const A = a[column];
    const B = b[column];
    const numA = parseFloat(String(A));
    const numB = parseFloat(String(B));
    if (!isNaN(numA) && !isNaN(numB))
      return ascending ? numA - numB : numB - numA;
    return ascending
      ? String(A).localeCompare(String(B))
      : String(B).localeCompare(String(A));
  });
  return copy;
}

export default function Ranking(): React.ReactElement {
  const {
    data: raw,
    isLoading,
    hasError,
    isRetrying,
    retry,
  } = useRankingData();
  const [sortColumn, setSortColumn] = useState<keyof Player>("level");
  const [ascending, setAscending] = useState<boolean>(false);

  const sorted = useMemo(
    () => sortData(raw, sortColumn, ascending),
    [raw, sortColumn, ascending],
  );

  const podium = sorted.slice(0, 3);

  return (
    <div className="container">
      <PageHeader title="Ranking de Jugadores" />

      {isLoading ? (
        <div className="card">
          <Loader text="Cargando ranking..." />
        </div>
      ) : hasError ? (
        <div className="card">
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
        </div>
      ) : (
        <>
          <div id="podio" className="podio-container">
            {podium.map((p, i) => (
              <div
                key={p.name || i}
                className={`podio-item ${i === 0 ? "oro" : i === 1 ? "plata" : "bronce"}`}
              >
                <div className="puesto">
                  {i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}
                </div>
                <div className="nombre">{p.name}</div>
                <div className="nivel">Nivel {p.level}</div>
              </div>
            ))}
          </div>

          <div className="card">
            <table className="table">
              <thead>
                <tr>
                  <th
                    onClick={() => {
                      setSortColumn("name");
                      setAscending((prev) =>
                        sortColumn === "name" ? !prev : false,
                      );
                    }}
                  >
                    Jugador
                  </th>
                  <th
                    onClick={() => {
                      setSortColumn("level");
                      setAscending((prev) =>
                        sortColumn === "level" ? !prev : false,
                      );
                    }}
                  >
                    Nivel
                  </th>
                  <th
                    onClick={() => {
                      setSortColumn("zombies");
                      setAscending((prev) =>
                        sortColumn === "zombies" ? !prev : false,
                      );
                    }}
                  >
                    Zombies
                  </th>
                  <th
                    onClick={() => {
                      setSortColumn("deaths");
                      setAscending((prev) =>
                        sortColumn === "deaths" ? !prev : false,
                      );
                    }}
                  >
                    Muertes
                  </th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((p, idx) => (
                  <tr
                    key={p.name}
                    style={{
                      color:
                        p.level >= 60
                          ? "#ff4d4d"
                          : p.level >= 40
                            ? "#b266ff"
                            : p.level >= 20
                              ? "#4da6ff"
                              : "#66ff66",
                    }}
                  >
                    <td>
                      {(idx === 0
                        ? "🥇 "
                        : idx === 1
                          ? "🥈 "
                          : idx === 2
                            ? "🥉 "
                            : "") + p.name}
                    </td>
                    <td>{p.level}</td>
                    <td>{p.zombies}</td>
                    <td>{p.deaths}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
