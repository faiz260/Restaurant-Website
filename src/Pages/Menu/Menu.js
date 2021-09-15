import React from "react";
import "./Menu.css";
import Hero from "../../Components/Hero/Hero";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import Card from "../../Components/Cards/MenuCard";
import Footer from "../../Components/Footer/Footer";

const breakfast = [
  {
    item: "Sandwich",
    desc: "we use freshly grounded ingredients to maintain the quality",
    price: "$15",
    img: "/Images/img15.jpg",
  },
  {
    item: "Srumbled Eggs",
    desc: "we use freshly grounded ingredients to maintain the quality",
    price: "$10",
    img: "/Images/img14.jpg",
  },
  {
    item: "Pan Cakes",
    desc: "we use freshly grounded ingredients to maintain the quality",
    price: "$18",
    img: "/Images/img13.jpg",
  },
  {
    item: "Sandwich",
    desc: "we use freshly grounded ingredients to maintain the quality",
    price: "$15",
    img: "/Images/img15.jpg",
  },
  {
    item: "Srumbled Eggs",
    desc: "we use freshly grounded ingredients to maintain the quality",
    price: "$10",
    img: "/Images/img14.jpg",
  },
  {
    item: "Pan Cakes",
    desc: "we use freshly grounded ingredients to maintain the quality",
    price: "$18",
    img: "/Images/img13.jpg",
  },
];

const lunch = [
  {
    item: "Pizza",
    desc: "we use freshly grounded ingredients to maintain the quality",
    price: "$15",
    img: "/Images/img12.jpg",
  },
  {
    item: "Chowmien",
    desc: "we use freshly grounded ingredients to maintain the quality",
    price: "$10",
    img: "/Images/img11.jpg",
  },
  {
    item: "Chilli Chicken",
    desc: "we use freshly grounded ingredients to maintain the quality",
    price: "$18",
    img: "/Images/img10.jpg",
  },
  {
    item: "Chicken Manchurian",
    desc: "we use freshly grounded ingredients to maintain the quality",
    price: "$15",
    img: "/Images/img9.jpg",
  },
  {
    item: "Fried Chicken",
    desc: "we use freshly grounded ingredients to maintain the quality",
    price: "$10",
    img: "/Images/img8.jpg",
  },
  {
    item: "Burger",
    desc: "we use freshly grounded ingredients to maintain the quality",
    price: "$18",
    img: "/Images/img7.jpg",
  },
];
const drinks = [
  {
    item: "Sprite",
    desc: "we use freshly grounded ingredients to maintain the quality",
    price: "$3",
    img: "/Images/drink2.png",
  },
  {
    item: "Fanta",
    desc: "we use freshly grounded ingredients to maintain the quality",
    price: "$3",
    img: "/Images/drink3.jpg",
  },
  {
    item: "Coca Cola",
    desc: "we use freshly grounded ingredients to maintain the quality",
    price: "$3",
    img: "/Images/drink4.jpg",
  },
];

function Menu() {
  return (
    <div className="menu">
      <Hero
        title="Our Menu"
        subtitle="The House of Heavenly Burgers and Delicious Food"
      />
      <div className="tabs_header menu_tab_header">
        <div>
          <h1 className="tabs_title menu_tab_title">Our Delicacies</h1>
          <p className="tabs_desc menu_tab_desc">
            Get the taste of our authentic and diverse menu with so many options
            to pick from.
          </p>
        </div>
      </div>
      <Tabs
        className="tab"
        activeLinkStyle={{
          borderBottom: "3px solid #F2C64D",
          color: "#F2C64D",
        }}
      >
        <span>
          <TabLink to="tab1" className="tabLink">
            <p>Breakfast</p>
          </TabLink>
          <TabLink to="tab2" className="tabLink">
            <p>Lunch</p>
          </TabLink>
          <TabLink to="tab3" className="tabLink">
            <p>Dinner</p>
          </TabLink>
          <TabLink to="tab4" className="tabLink">
            <p>Drinks</p>
          </TabLink>
          <TabLink to="tab5" className="tabLink">
            <p>Fast Food</p>
          </TabLink>
        </span>
        <span>
          <TabContent for="tab1" className="tabContent menu_tab_content">
            {breakfast.map((data) => {
              return (
                <Card
                  item={data.item}
                  price={data.price}
                  desc={data.desc}
                  img={data.img}
                />
              );
            })}
          </TabContent>
          <TabContent for="tab2" className="tabContent menu_tab_content">
            {lunch.map((data) => {
              return (
                <Card
                  item={data.item}
                  price={data.price}
                  desc={data.desc}
                  img={data.img}
                />
              );
            })}
          </TabContent>
          <TabContent for="tab3" className="tabContent menu_tab_content">
            {lunch.map((data) => {
              return (
                <Card
                  item={data.item}
                  price={data.price}
                  desc={data.desc}
                  img={data.img}
                />
              );
            })}
          </TabContent>
          <TabContent for="tab4" className="tabContent menu_tab_content">
            {drinks.map((data) => {
              return (
                <Card
                  item={data.item}
                  price={data.price}
                  desc={data.desc}
                  img={data.img}
                />
              );
            })}
          </TabContent>
          <TabContent for="tab5" className="tabContent menu_tab_content">
            {lunch.map((data) => {
              return (
                <Card
                  item={data.item}
                  price={data.price}
                  desc={data.desc}
                  img={data.img}
                />
              );
            })}
          </TabContent>
        </span>
      </Tabs>
      <Footer />
    </div>
  );
}

export default Menu;
