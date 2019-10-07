import React from "react";
import "./Logo.css";

const Logo = ({ src, alt }) => {
  return (
    <div className="logo-preview">
      <img src={src} alt={alt} className="avatar-preview" />
    </div>
  );
};

export default Logo;
