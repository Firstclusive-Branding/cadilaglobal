import React from "react";
import "../../styles/Mainpage Styles/IndustriesWeServe.css";
import {
  FaLaptopCode,
  FaHospital,
  FaOilCan,
  FaBuilding,
  FaTruck,
  FaCalculator,
  FaSatellite,
  FaIndustry,
  FaBalanceScale,
  FaUtensils,
} from "react-icons/fa";

const industries = [
  { name: "Technology", icon: <FaLaptopCode /> },
  { name: "Healthcare", icon: <FaHospital /> },
  { name: "Oil and Gas", icon: <FaOilCan /> },
  { name: "Construction & Engineering", icon: <FaBuilding /> },
  { name: "Logistics & Transportation", icon: <FaTruck /> },
  { name: "Accounting and Financing", icon: <FaCalculator /> },
  { name: "Telecommunication", icon: <FaSatellite /> },
  { name: "Manufacturing", icon: <FaIndustry /> },
  { name: "Legal", icon: <FaBalanceScale /> },
  { name: "Food and Beverage", icon: <FaUtensils /> },
];

const IndustriesWeServe = () => {
  return (
    <div className="industries-container">
      <div className="industries-content">
        <h2>INDUSTRIES WE SERVE</h2>
        <p>
          We provide specialized staffing solutions across various industries,
          ensuring businesses get the right talent for their needs.
        </p>
        <div className="industries-grid">
          {industries.map((industry, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-card-icon">{industry.icon}</div>
              <p>{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustriesWeServe;
