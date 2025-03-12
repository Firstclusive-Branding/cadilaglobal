import React from "react";
import "../styles/HomepageJobCards.css";
import {
  FaLaptopCode,
  FaDatabase,
  FaBuilding,
  FaChartLine,
  FaTools,
  FaPhone,
  FaPaintBrush,
  FaUsers,
} from "react-icons/fa";

const jobCategories = [
  { title: "IT & Software", jobs: 234, icon: <FaLaptopCode /> },
  { title: "Technology", jobs: 179, icon: <FaDatabase /> },
  { title: "Government", jobs: 1602, icon: <FaBuilding /> },
  { title: "Accounting / Finance", jobs: 276, icon: <FaChartLine /> },
  { title: "Construction / Facilities", jobs: 191, icon: <FaTools /> },
  { title: "Tele-communications", jobs: 298, icon: <FaPhone /> },
  { title: "Design & Multimedia", jobs: 192, icon: <FaPaintBrush /> },
  { title: "Human Resource", jobs: 237, icon: <FaUsers /> },
];

const HomepageJobCards = () => {
  return (
    <div className="job-categories-container">
      <h2 className="job-categories-title">Job Categories</h2>
      <div className="job-categories-grid">
        {jobCategories.map((category, index) => (
          <div key={index} className="job-category-card">
            <div className="job-icon">{category.icon}</div>
            <p className="job-category-title">{category.title}</p>
            <p className="job-category-count">{category.jobs} Jobs</p>
          </div>
        ))}
      </div>
      <button className="browse-btn">Browse All Categories</button>
    </div>
  );
};

export default HomepageJobCards;
