import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Drawer from "./drawer";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="links_div">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/menu">
          Menu
        </Link>
        <Link className="link" to="/gallery">
          Gallery
        </Link>
        <Link className="link" to="/about">
          About
        </Link>
      </div>
      <Link to="/contact">
        <button className="contact_btn">Contact</button>
      </Link>
      <Drawer />
    </div>
  );
}

export default Navbar;
