import React from "react";
import "./BodyCard.css";

function BodyCard({ img, title, desc }) {
  return (
    <div className="body_card">
      <img src={img} alt="card_icon" className="card_icon" />
      <h2 className="card_title">{title}</h2>
      <p className="card_desc">{desc}</p>
    </div>
  );
}

export default BodyCard;
