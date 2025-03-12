import React, { useState } from "react";
import "../styles/HomepageWhatWeDo.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

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

const HomepageWhatWeDo = () => {
  const [showAll, setShowAll] = useState(false);

  const initialSolutions = staffingSolutions.slice(0, 4);
  const extraSolutions = staffingSolutions.slice(4);

  return (
    <div className="what-we-do-container">
      <div className="what-we-do-header">
        <p className="what-we-do-subtitle">WHAT WE DO</p>
        <h2 className="what-we-do-title">
          Discover Our Comprehensive Staffing Solutions
        </h2>
      </div>

      <div className="what-we-do-grid">
        {initialSolutions.map((solution, index) => (
          <div
            key={index}
            className={`what-we-do-card ${
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

      <div
        className={`extra-services-container ${showAll ? "show-services" : ""}`}
      >
        <div className="extra-services">
          {extraSolutions.map((solution, index) => (
            <div
              key={index}
              className={`what-we-do-card ${
                (initialSolutions.length + index) % 2 === 0
                  ? "blue-card"
                  : "white-card"
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
      </div>

      {/* Toggle Button */}
      <button
        className="browse-services-btn"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "HIDE SERVICES" : "SHOW ALL SERVICES"} <FaArrowRight />
      </button>
    </div>
  );
};

export default HomepageWhatWeDo;
