/* eslint-disable no-undef */
import React from "react";
import { useLocation } from "react-router-dom";
import "./sidebar.css";
import {
  FaUserCircle,
  FaSistrix,
  FaPrint,
  FaGraduationCap,
  FaBriefcase,
  FaPuzzlePiece
} from "react-icons/fa";
import Navbar from "./Navbar";
import TextHeader from "./TextHeader";
import Logo from "../form/logo/Logo";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const data = [
  {
    to: "personal-info",
    text: "Personal Info",
    icon: <FaUserCircle />
  },
  {
    to: "education",
    text: "Education",
    icon: <FaGraduationCap />
  },
  {
    to: "experience",
    text: "Experience",
    icon: <FaBriefcase />
  },
  {
    to: "skill",
    text: "Skill",
    icon: <FaPuzzlePiece />
  }
];

const pxToMm = px => {
  return Math.floor(px / document.getElementById("print-preview").offsetHeight);
};

const Sidebar = ({ id }) => {
  let location = useLocation();
  return (
    <div className="sidebar-nav">
      <Logo
        src="https://www.seekclipart.com/clipng/middle/196-1967604_cv-png-curriculum-vitae-logo-png-clipart.png"
        alt="logo"
      />
      <TextHeader text="Profile" />
      {data.map((item, i) => {
        return (
          <Navbar key={i} to={item.to} text={item.text} icon={item.icon} />
        );
      })}
      <TextHeader text="Preview" />
      <Navbar text="Preview" to="/" icon={<FaSistrix />} />
      {location.pathname === "/" ? (
        <>
          <TextHeader text="Print" />
          <div style={{ display: "flex" }}>
            <FaPrint />
            <p
              style={{ color: "#000", cursor: "pointer", marginLeft: "10px" }}
              onClick={() => {
                const input = document.getElementById(id);
                const inputHeightMm = pxToMm(input.offsetHeight);
                const a4WidthMm = 210;
                const a4HeightMm = 297;
                html2canvas(input).then(canvas => {
                  const imgData = canvas.toDataURL("image/png");
                  // Document of a4WidthMm wide and inputHeightMm high
                  if (inputHeightMm > a4HeightMm) {
                    // elongated a4 (system print dialog will handle page breaks)
                    const pdf = new jsPDF("p", "mm", [
                      inputHeightMm + 16,
                      a4WidthMm
                    ]);
                    pdf.addImage(imgData, "PNG", 0, 0);
                    pdf.autoPrint();
                    window.open(pdf.output("bloburl"));
                  } else {
                    // standard a4
                    const pdf = new jsPDF();
                    pdf.addImage(imgData, "PNG", 0, 0);
                    pdf.autoPrint();
                    window.open(pdf.output("bloburl"));
                  }
                });
              }}
            >
              Print
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default Sidebar;
