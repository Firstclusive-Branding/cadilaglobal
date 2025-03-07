import React, { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import Logo from "../assets/Logo.png";
import { FaXmark, FaPhone, FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setMenuOpen(false);
      setJobsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="navbar-container" ref={navRef}>
      <div className="navbar-logo">
        <a href="">
          <img src={Logo} alt="Cadila Global" className="navbar-logo-img" />
        </a>
      </div>

      <div className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaXmark /> : <FaBars />}
      </div>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a
            href="#"
            className="navbar-link"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </a>
        </li>
        <li>
          <a
            href="#about-us"
            className="navbar-link"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT US
          </a>
        </li>
        <li>
          <a
            href="#"
            className="navbar-link"
            onClick={() => setMenuOpen(false)}
          >
            OUR SERVICES
          </a>
        </li>
        <li>
          <a
            href="#"
            className="navbar-link"
            onClick={() => setMenuOpen(false)}
          >
            HIRE TALENT
          </a>
        </li>
        <li className="navbar-jobs">
          <a className="navbar-link">FIND JOBS</a>
        </li>
        <li>
          <Link
            to="/contact-us"
            className="navbar-link"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT US
          </Link>
        </li>
      </ul>

      <div className="navbar-contact">
        <a href="tel:+18327579277" className="navbar-phone-text">
          <span>
            <FaPhone />
          </span>
          +1 (832) 757-9277
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
