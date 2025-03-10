import React from "react";
import "../styles/Rpo.css";
import rpoImage from "../assets/services assets/recruitment-process-outsourcing.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const RPO = () => {
  return (
    <section className="rpo-container">
      <motion.div
        className="rpo-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="rpo-text">
          <h4 className="rpo-title">RECRUITMENT PROCESS OUTSOURCING</h4>
          <h2 className="rpo-heading">
            Optimizing Your Hiring <br /> With Expertise.
          </h2>
          <p className="rpo-description">
            Our RPO solutions streamline your hiring process by managing talent
            acquisition end-to-end. From sourcing and screening to onboarding,
            we optimize recruitment strategies to improve efficiency, reduce
            costs, and secure top-tier candidates for your organization.
          </p>
          <Link to="/contact-us" className="rpo-button">
            LEARN MORE <FaArrowRight />
          </Link>
        </div>
        <div className="rpo-image">
          <img src={rpoImage} alt="Recruitment Process Outsourcing" />
        </div>
      </motion.div>
    </section>
  );
};

export default RPO;
