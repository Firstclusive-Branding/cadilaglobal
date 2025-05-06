import React, { useEffect } from "react";
import "../../styles/Mainpage Styles/PermanentHiring.css";
import permanenthiringImage from "../../assets/services assets/permanent-hiring.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const PermanentHiring = () => {
  useEffect(() => {
    document.title = `Permanent Hiring - Cadila Global LLC`;
  }, []);

  return (
    <section className="permanent-hiring-container">
      <motion.div
        className="permanent-hiring-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="permanent-hiring-text">
          <h4 className="permanent-hiring-title">PERMANENT HIRING</h4>
          <h2 className="permanent-hiring-heading">
            Finding You The Leaders <br /> Of Tomorrow.
          </h2>
          <p className="permanent-hiring-description">
            Our permanent hiring solutions connect you with skilled
            professionals who align with your company’s culture, vision, and
            long-term goals. With a strategic approach and industry expertise,
            we help you build a strong, future-ready workforce that drives
            success.
          </p>
          <Link to="/contact-us" className="permanent-hiring-button">
            LEARN MORE <FaArrowRight />
          </Link>
        </div>
        <div className="permanent-hiring-image">
          <img src={permanenthiringImage} alt="Permanent hiring" />
        </div>
      </motion.div>
    </section>
  );
};

export default PermanentHiring;
