import React from "react";
import "../styles/HomepageWhyPartnerWithUs.css";
import partnerImage from "../assets/homepage assets/homepage-why-partner-with-us.png";
import partnerImage2 from "../assets/homepage assets/homepage-why-partner-with-us-2.png";
import { FaArrowRight } from "react-icons/fa";

const benefits = [
  {
    title: "Industry Specialization",
    description: "Expert staffing solutions for diverse industry needs.",
  },
  {
    title: "Industry-Specific",
    description: "Tailored staffing solutions for your industry’s needs.",
  },
  {
    title: "International Recruitment",
    description: "Tailored staffing solutions for your industry’s needs.",
  },
  {
    title: "Inclusion Hiring",
    description: "Diverse and inclusive hiring for equal opportunities.",
  },
];

const HomepageWhyPartnerWithUs = () => {
  return (
    <div className="why-partner-container">
      <div className="why-partner-content">
        <div className="why-partner-text">
          <p className="why-partner-subtitle">WHY PARTNER WITH US</p>
          <h2 className="why-partner-title">
            Experience Our Industry Expertise & Personalized Approach
          </h2>
          <div className="why-partner-image-mobile">
            <img src={partnerImage2} alt="Why Partner With Us" />
          </div>
          <p className="why-partner-description">
            Experience our industry expertise, personalized approach, and
            commitment to delivering top talent for your business success.
          </p>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>

          <button className="get-started-btn">
            GET STARTED <FaArrowRight />
          </button>
        </div>

        <div className="why-partner-image">
          <img src={partnerImage} alt="Why Partner With Us" />
        </div>
      </div>
    </div>
  );
};

export default HomepageWhyPartnerWithUs;
