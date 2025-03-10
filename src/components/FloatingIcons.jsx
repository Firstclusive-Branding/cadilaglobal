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
        href="https://wa.me/+18327579277" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="floating-icon whatsapp"
      >
        <FaWhatsapp size={40} />
      </a>

      <button className="floating-icon chat">
        <FaComments size={40} />
      </button>
    </div>
  );
};

export default FloatingIcons;
