import React from "react";
import { Tabs, TabLink, TabContent } from "react-tabs-redux";
import Button from "../explore_button/ExploreButton";
import "./Tabs.css";
import MenuCarousel from "../Carousel/Carousel";

function MenuTabs() {
  return (
    <div>
      <div className="tabs_header">
        <div>
          <h1 className="tabs_title">Our Delicacies</h1>
          <p className="tabs_desc">
            Get the taste of our authentic and diverse menu with so many options
            to pick from.
          </p>
        </div>
        <Button color="#F2C64D" text="Full Menu" />
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
          <TabContent for="tab1" className="tabContent">
            <MenuCarousel />
          </TabContent>
          <TabContent for="tab2" className="tabContent">
            <MenuCarousel />
          </TabContent>
          <TabContent for="tab3" className="tabContent">
            <MenuCarousel />
          </TabContent>
          <TabContent for="tab4" className="tabContent">
            <MenuCarousel />
          </TabContent>
          <TabContent for="tab5" className="tabContent">
            <MenuCarousel />
          </TabContent>
        </span>
      </Tabs>
    </div>
  );
}

export default MenuTabs;
