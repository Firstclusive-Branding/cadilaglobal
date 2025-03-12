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
          <h3>CADILA GLOBAL</h3>
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
            <a
              href="https://x.com/cadilaglobal/"
              target="_blank"
              rel="noopener noreferrer"
            >
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
            </li>{" "}
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/services">Our Services</Link>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/find-talent">Find Talent</Link>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/find-jobs">Find Jobs</Link>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/terms-and-conditions">Terms & Conditions</Link>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/privacy-policies">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Our Services</h3>
          <ul>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/services/permanent-hiring">Permanent Hiring</Link>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/services/temporary-hiring">Temporary Hiring</Link>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/services/contract-hiring">Contract Hiring</Link>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/services/recruitment-process-outsourcing">
                Recruitment Process Outsourcing (RPO)
              </Link>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/services/contract-to-hire">
                Contract to Hire Services
              </Link>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/services/consulting">Consulting Services</Link>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/services/executive-hiring">Executive Hiring</Link>
            </li>
            <li>
              <FaCaretRight className="arrow-icon" />
              <Link to="/services/specialized-hiring">Specialized Hiring</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>GET IN TOUCH</h3>
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
          MADE WITH <FaHeart className="heart-icon" /> BY
          <a
            className="firstclusive-link"
            href="https://firstclusive.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            FIRSTCLUSIVE
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
