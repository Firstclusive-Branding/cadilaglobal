import React from "react";
import "../styles/ContactUs.css";
import contactUsImage from "../assets/Contact Us assets/contact-us.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="contact-us-header">
          <img
            src={contactUsImage}
            alt="Contact Us"
            className="contact-us-image"
          />
          <h2 className="contact-us-title">Contact Us</h2>
        </div>

        <div className="contact-us-content">
          <div className="contact-us-info">
            <h3 className="contact-us-subtitle">Let's talk with us</h3>
            <p className="contact-us-description">
              Questions, comments, or suggestions? Simply fill in the form and
              we’ll be in touch shortly.
            </p>
            <div className="contact-us-details">
              <a href="#" className="contact-us-location">
                <IoLocationOutline className="contact-us-icons" />{" "}
                <strong>Houston, Texas - 77469</strong>
              </a>
              <a href="tel:+18327579277" className="contact-us-phone">
                <BiPhoneCall className="contact-us-icons" /> +1 (832) 757-9277
              </a>
              <a
                href="mailto:info@cadilaglobal.com"
                className="contact-us-email"
              >
                <MdOutlineMailOutline className="contact-us-icons" />{" "}
                info@cadilaglobal.com
              </a>
            </div>
          </div>

          <div className="contact-us-form">
            <form className="contact-form">
              <div className="contact-form-name-group">
                <input
                  type="text"
                  className="contact-form-input"
                  placeholder="First Name*"
                  required
                />
                <input
                  type="text"
                  className="contact-form-input"
                  placeholder="Last Name*"
                  required
                />
              </div>
              <input
                type="email"
                className="contact-form-input"
                placeholder="Email*"
                required
              />
              <input
                type="tel"
                className="contact-form-input"
                placeholder="Phone Number*"
                required
              />
              <textarea
                className="contact-form-textarea"
                placeholder="Your message..."
                required
              ></textarea>
              <button type="submit" className="contact-form-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactUs;
