import React from "react";
import "./button.css";

const Button = ({ text, type, disabled, onClick }) => {
  return (
    <button
      className="button"
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      <p className="text-button">{text}</p>
    </button>
  );
};

export default Button;
