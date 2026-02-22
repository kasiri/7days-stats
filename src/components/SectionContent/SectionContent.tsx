import React from "react";
import { SectionContentProps } from "@types";
import "./SectionContent.scss";

export default function SectionContent({
  children,
  className = "",
}: SectionContentProps): React.ReactElement {
  return (
    <div className={("section-content " + className).trim()}>{children}</div>
  );
}
