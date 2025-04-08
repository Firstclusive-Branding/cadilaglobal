import React from "react";
import "../../styles/Mainpage Styles/HomepageJobApplyBanner.css";
import { FaQuoteRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const HomepageJobApplyBanner = () => {
  return (
    <section className="homepage-jobapply-banner">
      <div className="homepage-jobapply-quote-container">
        <div>
          <p className="homepage-jobapply-quote-text">
            “ The future depends on what you do today. Take the first step
            towards success. ”
          </p>
        </div>
        <div>
          <FaQuoteRight className="homepage-jobapply-quote-icon" />
        </div>
      </div>

      <div className="homepage-jobapply-content">
        <h2 className="homepage-jobapply-title">
          Let Us Help You Find The Perfect Job Or The Ideal Candidate
        </h2>
        <Link to="/contact-us" className="homepage-jobapply-btn">
          CONTACT US <FaArrowRight />
        </Link>
      </div>
    </section>
  );
};

export default HomepageJobApplyBanner;
