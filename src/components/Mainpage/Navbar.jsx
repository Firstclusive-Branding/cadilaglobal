import React, { useState, useEffect, useRef } from "react";
import "../../styles/Mainpage Styles/Navbar.css";
import Logo from "../../assets/Logo.png";
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
    document.addEventListener("pointerdown", handleClickOutside, true);
    return () => {
      document.removeEventListener("pointerdown", handleClickOutside, true);
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
          <p className="navbar-link navbar-services-link">
            <Link
              to="/services"
              className="navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              OUR SERVICES
            </Link>
            <span className="navbar-down-arrow">
              <FaChevronDown />
            </span>
          </p>
          <ul className={`navbar-dropdown-menu ${servicesOpen ? "open" : ""}`}>
            <li>
              <Link
                to="/services/permanent-hiring"
                onClick={() => setMenuOpen(false)}
              >
                Permanent Hiring
              </Link>
            </li>
            <li>
              <Link
                to="/services/temporary-hiring"
                onClick={() => setMenuOpen(false)}
              >
                Temporary Hiring
              </Link>
            </li>
            <li>
              <Link
                to="/services/contract-hiring"
                onClick={() => setMenuOpen(false)}
              >
                Contract Hiring
              </Link>
            </li>
            <li>
              <Link
                to="/services/recruitment-process-outsourcing"
                onClick={() => setMenuOpen(false)}
              >
                Recruitment Process Outsourcing (RPO)
              </Link>
            </li>
            <li>
              <Link
                to="/services/contract-to-hire"
                onClick={() => setMenuOpen(false)}
              >
                Contract to Hire Services
              </Link>
            </li>
            <li>
              <Link
                to="/services/consulting"
                onClick={() => setMenuOpen(false)}
              >
                Consulting Services
              </Link>
            </li>
            <li>
              <Link
                to="/services/executive-hiring"
                onClick={() => setMenuOpen(false)}
              >
                Executive Hiring
              </Link>
            </li>
            <li>
              <Link
                to="/services/specialized-hiring"
                onClick={() => setMenuOpen(false)}
              >
                Specialized Hiring
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link
            to="/find-talent"
            className="navbar-link"
            onClick={() => setMenuOpen(false)}
          >
            FIND TALENT
          </Link>
        </li>
        <li>
          <Link to="/find-jobs" className="navbar-link">
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
