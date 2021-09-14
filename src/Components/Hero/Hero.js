import React from "react";
import "./Hero.css";
import ExploreButton from "../explore_button/ExploreButton";
import Navbar from "../Navbar/Navbar";

function Hero({ title, subtitle }) {
  return (
    <div className="hero">
      <Navbar />
      <h1 className="title">{title}</h1>
      <p className="subtitle">{subtitle}</p>
      <ExploreButton text="Explore Now" color="#ff5200" />
    </div>
  );
}

export default Hero;
