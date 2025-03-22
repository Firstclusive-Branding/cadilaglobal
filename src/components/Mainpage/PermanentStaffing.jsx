import React from "react";
import "../../styles/Mainpage Styles/PermanentStaffing.css";
import permanentStaffingImage from "../../assets/services assets/permanent-staffing.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PermanentStaffing = () => {
  return (
    <section className="permanent-staffing-container">
      <motion.div
        className="permanent-staffing-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="permanent-staffing-text">
          <h4 className="permanent-staffing-title">PERMANENT STAFFING</h4>
          <h2 className="permanent-staffing-heading">
            Finding You The Leaders <br /> Of Tomorrow.
          </h2>
          <p className="permanent-staffing-description">
            Our permanent staffing solutions build your organization with the
            right talent to thrive in today’s competitive market.
          </p>
          <button className="permanent-staffing-button">
            <Link to="/contact-us">LEARN MORE →</Link>
          </button>
        </div>
        <div className="permanent-staffing-image">
          <img src={permanentStaffingImage} alt="Permanent Staffing" />
        </div>
      </motion.div>
    </section>
  );
};

export default PermanentStaffing;
