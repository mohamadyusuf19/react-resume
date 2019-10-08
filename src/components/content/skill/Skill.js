import React from "react";
import Input from "../../form/input/Input";
import Wrapper from "../../form/wrapper/Wrapper";
import Button from "../../form/button/Button";
import { Formik } from "formik";

const Data = [
  {
    label: "HTML",
    key: "html"
  },
  {
    label: "CSS",
    key: "css"
  },
  {
    label: "JavaScript",
    key: "js"
  }
];

const Skill = ({ onSubmitValues, redirect, onClickBack }) => {
  return (
    <Formik
      initialValues={{
        html: "",
        css: "",
        js: ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        onSubmitValues(values);
        redirect();
        setSubmitting(false);
      }}
    >
      {formikProps => {
        return (
          <Wrapper onSubmit={formikProps.handleSubmit}>
            <p className="text-header-form">Ketrampilan</p>
            {Data.map((item, i) => {
              return (
                <div style={{ width: "80vh" }} key={i}>
                  <Input
                    label={item.label}
                    formikProps={formikProps}
                    formikKey={item.key}
                  />
                </div>
              );
            })}
            <div className="separate-button">
              <Button text="Kembali" onClick={onClickBack} />
              <Button
                text="Selesai"
                type="submit"
                disabled={formikProps.isSubmitting}
              />
            </div>
          </Wrapper>
        );
      }}
    </Formik>
  );
};

export default Skill;
