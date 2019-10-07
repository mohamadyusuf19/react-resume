import React from "react";
import TagHeader from "../../form/tagheader/TagHeader";

const Education = ({ icon, sd, smp, sma, kuliah }) => {
  return (
    <>
      <TagHeader text="Pendidikan" icon={icon} />
      <div>
        <p className="text-title-field">Sekolah Dasar :</p>
        <p className="text-description">{sd}</p>
      </div>
      <div>
        <p className="text-title-field">Sekolah Menengah Pertama :</p>
        <p className="text-description">{smp}</p>
      </div>
      <div>
        <p className="text-title-field">Sekolah Menengah Atas :</p>
        <p className="text-description">{sma}</p>
      </div>
      <div>
        <p className="text-title-field">Kuliah :</p>
        <p className="text-description">{kuliah}</p>
      </div>
    </>
  );
};

export default Education;
