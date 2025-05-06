import React, { useEffect } from "react";
import "../../styles/Mainpage Styles/TemporaryHiring.css";
import temporaryHiringImage from "../../assets/services assets/temporary-hiring.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const TemporaryHiring = () => {
  useEffect(() => {
    document.title = `Temporary Hiring - Cadila Global LLC`;
  }, []);

  return (
    <section className="temporary-hiring-container">
      <motion.div
        className="temporary-hiring-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="temporary-hiring-text">
          <h4 className="temporary-hiring-title">TEMPORARY HIRING</h4>
          <h2 className="temporary-hiring-heading">
            Agile Workforce Solutions <br /> for Your Growing Needs.
          </h2>
          <p className="temporary-hiring-description">
            Our temporary hiring services provide businesses with skilled
            professionals on short notice, ensuring seamless workforce
            management. Whether for seasonal projects or sudden demand spikes,
            we offer cost-effective and efficient staffing solutions without
            long-term commitments.
          </p>
          <Link to="/contact-us" className="temporary-hiring-button">
            LEARN MORE <FaArrowRight />
          </Link>
        </div>
        <div className="temporary-hiring-image">
          <img src={temporaryHiringImage} alt="Temporary Hiring" />
        </div>
      </motion.div>
    </section>
  );
};

export default TemporaryHiring;
