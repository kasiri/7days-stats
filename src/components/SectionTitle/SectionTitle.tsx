import React from "react";
import { SectionTitleProps } from "@types";
import "./SectionTitle.scss";

export default function SectionTitle({
  children,
  className = "",
}: SectionTitleProps): React.ReactElement {
  return <h2 className={`section-title ${className}`.trim()}>{children}</h2>;
}
