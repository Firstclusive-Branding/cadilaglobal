import React, { useEffect } from "react";
import "../../styles/Mainpage Styles/ExecutiveHiring.css";
import executiveHiringImage from "../../assets/services assets/executive-hiring.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ExecutiveHiring = () => {
  useEffect(() => {
    document.title = `Executive Hiring - Cadila Global LLC`;
  }, []);

  return (
    <section className="executive-hiring-container">
      <motion.div
        className="executive-hiring-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="executive-hiring-text">
          <h4 className="executive-hiring-title">EXECUTIVE HIRING</h4>
          <h2 className="executive-hiring-heading">
            Leadership That <br /> Drives Success.
          </h2>
          <p className="executive-hiring-description">
            Our executive hiring services specialize in sourcing top leadership
            talent. We connect you with visionary executives who drive business
            growth, ensuring strategic alignment with your organization’s
            long-term goals and leadership culture.
          </p>
          <Link to="/contact-us" className="executive-hiring-button">
            LEARN MORE <FaArrowRight />
          </Link>
        </div>
        <div className="executive-hiring-image">
          <img src={executiveHiringImage} alt="Executive Hiring" />
        </div>
      </motion.div>
    </section>
  );
};

export default ExecutiveHiring;
