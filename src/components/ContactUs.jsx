import React, { useState } from "react";
import "../styles/ContactUs.css";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { MdOutlineMailOutline } from "react-icons/md";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import contactUsImage from "../assets/Contact Us assets/contact-us.jpg";

const ContactUs = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!isChecked) {
      Swal.fire({
        icon: "warning",
        title: "Terms & Conditions Required",
        text: "You must accept the terms and conditions to proceed.",
        confirmButtonText: "OK",
      });
      return;
    }

    const formData = new FormData(event.target);
    formData.append("access_key", "2a53a327-68d0-450d-92b3-0d4ce175b269");
    formData.append("subject", "Contact Form Submission from CadilaGlobal.com");
    formData.append(
      "consent",
      "User agreed to receive SMS messages related to follow-ups."
    );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Thanks for reaching out!",
        text: "We'll connect with you soon!",
        icon: "success",
        confirmButtonText: "OK",
      });
      event.target.reset();
      setIsChecked(false);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        confirmButtonText: "Try Again",
      });
    }
  };

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
        </div>

        <div className="contact-us-content">
          <div className="contact-us-info">
            <h2 className="contact-us-title">Contact Us</h2>
            <h3 className="contact-us-subtitle">Let's talk with us</h3>
            <p className="contact-us-description">
              Questions, comments, or suggestions? Simply fill in the form and
              we’ll be in touch shortly.
            </p>
            <div className="contact-us-details">
              <a href="#" className="contact-us-location">
                <IoLocationOutline className="contact-us-icons" />
                <strong>Houston, Texas - 77469</strong>
              </a>
              <a href="tel:+18327579277" className="contact-us-phone">
                <BiPhoneCall className="contact-us-icons" /> +1 (832) 757-9277
              </a>
              <a
                href="mailto:info@cadilaglobal.com"
                className="contact-us-email"
              >
                <MdOutlineMailOutline className="contact-us-icons" />
                info@cadilaglobal.com
              </a>
            </div>
          </div>

          <div className="contact-us-form">
            <form className="contact-form" onSubmit={onSubmit}>
              <div className="contact-form-name-group">
                <input
                  type="text"
                  className="contact-form-input"
                  placeholder="First Name*"
                  name="first_name"
                  required
                />
                <input
                  type="text"
                  className="contact-form-input"
                  placeholder="Last Name*"
                  name="last_name"
                  required
                />
              </div>
              <input
                type="email"
                className="contact-form-input"
                placeholder="Email*"
                name="email"
                required
              />
              <input
                type="tel"
                className="contact-form-input"
                placeholder="Phone Number*"
                name="phone"
                required
              />
              <textarea
                className="contact-form-textarea"
                placeholder="Your message..."
                name="message"
                required
              ></textarea>

              <div className="contact-form-checkbox">
                <input
                  type="checkbox"
                  id="termsCheckbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  required
                />
                <label htmlFor="termsCheckbox" className="checkbox-label">
                  By checking this box, you agree to receive SMS messages from
                  Cadila Global related to follow-ups. You may reply STOP to
                  opt-out at any time. Reply HELP to (832) 757-9277 for
                  assistance. Messages and data rates may apply. Message
                  frequency will vary. Learn more on our
                  <a href="/privacy-policy"> Privacy Policy</a> and
                  <a href="/terms-and-conditions"> Terms & Conditions</a>.
                </label>
              </div>

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
