import React, { useState } from "react";
import "../../styles/Mainpage Styles/Services.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import servicesImg from "../../assets/services assets/services.jpg";
import { motion } from "framer-motion";

const staffingSolutions = [
  {
    title: "Permanent Hiring",
    description: "Secure top talent for long-term roles.",
    link: "/services/permanent-hiring",
  },
  {
    title: "Temporary Hiring",
    description: "Flexible staffing for short-term needs.",
    link: "/services/temporary-hiring",
  },
  {
    title: "Contract Hiring",
    description: "Hire skilled professionals on contract.",
    link: "/services/contract-hiring",
  },
  {
    title: "Recruitment Process Outsourcing (RPO)",
    description: "End-to-end hiring process management.",
    link: "/services/recruitment-process-outsourcing",
  },
  {
    title: "Contract to Hire Services",
    description: "Transition from contract to full-time.",
    link: "/services/contract-to-hire",
  },
  {
    title: "Consulting Services",
    description: "Expert guidance for better hiring.",
    link: "/services/consulting",
  },
  {
    title: "Executive Hiring",
    description: "Find top leaders and executives.",
    link: "/services/executive-hiring",
  },
  {
    title: "Specialized Hiring",
    description: "Industry-specific talent acquisition.",
    link: "/services/specialized-hiring",
  },
];

const Services = () => {
  return (
    <div className="our-services-container">
      <img src={servicesImg} alt="Our Services" className="services-image" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="our-services-header">
          <p className="our-services-subtitle">WHAT WE DO</p>
          <h2 className="our-services-title">
            Discover Our Comprehensive Staffing Solutions
          </h2>
        </div>

        <div className="our-services-grid">
          {staffingSolutions.map((solution, index) => (
            <div
              key={index}
              className={`our-services-card ${
                index % 2 === 0 ? "blue-card" : "white-card"
              }`}
            >
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <Link to={solution.link} className="learn-more">
                LEARN MORE <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
