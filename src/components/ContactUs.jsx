import React from "react";
import "../styles/ContactUs.css";
import contactUsImage from "../assets/Contact Us assets/contact-us.jpg";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <img src={contactUsImage} alt="Contact Us" className="contact-image" />
        <h2>Contact Us</h2>
      </div>

      <div className="contact-content">
        <div className="contact-info">
          <h3>Let's talk with us</h3>
          <p>
            Questions, comments, or suggestions? Simply fill in the form and
            we’ll be in touch shortly.
          </p>
          <div className="contact-details">
            <p>
              <IoLocationOutline /> <strong>Houston, Texas - 77469</strong>
            </p>
            <p>
              <BiPhoneCall />
              +1 (832) 757-9277
            </p>
            <p>
              <MdOutlineMailOutline /> info@cadilaglobal.com
            </p>
          </div>
        </div>

        <div className="contact-form">
          <form>
            <div className="input-group">
              <input type="text" placeholder="First Name*" required />
              <input type="text" placeholder="Last Name*" required />
            </div>
            <input type="email" placeholder="Email*" required />
            <input type="tel" placeholder="Phone Number*" required />
            <textarea placeholder="Your message..." required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
