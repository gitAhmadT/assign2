import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/css/style.css";
import image1 from "../assets/images/showcase-photo1.jpg";
import image2 from "../assets/images/showcase-photo3.jpg";

const Home = () => {
  return (
    <div>
      <header className="header">
        <Navbar />
        <div className="header-content">
          <h1 className="lg-heading text-light main-heading">
            travel the world
          </h1>
          <p className="text-light">
            travel the world experience the greatness it's the best gift given
            by nature
          </p>
          <a href="#" className="btn btn-primary text-red md-heading">
            Explore Places
          </a>
        </div>
      </header>

      <div className="container">
        <section className="card-section">
          <div className="card">
            <img src={image1} alt="Travel Image 1" />
            <div className="card-content">
              <h3>Discover New Places</h3>
              <p>
                Explore the world's most beautiful destinations with our
                exclusive travel packages.
              </p>
            </div>
          </div>
          <div className="card">
            <div className="card-content">
              <h3>Experience Adventure</h3>
              <p>
                Join our adventure tours and experience the thrill of a
                lifetime.
              </p>
            </div>
            <img src={image2} alt="Travel Image 2" />
          </div>
        </section>

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

export default Home;
