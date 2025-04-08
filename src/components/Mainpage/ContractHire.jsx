import React from "react";
import "../../styles/Mainpage Styles/ContractHire.css";
import contractHireImage from "../../assets/services assets/contract-hire.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ContractHire = () => {
  return (
    <section className="contract-hire-container">
      <motion.div
        className="contract-hire-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="contract-hire-text">
          <h4 className="contract-hire-title">CONTRACT HIRING</h4>
          <h2 className="contract-hire-heading">
            Finding You The Leaders <br /> Of Tomorrow.
          </h2>
          <p className="contract-hire-description">
            Our contract hiring solution provides flexible recruitment to suit
            any situation, covering both long- and short-term requirements
            through our extensive database of skilled contract workers. With
            exceptional candidates, cost-effective rates, and fast response
            times, we are here for your immediate resource needs on any project,
            with no employment-related costs.
          </p>
          <button className="contract-hire-button">
            <Link to="/contact-us">
              LEARN MORE <FaArrowRight />{" "}
            </Link>
          </button>
        </div>
        <div className="contract-hire-image">
          <img src={contractHireImage} alt="Contract Hire" />
        </div>
      </motion.div>
    </section>
  );
};

export default ContractHire;
