import React from "react";
import Input from "../../form/input/Input";
import Wrapper from "../../form/wrapper/Wrapper";
import Button from "../../form/button/Button";
import { Formik } from "formik";

const Data = [
  {
    label: "Sekolah Dasar",
    key: "sd"
  },
  {
    label: "Sekolah Menengah Pertama",
    key: "smp"
  },
  {
    label: "Sekolah Menengah Atas",
    key: "sma"
  },
  {
    label: "Kuliah",
    key: "kuliah"
  }
];

const Education = ({ onSubmitValues, redirect, onClickBack }) => {
  return (
    <Formik
      initialValues={{
        sd: "",
        smp: "",
        sma: "",
        kuliah: ""
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
            <p className="text-header-form">Pendidikan</p>
            {Data.map((item, i) => {
              return (
                <div style={{ width: "80vh" }}>
                  <Input
                    key={i}
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

export default Education;
