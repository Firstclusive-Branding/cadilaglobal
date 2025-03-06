import React from "react";
import "../styles/HiringMadeEasy.css";
import hiringmadeeasy from "../assets/homepage assets/hiring-made-easy.png";
const steps = [
  {
    number: "01",
    title: "Apply Opening Jobs",
    description: "Explore opportunities and submit applications.",
  },
  {
    number: "02",
    title: "Send Your CV",
    description: "Share your resume for job matching.",
  },
  {
    number: "03",
    title: "Interviewed",
    description: "Showcase your skills and impress recruiters.",
  },
  {
    number: "04",
    title: "Enjoy Join Jobs",
    description: "Start your new role and thrive in success.",
  },
];

const HiringMadeEasy = () => {
  return (
    <div className="hiring-made-easy-container">
      <div className="hiring-made-easy-header">
        <img
          src={hiringmadeeasy}
          alt="Hiring Made Easy"
          className="hiring-made-easy-image"
        />
        <div className="hiring-made-easy-text">
          <p className="hiring-made-easy-subtitle">
            Streamlined Hiring Made Easy
          </p>
          <h2 className="hiring-made-easy-title">
            Learn about our efficient and effective recruitment process
          </h2>
        </div>
      </div>

      <div className="hiring-made-easy-steps">
        {steps.map((step, index) => (
          <div key={index} className="hiring-made-easy-step">
            <p className="step-number">{step.number}</p>
            <p className="step-title">{step.title}</p>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HiringMadeEasy;
