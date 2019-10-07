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
  },
  {
    label: "Nomor Whatsapp",
    key: "whatsapp"
  },
  {
    label: "Email",
    key: "email"
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
                <Input
                  key={i}
                  label={item.label}
                  formikProps={formikProps}
                  formikKey={item.key}
                />
              );
            })}
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
