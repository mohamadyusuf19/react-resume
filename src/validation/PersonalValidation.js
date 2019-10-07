import * as yup from "yup";

export const validationSchema = yup.object().shape({
  nama: yup
    .string()
    .label("Nama harus diisi")
    .required(),
  whatsapp: yup
    .number()
    .label("Nomor Whatsapp harus diisi")
    .required(),
  email: yup
    .string()
    .label("Email harus diisi")
    .email()
    .required()
});
