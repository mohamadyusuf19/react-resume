import React from "react";
import TagHeader from "../../form/tagheader/TagHeader";

const Skill = ({ icon, html, css, js }) => {
  return (
    <>
      <TagHeader text="Ketrampilan" icon={icon} />
      <div>
        <p className="text-title-field">HTML :</p>
        <p className="text-description">{html}</p>
      </div>
      <div>
        <p className="text-title-field">CSS :</p>
        <p className="text-description">{css}</p>
      </div>
      <div>
        <p className="text-title-field">JavaScript :</p>
        <p className="text-description">{js}</p>
      </div>
    </>
  );
};

export default Skill;
