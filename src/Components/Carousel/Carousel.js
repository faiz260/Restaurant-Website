import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MenuCard from "../Cards/MenuCard";
import "./Carousel.css";

function MenuCarousel() {
  return (
    <div>
      <Carousel showStatus={false} showIndicators={false}>
        <div className="carousel_div">
          <MenuCard
            item="Sandwich"
            desc="we use freshly grounded ingredients to maintain the quality"
            price="$15"
            img="/Images/img15.jpg"
          />
          <MenuCard
            item="Srumbled Eggs"
            desc="we use freshly grounded ingredients to maintain the quality"
            price="$10"
            img="/Images/img14.jpg"
          />
          <MenuCard
            item="Pan Cakes"
            desc="we use freshly grounded ingredients to maintain the quality"
            price="$18"
            img="/Images/img13.jpg"
          />
        </div>
        <div className="carousel_div">
          <MenuCard
            item="Sandwich"
            desc="we use freshly grounded ingredients to maintain the quality"
            price="$15"
            img="/Images/img15.jpg"
          />
          <MenuCard
            item="Srumbled Eggs"
            desc="we use freshly grounded ingredients to maintain the quality"
            price="$10"
            img="/Images/img14.jpg"
          />
          <MenuCard
            item="Pan Cakes"
            desc="we use freshly grounded ingredients to maintain the quality"
            price="$18"
            img="/Images/img13.jpg"
          />
        </div>
        <div className="carousel_div">
          <MenuCard
            item="Sandwich"
            desc="we use freshly grounded ingredients to maintain the quality"
            price="$15"
            img="/Images/img15.jpg"
          />
          <MenuCard
            item="Srumbled Eggs"
            desc="we use freshly grounded ingredients to maintain the quality"
            price="$10"
            img="/Images/img14.jpg"
          />
          <MenuCard
            item="Pan Cakes"
            desc="we use freshly grounded ingredients to maintain the quality"
            price="$18"
            img="/Images/img13.jpg"
          />
        </div>
      </Carousel>
    </div>
  );
}

export default MenuCarousel;
