import React from "react";
import "../styles/HomepageWhatWeDo.css";
import bgImage from "../assets/homepage assets/homepage-what-we-do.jpg";
import { FaPlay, FaArrowRight } from "react-icons/fa";

const HomepageWhatWeDo = () => {
  return (
    <div className="what-we-do-container">
      <p className="what-we-do-subtitle">WHAT WE DO</p>
      <h2 className="what-we-do-title">
        Discover Our Comprehensive Staffing Solutions
      </h2>

      <div className="what-we-do-grid">
        <div
          className="what-we-do-card video-card"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          <div className="play-button">
            <FaPlay />
          </div>
        </div>

        <div className="what-we-do-card white-card">
          <h3>Temporary Staffing</h3>
          <p>Flexible and reliable temporary staffing.</p>
          <a href="#" className="learn-more">
            LEARN MORE <FaArrowRight />
          </a>
        </div>

        <div className="what-we-do-card blue-card">
          <h3>Talent Acquisition</h3>
          <p>Efficient talent acquisition for business growth.</p>
          <a href="#" className="learn-more">
            LEARN MORE <FaArrowRight />
          </a>
        </div>
      </div>

      <button className="all-services-btn">
        BROUSE ALL CATEGORIES <FaArrowRight />
      </button>
    </div>
  );
};

export default HomepageWhatWeDo;
