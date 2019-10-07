import React from "react";

const TextHeader = ({ text, icon }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <p className="sidebar-text">{icon}</p>
        <p className="sidebar-text">{text}</p>
      </div>
      <div className="line" />
    </div>
  );
};

export default TextHeader;
