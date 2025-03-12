import React, { useEffect } from "react";
import { FaWhatsapp, FaComments } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import "../styles/FloatingIcons.css";

const FloatingIcons = () => {
  const location = useLocation();

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://embed.tawk.to/67d132815b4ba2190ad6cc28/1im4iqjbn";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const openChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    } else {
      console.error("Tawk.to API not loaded yet");
    }
  };

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

      <button className="floating-icon chat" onClick={openChat}>
        <FaComments className="icon-size" />
      </button>
    </div>
  );
};

export default FloatingIcons;
