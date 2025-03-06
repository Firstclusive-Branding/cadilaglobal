import React from "react";
import "../styles/EmployerBenefits.css";
import employerBenefitsImg from "../assets/homepage assets/employer-benefits.png";

const EmployerBenefits = () => {
  return (
    <section className="employer-benefits-section">
      <div className="employer-benefits-content">
        <h5 className="employer-benefits-subtitle">EMPLOYER BENEFITS</h5>
        <h2 className="employer-benefits-title">
          Experience The Benefits Of Partnering
        </h2>
        <p className="employer-benefits-description">
          Experience the advantages of partnering with us, including top talent,
          streamlined hiring, and customized workforce solutions.
        </p>
        <button className="employer-benefits-btn">LET FIND JOBS →</button>
      </div>
      <div className="employer-benefits-container">
        <div className="employer-benefits-image">
          <img src={employerBenefitsImg} alt="Employer Benefits" />
        </div>

        <div className="employer-benefits-cards">
          <div className="employer-benefits-card">
            <h4>Work-Life Balance</h4>
            <p>Achieve harmony between work and life.</p>
          </div>
          <div className="employer-benefits-card">
            <h4>Valuing Our Team</h4>
            <p>Empowering, supporting, and appreciating talent.</p>
          </div>
          <div className="employer-benefits-card">
            <h4>A Culture of Care</h4>
            <p>Supportive, inclusive, and growth-oriented.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployerBenefits;
