import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ to, text }) => {
  return (
    <NavLink to={to} className="sidebar-navbar">
      {text}
    </NavLink>
  );
};

export default Navbar;
