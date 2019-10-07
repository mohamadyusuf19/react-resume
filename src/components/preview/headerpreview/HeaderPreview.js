import React from "react";

const HeaderPreview = ({ nama, pekerjaan, deskripsi }) => {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <p className="title-name">{nama}</p>
        <p className="text-job">{pekerjaan}</p>
        <p className="text-description">{deskripsi}</p>
      </div>
    </div>
  );
};

export default HeaderPreview;
