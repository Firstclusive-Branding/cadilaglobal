import React, { useState, useEffect, useRef } from "react";
import "../styles/Navbar.css";
import Logo from "../assets/Logo.png";
import { FaXmark, FaPhone, FaBars, FaChevronDown } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const navRef = useRef(null);

  const handleClickOutside = (event) => {
    if (navRef.current && !navRef.current.contains(event.target)) {
      setMenuOpen(false);
      setServicesOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleServicesClick = () => {
    setServicesOpen((prev) => !prev);
  };

  return (
    <nav className="navbar-container" ref={navRef}>
      <div className="navbar-logo">
        <a href="/">
          <img src={Logo} alt="Cadila Global" className="navbar-logo-img" />
        </a>
      </div>

      <div className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaXmark /> : <FaBars />}
      </div>

      <ul className={`navbar-links ${menuOpen ? "open" : ""}`}>
        <li>
          <a
            href="/"
            className="navbar-link"
            onClick={() => setMenuOpen(false)}
          >
            HOME
          </a>
        </li>
        <li>
          <Link
            to="/about-us"
            className="navbar-link"
            onClick={() => setMenuOpen(false)}
          >
            ABOUT US
          </Link>
        </li>
        <li
          className={`navbar-services ${servicesOpen ? "open" : ""}`}
          onMouseEnter={() => window.innerWidth > 1200 && setServicesOpen(true)}
          onMouseLeave={() =>
            window.innerWidth > 1200 && setServicesOpen(false)
          }
          onClick={handleServicesClick}
        >
          <p className="navbar-link">
            <span> SERVICES</span>
            <span className="navbar-down-arrow">
              <FaChevronDown />
            </span>
          </p>
          {servicesOpen && (
            <ul className="navbar-dropdown-menu">
              <li>
                <Link to="/services/executive-search">Executive Search</Link>
              </li>
              <li>
                <Link to="/services/direct-hire">Direct Hire</Link>
              </li>
              <li>
                <Link to="/services/contract-hire">Contract Hire</Link>
              </li>
              <li>
                <Link to="/services/permanent-staffing">
                  Permanent Staffing
                </Link>
              </li>
              <li>
                <Link to="/services/it-staffing">IT Staffing</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link
            to="/hire-talent"
            className="navbar-link"
            onClick={() => setMenuOpen(false)}
          >
            HIRE TALENT
          </Link>
        </li>
        <li className="navbar-jobs">
          <Link to="/careers" className="navbar-link">
            FIND JOBS
          </Link>
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
