import React from "react";
import Hero from "../../Components/Hero/Hero";
import "./Home.css";
import Card from "../../Components/Cards/BodyCard";
import Tabs from "../../Components/Tabs/Tabs";
import Footer from "../../Components/Footer/Footer";

function Home() {
  return (
    <div className="home">
      <Hero
        title="Burger Bachelors"
        subtitle="The House of Heavenly Burgers and Delicious Food"
      />
      <div className="body_text_div">
        <h1 className="body_head">Why Us?</h1>
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
      <div className="tabs_div">
        <Tabs />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
