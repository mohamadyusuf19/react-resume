import React from "react";
import TagHeader from "../../form/tagheader/TagHeader";

const Personal = ({ icon, tempat, whatsapp, email, alamat }) => {
  return (
    <>
      <TagHeader text="Personal Info" icon={icon} />
      <div>
        <p className="text-title-field">Tempat, Tanggal Lahir :</p>
        <p className="text-description">{tempat}</p>
      </div>
      <div>
        <p className="text-title-field">Handphone :</p>
        <p className="text-description">{whatsapp}</p>
      </div>
      <div>
        <p className="text-title-field">Email :</p>
        <p className="text-description">{email}</p>
      </div>
      <div>
        <p className="text-title-field">Alamat :</p>
        <p className="text-description">{alamat}</p>
      </div>
    </>
  );
};

export default Personal;
