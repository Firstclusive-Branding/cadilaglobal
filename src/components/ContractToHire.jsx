import React from "react";
import "../styles/ContractToHire.css";
import contractToHireImage from "../assets/services assets/contract-to-hire.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ContractToHire = () => {
  return (
    <section className="contract-to-hire-container">
      <motion.div
        className="contract-to-hire-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="contract-to-hire-text">
          <h4 className="contract-to-hire-title">CONTRACT TO HIRE</h4>
          <h2 className="contract-to-hire-heading">
            Flexibility Meets <br /> Long-Term Success.
          </h2>
          <p className="contract-to-hire-description">
            Our contract-to-hire services help you evaluate talent before making
            long-term commitments. We connect you with professionals who fit
            your needs, allowing seamless transitions from contract roles to
            full-time positions with confidence.
          </p>
          <Link to="/contact-us" className="contract-to-hire-button">
            LEARN MORE <FaArrowRight />
          </Link>
        </div>
        <div className="contract-to-hire-image">
          <img src={contractToHireImage} alt="Contract To Hire" />
        </div>
      </motion.div>
    </section>
  );
};

export default ContractToHire;
