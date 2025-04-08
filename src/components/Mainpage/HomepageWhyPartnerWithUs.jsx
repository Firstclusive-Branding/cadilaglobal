import React from "react";
import "../../styles/Mainpage Styles/HomepageWhyPartnerWithUs.css";
import partnerImage from "../../assets/homepage assets/homepage-why-partner-with-us.png";
import partnerImage2 from "../../assets/homepage assets/homepage-why-partner-with-us-2.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const benefits = [
  {
    title: "Industry-Specific Expertise",
    description:
      "Customized recruitment strategies tailored for your business sector.",
  },
  {
    title: "Scalable Hiring Solutions",
    description:
      "Flexible staffing options for businesses of all sizes and industries.",
  },
  {
    title: "Global Talent Access",
    description: "Seamless international recruitment to expand your workforce.",
  },
  {
    title: "Diversity & Inclusion Hiring",
    description:
      "Helping you build strong, inclusive teams for long-term success.",
  },
];

const HomepageWhyPartnerWithUs = () => {
  return (
    <div className="why-partner-container">
      <div className="why-partner-content">
        <div className="why-partner-text">
          <p className="why-partner-subtitle">WHY PARTNER WITH US</p>
          <h2 className="why-partner-title">
            Industry Expertise & Tailored Hiring Solutions
          </h2>
          <div className="why-partner-image-mobile">
            <img src={partnerImage2} alt="Why Partner With Us" />
          </div>
          <p className="why-partner-description">
            We help businesses find, hire, and retain top talent through
            customized staffing solutions. Our deep industry knowledge and
            commitment to excellence ensure you get the right people to drive
            success.
          </p>

          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>

          <Link to="/contact-us" className="get-started-btn">
            GET IN TOUCH <FaArrowRight />
          </Link>
        </div>

        <div className="why-partner-image">
          <img src={partnerImage} alt="Why Partner With Us" />
        </div>
      </div>
    </div>
  );
};

export default HomepageWhyPartnerWithUs;
