import React, { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import Logo from "../assets/Logo.png";
import { FaXmark, FaPhone, FaChevronDown, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [jobsOpen, setJobsOpen] = useState(false);
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
        <li
          className="navbar-jobs"
          onMouseEnter={() => window.innerWidth > 1200 && setJobsOpen(true)}
          onMouseLeave={() => window.innerWidth > 1200 && setJobsOpen(false)}
        >
          <a
            className="navbar-link jobs-toggle"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (window.innerWidth <= 1200) setJobsOpen(!jobsOpen);
            }}
          >
            JOBS
            <span className={`nav-down-icon ${jobsOpen ? "open" : ""}`}>
              <FaChevronDown />
            </span>
          </a>
          <div className={`jobs-dropdown ${jobsOpen ? "show" : ""}`}>
            <a href="#">Job 1</a>
            <a href="#">Job 2</a>
            <a href="#">Job 3</a>
          </div>
        </li>
        <li>
          <a
            href="#"
            className="navbar-link"
            onClick={() => setMenuOpen(false)}
          >
            CONTACT
          </a>
        </li>
      </ul>

      <div className="navbar-contact">
        <div>
          <a href="tel:+18327579277" className="navbar-phone-text">
            <span>
              <FaPhone />
            </span>
            +1 832 757 9277
          </a>
        </div>
        <div>
          <a href="#" className="navbar-find-jobs">
            FIND JOBS
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
