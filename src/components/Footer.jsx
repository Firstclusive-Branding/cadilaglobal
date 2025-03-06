import React from "react";
import "../styles/Footer.css";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaHeart,
  FaCaretRight,
} from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Information Section */}
        <div className="footer-section">
          <h3>Information</h3>
          <p>
            Cadila Global Solution delivers tailored staffing solutions,
            ensuring flexibility, agility, and excellence across diverse
            industries.
          </p>
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/cadilaglobalsolutions"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="footer-icon" />
            </a>
            <a href="#">
              <BsTwitterX className="footer-icon" />
            </a>
            <a
              href="https://www.instagram.com/cadila.global/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="footer-icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/cadila-global/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="footer-icon" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <FaCaretRight className="arrow-icon" />
              <a href="#">Home</a>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <a href="#">About Us</a>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <a href="#">Our Team Work</a>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <a href="#">Services</a>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <a href="#">Work Gallery</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Site Links</h3>
          <ul>
            <li>
              <FaCaretRight className="arrow-icon" />
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <a href="#">Disclaimer</a>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <a href="#">Terms & Condition</a>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <a href="#">GDPR</a>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <a href="#">Cookies Used</a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Stay Tuned With Us</h3>
          <p>
            <FaMapMarkerAlt className="footer-icon" />
            <a href="#">Houston, Texas 77469</a>
          </p>
          <p>
            <FaEnvelope className="footer-icon" />
            <a href="mailto:info@cadilaglobal.com">info@cadilaglobal.com</a>
          </p>
          <p>
            <FaPhone className="footer-icon" />
            <a href="tel:+18327579277">+1 (832) 757-9277</a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          MADE WITH <FaHeart className="heart-icon" /> BY FIRSTCLUSIVE
        </p>
      </div>
    </footer>
  );
};

export default Footer;
