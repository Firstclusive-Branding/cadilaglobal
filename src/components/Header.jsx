import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

import "../styles/Header.css";

const Header = () => {
  return (
    <div className="custom-header">
      <div className="custom-contact-info">
        <div className="custom-info-item">
          <FaEnvelope className="custom-icon" />
          <a href="mailto:info@cadilaglobal.com">info@cadilaglobal.com</a>
        </div>
        <div className="custom-info-item">
          <FaPhone className="custom-icon" />
          <a href="tel:+18327579277">+1 832 757 9277</a>
        </div>
      </div>
      <div className="custom-social-icons">
        <a
          href="https://www.facebook.com/cadilaglobalsolutions"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookF className="custom-social-icon" />
        </a>
        <a href="#">
          <BsTwitterX className="custom-social-icon" />
        </a>
        <a
          href="https://www.instagram.com/cadila.global/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="custom-social-icon" />
        </a>
        <a
          href="https://www.linkedin.com/company/cadila-global/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="custom-social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Header;
