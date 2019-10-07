import React from "react";
import "./wrapper.css";

const Wrapper = ({ onSubmit, children }) => {
  return (
    <form className="form-wrapper" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Wrapper;
