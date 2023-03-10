import React, { Children, PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
  title?: string;
}

import "./style.scss";

export const Card: React.FC<CardProps> = ({
  title = "...",
  children = null,
}) => {
  return (
    <div className="card-container">
      <h2>{title}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Card;
