import React from "react";
import { CardProps } from "@types";
import "./Card.scss";

function Card({
  children,
  className = "",
  title,
}: CardProps): React.ReactElement {
  return (
    <div className={("card " + className).trim()}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}

export default Card;
