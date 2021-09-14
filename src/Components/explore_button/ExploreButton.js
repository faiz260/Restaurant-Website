import React from "react";
import "./ExploreButton.css";

function ExploreButton({ text, color }) {
  return (
    <button className="button" style={{ backgroundColor: color }}>
      {text}
    </button>
  );
}

export default ExploreButton;
