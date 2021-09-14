import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import MenuCard from "../Cards/MenuCard";
import "./Carousel.css";

function MenuCarousel({ data }) {
  console.log(data);
  return (
    <div>
      <Carousel showStatus={false} showIndicators={false} showThumbs={false}>
        <div className="carousel_div">
          {data.slice(0, 3).map((data) => {
            return (
              <MenuCard
                item={data.item}
                desc={data.desc}
                price={data.price}
                img={data.img}
              />
            );
          })}
        </div>
        {data.length > 3 ? (
          <div className="carousel_div">
            {data.slice(3, 6).map((data) => {
              return (
                <MenuCard
                  item={data.item}
                  desc={data.desc}
                  price={data.price}
                  img={data.img}
                />
              );
            })}
          </div>
        ) : null}

        {data.length > 6 ? (
          <div className="carousel_div">
            {data.slice(6, 9).map((data) => {
              return (
                <MenuCard
                  item={data.item}
                  desc={data.desc}
                  price={data.price}
                  img={data.img}
                />
              );
            })}
          </div>
        ) : null}
      </Carousel>
    </div>
  );
}

export default MenuCarousel;
