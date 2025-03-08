import React from "react";
import "../styles/directHire.css";
import directHireImage from "../assets/services assets/direct-hire.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const DirectHire = () => {
  return (
    <section
      className="direct-hire-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="direct-hire-content">
          <div className="direct-hire-text">
            <h4 className="direct-hire-title">DIRECT HIRE</h4>
            <h2 className="direct-hire-heading">
              Finding You The Leaders <br /> Of Tomorrow.
            </h2>
            <p className="direct-hire-description">
              Cadila Global Solutions direct hire service leverages the vast
              knowledge and experience of our team to identify and understand
              your needs. Having the right team is crucial for any business.
              However, recruitment is becoming a more intensive, time-consuming
              process as a result.
            </p>
            <button className="direct-hire-button">
              <Link to="/contact-us">LEARN MORE →</Link>
            </button>
          </div>
          <div className="direct-hire-image">
            <img src={directHireImage} alt="Direct Hire" />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DirectHire;
