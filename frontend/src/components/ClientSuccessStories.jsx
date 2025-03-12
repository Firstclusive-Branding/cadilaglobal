import React from "react";
import "../styles/HomepageSuccessStories.css";
import "../styles/ClientSuccessStories.css";
import client1 from "../assets/homepage assets/client-testimony-1.png";
import client2 from "../assets/homepage assets/client-testimony-2.png";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    image: client1,
    name: "Mark Thompson",
    role: "HR Director",
    review:
      "Finding skilled professionals used to be a challenge for us. Cadila Global understood our hiring needs and provided us with top-tier candidates who perfectly fit our company culture. Their efficiency and expertise saved us valuable time and resources.",
  },
  {
    image: client2,
    name: "Sarah Collins",
    role: "Talent Acquisition Manager",
    review:
      "We needed a reliable staffing partner for our rapid expansion. Cadila Global delivered highly qualified candidates in record time, allowing us to scale without any hiring bottlenecks. Their tailored approach and commitment to quality make them our go-to recruitment partner.",
  },
];

const ClientSuccessStories = () => {
  return (
    <div className="client-success-stories">
      <div className="success-stories-overlay"></div>
      <div className="success-stories-content">
        <p className="success-subtitle">CLIENT SUCCESS STORIES</p>
        <h2 className="success-title">
          Discover How Businesses Found the Right Talent with Cadila Global
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

export default ClientSuccessStories;
