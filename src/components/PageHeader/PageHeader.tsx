import React from "react";
import { PageHeaderProps } from "@types";
import "./PageHeader.scss";

export default function PageHeader({
  title,
  className = "",
  h1ClassName = "",
}: PageHeaderProps): React.ReactElement {
  return (
    <div className={("page-header " + className).trim()}>
      <h1 className={("page-title " + h1ClassName).trim()}>{title}</h1>
    </div>
  );
}
