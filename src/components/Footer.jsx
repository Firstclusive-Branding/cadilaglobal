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
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>CADILA GLOBAL SOLUTION</h3>
          <p>
            With 10+ years of experience, we connect top talent with leading
            companies in engineering, IT, healthcare, finance and more. Our
            flexible, high-quality staffing solutions ensure long-term success
            for businesses and job seekers alike.
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
              <Link to="/">Home</Link>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/contact-us">Contact</Link>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/">Terms & Conditions</Link>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/services/executive-search">Executive Search</Link>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/services/direct-hire">Direct Hire</Link>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/services/contract-hire">Contract Hire</Link>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/services/permanent-staffing">Permanent Staffing</Link>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/services/it-staffing">IT Staffing</Link>
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
