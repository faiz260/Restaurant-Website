import React from "react";
import "./Gallery.css";
import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";

const images = [
  { img: "/Images/image2.jpg" },
  { img: "/Images/image3.jpg" },
  { img: "/Images/img4.jpg" },
  { img: "/Images/img5.jpeg" },
  { img: "/Images/img6.jpg" },
  { img: "/Images/img7.jpg" },
  { img: "/Images/img8.jpg" },
  { img: "/Images/img9.jpg" },
  { img: "/Images/image1.jpeg" },
  { img: "/Images/img10.jpg" },
  { img: "/Images/img11.jpg" },
  { img: "/Images/img12.jpg" },
  { img: "/Images/img13.jpg" },
  { img: "/Images/img14.jpg" },
  { img: "/Images/img15.jpg" },
];

function Gallery() {
  return (
    <div className="gallery">
      <Hero
        title="Gallery"
        subtitle="The House of Heavenly Burgers and Delicious Food"
      />
      <div className="body_text_div">
        <h1 className="body_head">Our Gallery</h1>
      </div>
      <div className="img_gallery">
        {images.map(({ img }) => {
          return (
            <div
              className="img_card"
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
