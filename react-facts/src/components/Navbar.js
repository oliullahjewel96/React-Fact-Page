import React from "react";
import logo from "../images/reactjs-icon.png";
import "../index.css";

export default function Navbar() {
  return (
    <div className="header-bar">
      <div className="brand">
        <img src={logo} alt="" />
        <h3 className="brand-name">ReactFacts</h3>
      </div>
      <h3 className="text">React Course- Project 1</h3>
    </div>
  );
}
