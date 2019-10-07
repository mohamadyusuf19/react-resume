import { PERSONAL_INFO, EDUCATION, EXPERIENCE, SKILL } from "../types";

const initialState = {
  personalData: {
    nama: "Mohamad Yusuf Adi Nata",
    tempat: "Nganjuk, 19 April 2000",
    pekerjaan: "Software Enginer",
    whatsapp: "085608849965",
    email: "yusufadinata19@gmail.com",
    alamat: "jalan pandan no 89",
    deskripsi:
      "seorang yang ingin mengembangkan kemampuan dan belajar berbagai hal baru dan hal - hal yang sangat baru"
  },
  educationData: {
    sd: "SDN Ganung Kidul IV Nganjuk (2009)",
    smp: "SMPN 1 Nganjuk (2012)",
    sma: "SMAN 2 Nganjuk (2015)"
  },
  experienceData: {
    kerja: "Amano (2019)"
  },
  skillData: {
    html: "Advanced",
    css: "Intermediate",
    js: "Advanced"
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case PERSONAL_INFO:
      return { ...state, personalData: action.payload };
    case EDUCATION:
      return { ...state, educationData: action.payload };
    case EXPERIENCE:
      return { ...state, experienceData: action.payload };
    case SKILL:
      return { ...state, skillData: action.payload };
    default:
      return state;
  }
};
