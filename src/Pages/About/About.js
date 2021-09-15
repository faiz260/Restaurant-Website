import React from "react";
import "./About.css";
import Hero from "../../Components/Hero/Hero";
import Card from "../../Components/Cards/BodyCard";
import Footer from "../../Components/Footer/Footer";

function About() {
  return (
    <div className="about">
      <Hero
        title="About Us"
        subtitle="The House of Heavenly Burgers and Delicious Food"
      />
      <div className="body_text_div">
        <h1 className="body_head">Why Choose Us?</h1>
        <p className="body_text">
          We believe in healthy and Tasty burgers supremecy
        </p>
      </div>
      <div className="cards_div">
        <Card
          img="/Images/ingredients.png"
          title="Fresh Ingredients"
          desc="We use freshly grounded ingredients to maintain the quality"
        />
        <Card
          img="/Images/chef.png"
          title="Expert Chefs"
          desc="Our top notch chefs are the best ones in the industry to deliver to the real taste"
        />
        <Card
          img="/Images/taste.png"
          title="Awesome Taste"
          desc="Taste and quality is our first priority to serve our customers the best experience"
        />
      </div>
      <div className="chefs_div">
        <h1 className="about_body_head">Our Professional Chefs</h1>
        <p className="chef_body_text">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.{" "}
        </p>
        <div className="chef_img_cards">
          <div className="chef_img chef_bg1">
            <h2>James Anderson</h2>
            <p>Chef</p>
          </div>
          <div className="chef_img chef_bg2">
            <h2>Mellissa White</h2>
            <p>Chef</p>
          </div>
          <div className="chef_img chef_bg3">
            <h2>Craig Gold</h2>
            <p>Chef</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
