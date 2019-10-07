import React from "react";
import Input from "../../form/input/Input";
import Wrapper from "../../form/wrapper/Wrapper";
import Button from "../../form/button/Button";
import { Formik } from "formik";

const Data = [
  {
    label: "Pengalaman Kerja",
    key: "kerja"
  }
];

const Experience = ({ onSubmitValues, redirect, onClickBack }) => {
  return (
    <Formik
      initialValues={{
        kerja: ""
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
            <p className="text-header-form">Pengalaman</p>
            {Data.map((item, i) => {
              return (
                <Input
                  key={i}
                  label={item.label}
                  formikProps={formikProps}
                  formikKey={item.key}
                />
              );
            })}
            <div className="separate-button">
              <Button text="Kembali" onClick={onClickBack} />
              <Button
                text="Lanjutkan"
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

export default Experience;
