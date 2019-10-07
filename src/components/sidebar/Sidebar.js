/* eslint-disable no-undef */
import React from "react";
import { useLocation } from "react-router-dom";
import "./sidebar.css";
import { FaUserCircle, FaSistrix, FaPrint } from "react-icons/fa";
import Navbar from "./Navbar";
import TextHeader from "./TextHeader";
import Logo from "../form/logo/Logo";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const data = [
  {
    to: "personal-info",
    text: "Personal Info"
  },
  {
    to: "education",
    text: "Education"
  },
  {
    to: "experience",
    text: "Experience"
  },
  {
    to: "skill",
    text: "Skill"
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
      <TextHeader text="Profile" icon={<FaUserCircle />} />
      {data.map((item, i) => {
        return <Navbar key={i} to={item.to} text={item.text} />;
      })}
      <TextHeader text="Preview" icon={<FaSistrix />} />
      <Navbar text="Preview" to="/" />
      {location.pathname === "/" ? (
        <>
          <TextHeader text="Print" icon={<FaPrint />} />
          <p
            style={{ color: "#000", cursor: "pointer" }}
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
        </>
      ) : null}
    </div>
  );
};

export default Sidebar;
