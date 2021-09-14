import React from "react";
import "./Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom";
import LowerFooter from "./lowerFooter";
// import Fade from "react-reveal/Fade";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="footer_section">
          <h1 className="footer_logo">Burger Bachelors</h1>
          <p className="logo_desc">
            Get the taste of our authentic and diverse menu with so many options
            to pick from.
          </p>
          <div>
            <button className="social_btn">
              <AiFillFacebook className="social_icon" />
            </button>
            <button className="social_btn">
              <AiOutlineInstagram className="social_icon" />
            </button>
            <button className="social_btn">
              <AiFillLinkedin className="social_icon" />
            </button>
            <button className="social_btn">
              <AiOutlineTwitter className="social_icon" />
            </button>
          </div>{" "}
        </div>
        <div className="footer_section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/about">About</Link>
        </div>

        <div className="footer_section">
          <h3>Contact Us</h3>
          <p>76/A, Green Lane,Dhanmondi, NYC</p>
          <p>+10 (78) 738-9083</p>
          <p>burgerbachelors@gmail.com</p>
        </div>
      </div>
      <LowerFooter />
    </div>
  );
}

export default Footer;
