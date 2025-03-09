import React from "react";
import "../styles/HireTalent.css";
import Hiretalent from "../assets/hire talent assets/hire-talent.jpg";
import { motion } from "framer-motion";

const HireTalent = () => {
  return (
    <div className="hire-talent-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <img src={Hiretalent} alt="Hire Talent" className="hire-talent-image" />
        <div className="hire-talent-content">
          <div className="hire-talent-left">
            <h3 className="hire-talent-subtitle">Find the Right Candidates</h3>
            <h1 className="hire-talent-title">Hire Top Talent</h1>
            <p className="hire-talent-description">
              Submit your hiring requirements, and we will connect you with
              qualified candidates that match your needs.
            </p>
          </div>
          <div className="hire-talent-right">
            <form className="hire-talent-form">
              <input type="text" placeholder="Enter company name" required />

              <input type="email" placeholder="Enter your email" required />

              <input type="text" placeholder="Enter job role" required />

              <textarea
                placeholder="Describe job requirements"
                required
              ></textarea>

              <input type="tel" placeholder="Enter contact number" required />

              <button type="submit">Submit Requirement</button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HireTalent;
