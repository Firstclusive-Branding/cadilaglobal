import React from "react";
import "../styles/ConsultingServices.css";
import consultingServicesImage from "../assets/services assets/consulting-services.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ConsultingServices = () => {
  return (
    <section className="consulting-services-container">
      <motion.div
        className="consulting-services-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="consulting-services-text">
          <h4 className="consulting-services-title">CONSULTING SERVICES</h4>
          <h2 className="consulting-services-heading">
            Expert Guidance for <br /> Business Success.
          </h2>
          <p className="consulting-services-description">
            Our consulting services provide expert guidance on workforce
            strategies, talent acquisition, and HR optimization. We help
            businesses enhance recruitment processes, improve retention, and
            build a strong workforce aligned with their growth objectives.
          </p>
          <Link to="/contact-us" className="consulting-services-button">
            LEARN MORE <FaArrowRight />
          </Link>
        </div>
        <div className="consulting-services-image">
          <img src={consultingServicesImage} alt="Consulting Services" />
        </div>
      </motion.div>
    </section>
  );
};

export default ConsultingServices;
