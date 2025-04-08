import React from "react";
import "../../styles/Mainpage Styles/ITStaffing.css";
import itStaffingImage from "../../assets/services assets/it-staffing.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ITStaffing = () => {
  return (
    <section className="it-staffing-container">
      <motion.div
        className="it-staffing-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="it-staffing-text">
          <h4 className="it-staffing-title">IT STAFFING</h4>
          <h2 className="it-staffing-heading">
            Finding You The Leaders <br /> Of Tomorrow.
          </h2>
          <p className="it-staffing-description">
            Today’s business demands agility. By taking the time to listen and
            understand our clients’ needs and people’s career aspirations,
            Cadila has gained a unique perspective into the intersection of
            talent and business. One among the leading IT staffing firms, we
            enable you to achieve and optimize the most strategic and variable
            component to business success—right people, with right skills,
            competencies, and attitudes.
          </p>
          <button className="it-staffing-button">
            <Link to="/contact-us">LEARN MORE →</Link>
          </button>
        </div>
        <div className="it-staffing-image">
          <img src={itStaffingImage} alt="IT Staffing" />
        </div>
      </motion.div>
    </section>
  );
};

export default ITStaffing;
