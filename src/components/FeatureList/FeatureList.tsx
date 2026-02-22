import React from "react";
import { FeatureListProps } from "@types";
import "./FeatureList.scss";

export default function FeatureList({
  items = [],
}: FeatureListProps): React.ReactElement {
  return (
    <ul className="feature-list">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}
