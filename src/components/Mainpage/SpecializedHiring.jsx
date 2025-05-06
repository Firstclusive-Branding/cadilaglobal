import React, { useEffect } from "react";
import "../../styles/Mainpage Styles/SpecializedHiring.css";
import specializedHiringImage from "../../assets/services assets/specialized-hiring.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const SpecializedHiring = () => {
  useEffect(() => {
    document.title = `Specialized Hiring - Cadila Global LLC`;
  }, []);

  return (
    <section className="specialized-hiring-container">
      <motion.div
        className="specialized-hiring-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="specialized-hiring-text">
          <h4 className="specialized-hiring-title">SPECIALIZED HIRING</h4>
          <h2 className="specialized-hiring-heading">
            The Right Talent for <br /> Niche Roles.
          </h2>
          <p className="specialized-hiring-description">
            Our specialized hiring solutions cater to niche industries and
            hard-to-fill roles. We leverage deep industry expertise to source
            highly skilled professionals, ensuring the right fit for technical,
            executive, or industry-specific positions.
          </p>
          <Link to="/contact-us" className="specialized-hiring-button">
            LEARN MORE <FaArrowRight />
          </Link>
        </div>
        <div className="specialized-hiring-image">
          <img src={specializedHiringImage} alt="Specialized Hiring" />
        </div>
      </motion.div>
    </section>
  );
};

export default SpecializedHiring;
