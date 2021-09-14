import React from "react";
import "./MenuCard.css";

function MenuCard({ item, price, desc, img }) {
  return (
    <div className="menu_card">
      <div className="image" style={{ backgroundImage: `url(${img})` }}>
        <div className="price">{price}</div>
      </div>
      <h4 className="item_name">{item}</h4>
      <p className="item_desc">{desc}</p>
    </div>
  );
}

export default MenuCard;
