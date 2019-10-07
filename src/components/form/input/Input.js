import React from "react";
import "./input.css";

const Input = ({ label, formikProps, formikKey }) => {
  const formInput = {
    border: "solid 1px #e6e7eb",
    height: "20px",
    padding: "8px",
    borderRadius: "5px",
    marginTop: "8px",
    width: "80vh"
  };

  if (formikProps.touched[formikKey] && formikProps.errors[formikKey]) {
    formInput.border = "solid 1px red";
  }

  return (
    <div>
      <p style={styles.label}>{label}</p>
      <input
        type="text"
        onChange={formikProps.handleChange(formikKey)}
        style={formInput}
      />
      <p style={styles.alert}>
        {formikProps.touched[formikKey] && formikProps.errors[formikKey]}
      </p>
    </div>
  );
};

const styles = {
  alert: {
    color: "red",
    marginBottom: "20px",
    marginTop: 8
  },
  label: {
    color: "#555756"
  }
};

export default Input;
