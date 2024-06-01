import React from "react";
import "../assets/css/style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content container">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <ul>
            <li>Address: 123 Travel St, Lahorey</li>
            <li>Phone: +123-44356-356</li>
            <li>Email: contact@wahmadt.com</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-media-links">
            <i className="fab fa-facebook fa-2x"></i>
            <i className="fab fa-twitter fa-2x"></i>
            <i className="fab fa-instagram fa-2x"></i>
          </div>
        </div>
      </div>
      <p>Ahmad Travel &copy; 2020 All Rights Reserved to Ahmad </p>
    </footer>
  );
};

export default Footer;
