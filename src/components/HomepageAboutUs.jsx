import React from "react";
import "../styles/HomepageAboutUs.css";
import aboutUsMainImg from "../assets/homepage assets/homepage-about-us-1.jpg";
import aboutUsSubImg from "../assets/homepage assets/homepage-about-us-2.png";
import { FaPhoneAlt, FaCalendar } from "react-icons/fa";
import { MdArrowRightAlt } from "react-icons/md";

function HomepageAboutUs() {
  return (
    <section className="about-us-section" id="about-us">
      <div className="about-us-container">
        <div className="about-us-image">
          <img src={aboutUsMainImg} alt="Team working" className="main-image" />
          <div className="overlay-image">
            <img src={aboutUsSubImg} alt="Discussion" />
          </div>

          <div className="phone-box">
            <div className="phone-icon-container">
              <FaPhoneAlt className="phone-icon" />
            </div>
            <div>
              <h4>Telephone</h4>
              <a href="tel:+18327579277">+1 832 757 9277</a>
            </div>
          </div>
        </div>

        <div className="about-us-content">
          <h5 className="about-title">ABOUT US</h5>
          <h2>Finding You The Leaders Of Tomorrow.</h2>
          <p>
            CADILA GLOBAL SOLUTION understands the local markets and cultures
            and tailors its services to meet client needs. Our clients value our
            flexibility and agility, enabling us to deliver high-quality results
            at any scale. CADILA GLOBAL SOLUTION ensures services that exceed
            expectations, guaranteeing long-term business relationships. We
            specialize in Engineering Staffing, IT Staffing, Administrative
            Staffing, Financial Staffing, Healthcare Staffing, and more.
          </p>
          <blockquote>
            <em>
              “Empowering businesses with top talent for a brighter future.”
            </em>
          </blockquote>

          <div className="business-info">
            <div className="business-icon">
              <span>
                <FaCalendar className="calendar-icon" />
              </span>
            </div>
            <div>
              <h4>5 Years Of Business</h4>
              <p>5 Years of Excellence in Connecting Talent & Opportunities!</p>
            </div>
          </div>

          <button className="about-us-button">
            ABOUT US <MdArrowRightAlt />
          </button>
        </div>
      </div>
    </section>
  );
}

export default HomepageAboutUs;
