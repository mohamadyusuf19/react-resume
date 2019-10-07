import React from "react";
import "./tagheader.css";

const TagHeader = ({ text, icon }) => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center"
        }}
      >
        <p className="sidebar-text-tag" style={{ marginBottom: -3 }}>
          {icon}
        </p>
        <p className="sidebar-text-tag">{text}</p>
      </div>
      <div className="line-tag" />
    </div>
  );
};

export default TagHeader;
