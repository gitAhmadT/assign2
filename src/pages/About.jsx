import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/css/style.css";

const About = () => {
  return (
    <div>
      <Navbar />

      <div className="about container">
        <h2>About Us</h2>
        <p>
          World Travel is a premier travel agency dedicated to providing
          world-class travel experiences. Our mission is to make travel easy and
          accessible for everyone, ensuring that each journey is memorable and
          enjoyable. We offer a variety of travel packages, including adventure
          tours, luxury vacations, and budget-friendly trips. Our team of travel
          experts is passionate about helping you explore the world's most
          beautiful destinations.
        </p>
        <p>
          We believe that travel is the best gift given by nature. It broadens
          the mind, enriches the soul, and brings people closer together. Join
          us on an adventure of a lifetime and experience the greatness of the
          world.
        </p>
        <section className="triplet-cards">
          <div className="triplet-card adventure">
            <h3>Adventure</h3>
            <p>Thrilling adventures that get your adrenaline pumping.</p>
          </div>
          <div className="triplet-card less-price">
            <h3>Less Price</h3>
            <p>Affordable travel packages for budget-conscious travelers.</p>
          </div>
          <div className="triplet-card experience">
            <h3>Experience</h3>
            <p>Unforgettable experiences that create lasting memories.</p>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;
