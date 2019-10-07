import React from "react";
import TagHeader from "../../form/tagheader/TagHeader";

const Experience = ({ icon, kerja }) => {
  return (
    <>
      <TagHeader text="Pengalaman Kerja" icon={icon} />
      <div>
        <p className="text-title-field">Start Up :</p>
        <p className="text-description">{kerja}</p>
      </div>
    </>
  );
};

export default Experience;
