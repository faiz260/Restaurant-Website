import React from "react";
import "./Contact.css";
import Hero from "../../Components/Hero/Hero";
import Footer from "../../Components/Footer/Footer";
import Button from "../../Components/explore_button/ExploreButton";

function Contact() {
  return (
    <div>
      <Hero
        title="Contact Us"
        subtitle="The House of Heavenly Burgers and Delicious Food"
      />
      <div className="contact">
        <div className="details">
          <div className="info">
            <span className="icon_div">
              <img src="/Images/location.svg" alt="icon" className="icon" />
            </span>
            <div>
              <h2 className="info_title">Location</h2>
              <p className="info_subtitle">
                43 Raymouth Rd. Baltemoer, London 3910
              </p>
            </div>
          </div>
          <div className="info">
            <span className="icon_div">
              <img src="/Images/phone.svg" alt="icon" className="icon" />
            </span>
            <div>
              <h2 className="info_title">Call</h2>
              <p className="info_subtitle">+1 123 456 789</p>
            </div>
          </div>
          <div className="info">
            <span className="icon_div">
              <img src="/Images/clock.svg" alt="icon" className="icon" />
            </span>
            <div>
              <h2 className="info_title">open Hours</h2>
              <p className="info_subtitle">11:00 aM - 23:00 pM</p>
            </div>
          </div>
          <div className="info">
            <span className="icon_div">
              <img src="/Images/email.svg" alt="icon" className="icon" />
            </span>
            <div>
              <h2 className="info_title">Email</h2>
              <p className="info_subtitle">BACHELORS@GMAIL.COM </p>
            </div>
          </div>
        </div>
        <div className="contact_form">
          <div>
            <input type="text" placeholder="YOUR NAME" />
            <input type="text" placeholder="YOUR EMAIL" />
          </div>
          <input type="text" placeholder="SUBJECT" />
          <input type="text" placeholder="MESSAGE"></input>
          <Button text="Send" color="#F2C64D" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
