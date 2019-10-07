import React from "react";
import "./card.css";

const Card = ({ children, id }) => {
  return (
    <div className="card" id={id}>
      {children}
    </div>
  );
};

export default Card;
