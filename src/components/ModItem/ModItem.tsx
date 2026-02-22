import React from "react";
import { ModItemProps } from "@types";
import "./ModItem.scss";

export default function ModItem({
  title,
  children,
  href,
  hrefText,
}: ModItemProps): React.ReactElement {
  return (
    <div className="mod-item">
      <p>
        🧱 <strong>{title}</strong> — {children}
        {href && (
          <>
            <br />
            🔗{" "}
            <a href={href} target="_blank" rel="noreferrer">
              {hrefText || "Página oficial del mod"}
            </a>
          </>
        )}
      </p>
    </div>
  );
}
