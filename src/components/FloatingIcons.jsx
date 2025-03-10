import React from "react";
import { FaWhatsapp, FaComments } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "../styles/FloatingIcons.css";

const FloatingIcons = () => {
  const location = useLocation();

  if (location.pathname === "/notfound") {
    return null;
  }

  return (
    <div className="floating-icons-container">
      <a
        href="https://wa.me/+18327579277"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-icon whatsapp"
      >
        <FaWhatsapp className="icon-size" />
      </a>

      <button className="floating-icon chat">
        <FaComments className="icon-size" />
      </button>
    </div>
  );
};

export default FloatingIcons;
