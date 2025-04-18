import React from "react";
import "../../styles/Mainpage Styles/Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import humanResource from "../../assets/homepage assets/carousel/human-resource.jpg";
import softwareIndustry from "../../assets/homepage assets/carousel/software-industry.jpg";
import telecommunication from "../../assets/homepage assets/carousel/telecommunication.jpg";
import industries from "../../assets/homepage assets/carousel/all-industries.png";

const slides = [
  {
    heading: "Get Hiring Solutions",
    title: "Helping Businesses Find Top Talent, Effortlessly!",
    description: "From Direct Hires to Contract Staffing & More.",
    image: humanResource,
    link: "/about-us",
  },
  {
    heading: "Work With Us",
    title: "Hire Smarter, Grow Faster!",
    description: "10+ Years of Excellence in Staffing.",
    image: softwareIndustry,
    link: "/contact-us",
  },
  {
    heading: "Find Talent",
    title: "Flexible Hiring for Every Need!",
    description: "Permanent or Temporary - we’ve got you covered.",
    image: telecommunication,
    link: "/services",
  },
  {
    heading: "Explore Industries",
    title: "Expert Hiring Across Key Industries!",
    description: "From IT & Engineering to Healthcare, Finance & More.",
    image: industries,
    link: "#industries-we-serve",
  },
];

const Carousel = ({ industriesRef }) => {
  const handleScroll = () => {
    if (industriesRef.current) {
      industriesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="carousel-container">
      <Swiper
        modules={[EffectFade, Autoplay, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        speed={2000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div
              className="carousel-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="carousel-content">
                <h3 className="carousel-heading">{slide.heading}</h3>
                <div className="carousel-title-container">
                  <h2 className="carousel-title">{slide.title}</h2>
                </div>
                <p className="carousel-description">{slide.description}</p>
                <hr />
                {slide.link === "#industries-we-serve" ? (
                  <button onClick={handleScroll} className="carousel-button">
                    KNOW MORE
                  </button>
                ) : (
                  <a href={slide.link} className="carousel-button">
                    KNOW MORE
                  </a>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
