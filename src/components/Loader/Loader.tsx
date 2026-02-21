import React from "react";
import "./Loader.scss";

type LoaderProps = {
  text?: string;
};

export default function Loader({
  text = "Cargando datos...",
}: LoaderProps): React.ReactElement {
  return (
    <div className="loader" role="status" aria-live="polite">
      <span className="loader-spinner" aria-hidden="true" />
      <span className="loader-text">{text}</span>
    </div>
  );
}
