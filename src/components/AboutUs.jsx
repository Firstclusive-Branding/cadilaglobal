import React from "react";
import "../styles/AboutUs.css";
import aboutUsMainImg from "../assets/homepage assets/homepage-about-us-1.jpg";
import aboutUsSubImg from "../assets/homepage assets/homepage-about-us-2.png";
import { FaPhoneAlt, FaCalendar } from "react-icons/fa";
import aboutUsCover from "../assets/About Us/about-us1.jpg";

function HomepageAboutUs() {
  return (
    <section className="about-us">
      <img src={aboutUsCover} alt="about us" className="about-us-cover" />
      <div className="about-us-section">
        <div className="about-us-container">
          <div className="about-us-image">
            <img
              src={aboutUsMainImg}
              alt="Team working"
              className="main-image"
            />
            <div className="overlay-image">
              <img src={aboutUsSubImg} alt="Discussion" />
            </div>

            <div className="phone-box">
              <div className="phone-icon-container">
                <FaPhoneAlt className="phone-icon" />
              </div>
              <div>
                <h4>GIVE US A RING</h4>
                <a href="tel:+18327579277">+1 832 757 9277</a>
              </div>
            </div>
          </div>

          <div className="about-us-content">
            <h5 className="about-title">ABOUT US</h5>
            <h2>Finding You The Leaders Of Tomorrow.</h2>
            <p>
              At Cadila Global, we understand local markets and cultures,
              allowing us to tailor our services to meet the unique needs of our
              clients. Our flexibility and agility enable us to deliver
              high-quality results at any scale. We are committed to exceeding
              expectations and fostering long-term business relationships
              through exceptional service.
            </p>
            <p>
              We specialize in Staffing Services - Engineering Staffing, IT
              Staffing, Administrative Staffing, Financial Staffing, Healthcare
              Staffing, Headhunting, Direct Hire Services, IT Staffing Services
              and Contract Hire Staffing.
            </p>
            <blockquote>
              <em>
                “Helping businesses find top talent to build a stronger future.”
              </em>
            </blockquote>

            <div className="business-info">
              <div className="business-icon">
                <span>
                  <FaCalendar className="calendar-icon" />
                </span>
              </div>
              <div>
                <h4>10+ Years Of Experience</h4>
                <p>
                  A decade of helping businesses hire top talent and connecting
                  professionals with the right opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageAboutUs;
