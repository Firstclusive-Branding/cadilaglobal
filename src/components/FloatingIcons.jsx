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
        href="https://wa.me/1234567890" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="floating-icon whatsapp"
      >
        <FaWhatsapp size={30} />
      </a>

      <button className="floating-icon chat">
        <FaComments size={30} />
      </button>
    </div>
  );
};

export default FloatingIcons;
