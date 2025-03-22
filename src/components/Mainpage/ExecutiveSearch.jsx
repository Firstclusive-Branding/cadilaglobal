import React from "react";
import "../../styles/Mainpage Styles/ExecutiveSearch.css";
import executiveSearchImage from "../../assets/services assets/executive-search.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ExecutiveSearch = () => {
  return (
    <section
      className="executive-search-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div
        className="executive-search-content"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="executive-search-text">
          <h4 className="executive-search-title">EXECUTIVE SEARCH</h4>
          <h2 className="executive-search-heading">
            Finding You The Leaders <br /> Of Tomorrow.
          </h2>
          <p className="executive-search-description">
            Welcome to Cadila Global Solutions, our executive search services
            are designed to elevate decades of experience in executive search
            and recruitment, we've worked with clients across a wide range of
            industries and helped them transform and thrive. We can do the same
            for you.
          </p>
          <button className="executive-search-button">
            <Link to="/careers">LET'S FIND JOBS →</Link>
          </button>
        </div>
        <div className="executive-search-image">
          <img src={executiveSearchImage} alt="Executive Search" />
        </div>
      </motion.div>
    </section>
  );
};

export default ExecutiveSearch;
