import React from "react";
import Input from "../../form/input/Input";
import Wrapper from "../../form/wrapper/Wrapper";
import TextArea from "../../form/textarea/TextArea";
import Button from "../../form/button/Button";
import { Formik } from "formik";
import { validationSchema } from "../../../validation/PersonalValidation";

const Data = [
  {
    label: "Nama",
    key: "nama"
  },
  {
    label: "Tempat, Tanggal Lahir",
    key: "tempat"
  },
  {
    label: "Pekerjaan",
    key: "pekerjaan"
  }
];

const MoreData = [
  {
    label: "Alamat",
    key: "alamat"
  },
  {
    label: "Deskripsi",
    key: "deskripsi"
  }
];

const Personal = ({ onSubmitValues, redirect, onClickBack }) => {
  return (
    <Formik
      initialValues={{
        nama: "",
        tempat: "",
        pekerjaan: "",
        whatsapp: "",
        email: "",
        alamat: "",
        deskripsi: ""
      }}
      onSubmit={(values, { setSubmitting }) => {
        onSubmitValues(values);
        redirect();
        setSubmitting(false);
      }}
      validationSchema={validationSchema}
    >
      {formikProps => {
        return (
          <Wrapper onSubmit={formikProps.handleSubmit}>
            <p className="text-header-form">Personal Info</p>
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
            <div style={{ display: "flex", width: "80vh" }}>
              <div style={{ marginRight: 20, width: "100%" }}>
                <Input
                  label="Nomor Handphone"
                  formikProps={formikProps}
                  formikKey="whatsapp"
                />
              </div>
              <div style={{ width: "100%" }}>
                <Input
                  label="Email"
                  formikProps={formikProps}
                  formikKey="email"
                />
              </div>
            </div>
            {MoreData.map((item, i) => {
              return (
                <TextArea
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

export default Personal;
