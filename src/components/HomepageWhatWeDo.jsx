import React, { useState } from "react";
import "../styles/HomepageWhatWeDo.css";
import { FaArrowRight } from "react-icons/fa";

const staffingSolutions = [
  {
    title: "Direct Hire Staffing",
    description: "Permanent employee placement service",
  },
  {
    title: "Contract & Temporary Staffing",
    description: "Short-term workforce recruitment solutions",
  },
  {
    title: "IT & Tech Staffing",
    description: "Specialized tech talent acquisition",
  },
  {
    title: "Engineering & Manufacturing Staffing",
    description: "Skilled engineers & production hires",
  },
  {
    title: "Healthcare & Medical Staffing",
    description: "Medical professionals staffing services",
  },
  {
    title: "Finance & Administrative Staffing",
    description: "Financial & office support recruitment",
  },
  {
    title: "Executive Search & Leadership Hiring",
    description: "Senior-level & C-suite recruitment",
  },
  {
    title: "High-Volume & Bulk Hiring",
    description: "Mass hiring for large needs",
  },
  {
    title: "Recruitment Process Outsourcing (RPO)",
    description: "End-to-end hiring process management",
  },
];

const HomepageWhatWeDo = () => {
  const [showAll, setShowAll] = useState(false);

  const initialSolutions = staffingSolutions.slice(
    0,
    staffingSolutions.length - 3
  );
  const lastThreeSolutions = staffingSolutions.slice(
    staffingSolutions.length - 3
  );

  return (
    <div className="what-we-do-container">
      <p className="what-we-do-subtitle">WHAT WE DO</p>
      <h2 className="what-we-do-title">
        Discover Our Comprehensive Staffing Solutions
      </h2>

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
            <a href="#" className="learn-more">
              LEARN MORE <FaArrowRight />
            </a>
          </div>
        ))}
      </div>

      <div
        className={`extra-categories-container ${
          showAll ? "show-categories" : ""
        }`}
      >
        <div className="extra-categories">
          {lastThreeSolutions.map((solution, index) => (
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
              <a href="#" className="learn-more">
                LEARN MORE <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>

      <button
        className="browse-categories-btn"
        onClick={() => setShowAll(!showAll)}
      >
        {showAll ? "HIDE CATEGORIES" : "BROWSE ALL CATEGORIES"} <FaArrowRight />
      </button>
    </div>
  );
};

export default HomepageWhatWeDo;
