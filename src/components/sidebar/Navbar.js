import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ to, text, icon }) => {
  return (
    <NavLink to={to} className="sidebar-navbar">
      <div className="navbar-icon">{icon}</div>
      <div>{text}</div>
    </NavLink>
  );
};

export default Navbar;
