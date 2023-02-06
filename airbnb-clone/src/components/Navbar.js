import React from "react";
import logo from "../images/airbnb-logo.png";
export default function Navbar() {
  return (
    <div className="nav">
      <img src={logo} alt="airbnb logo" className="nav--logo" />
    </div>
  );
}
