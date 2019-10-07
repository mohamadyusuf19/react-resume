import React from "react";
import Card from "../form/card/Card";
import {
  FaUserCircle,
  FaGraduationCap,
  FaPuzzlePiece,
  FaBriefcase
} from "react-icons/fa";
import "./preview.css";
import Personal from "./personal/Personal";
import Education from "./education/Education";
import Skill from "./skill/Skill";
import Experience from "./experience/Experience";
import HeaderPreview from "./headerpreview/HeaderPreview";

const Preview = props => {
  return (
    <Card id="print-preview">
      <HeaderPreview {...props} />
      <div className="preview-flex">
        <div className="left-position">
          <Personal {...props} icon={<FaUserCircle />} />
          <Skill {...props} icon={<FaPuzzlePiece />} />
        </div>
        <div className="right-position">
          <Education {...props} icon={<FaGraduationCap />} />
          <Experience {...props} icon={<FaBriefcase />} />
        </div>
      </div>
    </Card>
  );
};

export default Preview;
