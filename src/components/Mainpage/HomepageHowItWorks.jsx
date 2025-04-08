import React from "react";
import "../../styles/Mainpage Styles/HomepageHowItWorks.css";
import howitworks from "../../assets/homepage assets/homepage-how-it-works.png";
const steps = [
  {
    number: "01",
    title: "Register an Account",
    description:
      "Sign up and create your profile to get started. It only takes a few minutes!",
  },
  {
    number: "02",
    title: "Find Your Job",
    description:
      "Browse through a variety of job opportunities that match your skills and interests.",
  },
  {
    number: "03",
    title: "Apply with Confidence",
    description:
      "Submit your application and take the next step toward your career goals.",
  },
];

const HomepageHowItWorks = () => {
  return (
    <div className="how-it-works-container">
      <div className="how-it-works-header">
        <img
          src={howitworks}
          alt="How it works"
          className="how-it-works-image"
        />
        <div className="how-it-works-text">
          <p className="how-it-works-subtitle">HOW IT WORKS</p>
          <h2 className="how-it-works-title">
            Your Dream Job In 3 Simple Steps
          </h2>
        </div>
      </div>

      <div className="how-it-works-steps">
        {steps.map((step, index) => (
          <div key={index} className="how-it-works-step">
            <p className="step-number">{step.number}</p>
            <p className="step-title">{step.title}</p>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomepageHowItWorks;
