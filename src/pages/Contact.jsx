import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../assets/css/style.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <div className="contact container">
        <h2>Contact Us</h2>
        <p>
          If you have any questions, comments, or concerns, please feel free to
          reach out to us. We are here to help you with all your travel needs.
        </p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
