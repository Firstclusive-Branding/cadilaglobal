import React from "react";
import "../../styles/Mainpage Styles/HomepageSuccessStories.css";
import user1 from "../../assets/homepage assets/homepage-success-stories-2.png";
import user2 from "../../assets/homepage assets/homepage-success-stories-3.png";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    image: user1,
    name: "Rebecca Swartz",
    role: "CANDIDATE",
    review:
      "I was at a crossroads in my career and needed professional guidance to make a successful transition. CADILA GLOBAL not only understood my unique situation but also tailored their services to meet my specific needs.",
  },
  {
    image: user2,
    name: "Jeffrey Montgomery",
    role: "CANDIDATE",
    review:
      "I can't express my gratitude enough to CADILA GLOBAL for their invaluable support in my job search journey. From refining my resume to providing personalized interview and coaching.",
  },
];

const HomepageSuccessStories = () => {
  return (
    <div className="success-stories-container">
      <div className="success-stories-overlay"></div>
      <div className="success-stories-content">
        <p className="success-subtitle">CANDIDATE SUCCESS STORIES</p>
        <h2 className="success-title">
          Discover Stories Of Candidates Who Found Their Dream Jobs
        </h2>
        <div className="testimonial-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-text">
                <i>{testimonial.review}</i>
              </p>
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="testimonial-image"
              />
              <p className="testimonial-name">{testimonial.name}</p>
              <p className="testimonial-role">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomepageSuccessStories;
