import React from "react";
import "../styles/HiringMadeEasy.css";
import hiringmadeeasy from "../assets/homepage assets/hiring-made-easy.png";
const steps = [
  {
    number: "01",
    title: "Share Job Requirements",
    description:
      "Tell us what you're looking for, and we’ll craft a hiring strategy tailored to your needs.",
  },
  {
    number: "02",
    title: "Talent Screening & Shortlisting",
    description:
      "We source, vet, and shortlist top candidates that align with your job roles.",
  },
  {
    number: "03",
    title: "Interview & Selection",
    description:
      "Seamless interview coordination, ensuring you meet only the best candidates.",
  },
  {
    number: "04",
    title: "Hassle-Free Onboarding",
    description:
      "We assist in final hiring steps, making the transition smooth for both you and the new hire.",
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
            Learn How We Deliver the Right Talent for Your Business
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
