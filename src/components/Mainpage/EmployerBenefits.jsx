import React from "react";
import "../../styles/Mainpage Styles/EmployerBenefits.css";
import employerBenefitsImg from "../../assets/homepage assets/employer-benefits.png";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const EmployerBenefits = () => {
  return (
    <section className="employer-benefits-section">
      <div className="employer-benefits-content">
        <h5 className="employer-benefits-subtitle">EMPLOYER BENEFITS</h5>
        <h2 className="employer-benefits-title">
          Experience the Advantages of Partnering with Us
        </h2>
        <p className="employer-benefits-description">
          We help businesses build high-performing teams with top talent,
          streamlined hiring and customized workforce solutions. Partner with us
          for a faster, smarter and more effective hiring experience.
        </p>
        <Link to="/contact-us" className="employer-benefits-btn">
          LET’S HIRE <FaArrowRight />{" "}
        </Link>
      </div>
      <div className="employer-benefits-container">
        <div className="employer-benefits-image">
          <img src={employerBenefitsImg} alt="Employer Benefits" />
        </div>

        <div className="employer-benefits-cards">
          <div className="employer-benefits-card">
            <h4>Effortless Hiring</h4>
            <p>
              Save time and resources with our seamless recruitment process.
            </p>
          </div>
          <div className="employer-benefits-card">
            <h4>Quality Talent Access</h4>
            <p>
              Connect with top-tier professionals tailored to your industry.
            </p>
          </div>
          <div className="employer-benefits-card">
            <h4>Flexible Workforce Solutions</h4>
            <p>Scalable hiring to meet your evolving business needs.</p>
          </div>
          <div className="employer-benefits-card">
            <h4>Long-Term Hiring Success</h4>
            <p>Find talent that stays and grows with your company.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerBenefits;
