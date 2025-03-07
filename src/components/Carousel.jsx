import React from "react";
import "../styles/Carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import accounting from "../assets/homepage assets/carousel/accounting-and-financing.jpg";
import construction from "../assets/homepage assets/carousel/construction-or-facilites.jpg";
import government from "../assets/homepage assets/carousel/government.jpg";
import humanResource from "../assets/homepage assets/carousel/human-resource.jpg";
import legalState from "../assets/homepage assets/carousel/legal-and-state.jpg";
import legal from "../assets/homepage assets/carousel/legal.jpg";
import logistics from "../assets/homepage assets/carousel/logistics.jpg";
import manufacturing from "../assets/homepage assets/carousel/manufacturing.jpg";
import marketing from "../assets/homepage assets/carousel/marketing.jpg";
import softwareIndustry from "../assets/homepage assets/carousel/software-industry.jpg";
import telecommunication from "../assets/homepage assets/carousel/telecommunication.jpg";
import healthcare from "../assets/homepage assets/carousel/us-healthcare.jpg";

const slides = [
  {
    heading: "Accounting & Finance",
    title: "Accounting & Financing",
    description:
      "Find jobs, create trackable resumes and enrich your applications. Carefully crafted after analyzing the needs of industries.",
    image: accounting,
    link: "#",
  },
  {
    heading: "Software Industry",
    title: "IT & Software",
    description:
      "Find jobs, create trackable resumes and enrich your applications. Carefully crafted after analyzing the needs of industries.",
    image: softwareIndustry,
    link: "#",
  },
  {
    heading: "Government Services",
    title: "Government",
    description:
      "Find jobs, create trackable resumes and enrich your applications. Carefully crafted after analyzing the needs of industries.",
    image: government,
    link: "#",
  },
  {
    heading: "Human Resources",
    title: "Human Resource",
    description:
      "Find jobs, create trackable resumes and enrich your applications. Carefully crafted after analyzing the needs of industries.",
    image: humanResource,
    link: "#",
  },
  {
    heading: "Construction & Facilities",
    title: "Construction / Facilities",
    description:
      "Find jobs, create trackable resumes and enrich your applications. Carefully crafted after analyzing the needs of industries.",
    image: construction,
    link: "#",
  },
  {
    heading: "Telecommunication",
    title: "Telecommunications",
    description:
      "Find jobs, create trackable resumes and enrich your applications. Carefully crafted after analyzing the needs of industries.",
    image: telecommunication,
    link: "#",
  },
  {
    heading: "US Healthcare",
    title: "Healthcare",
    description:
      "Find jobs, create trackable resumes and enrich your applications. Carefully crafted after analyzing the needs of industries.",
    image: healthcare,
    link: "#",
  },
  {
    heading: "Marketing & Sales",
    title: "Entertainment, Advertising and Marketing",
    description:
      "Find jobs, create trackable resumes and enrich your applications. Carefully crafted after analyzing the needs of industries.",
    image: marketing,
    link: "#",
  },
  {
    heading: "Legal & State Affairs",
    title: "Federal and State",
    description:
      "Find jobs, create trackable resumes and enrich your applications. Carefully crafted after analyzing the needs of industries.",
    image: legalState,
    link: "#",
  },
  {
    heading: "Logistics & Transport",
    title: "Logistics",
    description:
      "Find jobs, create trackable resumes and enrich your applications. Carefully crafted after analyzing the needs of industries.",
    image: logistics,
    link: "#",
  },
  {
    heading: "Manufacturing Industry",
    title: "Manufacturing",
    description:
      "Find jobs, create trackable resumes and enrich your applications. Carefully crafted after analyzing the needs of industries.",
    image: manufacturing,
    link: "#",
  },
  {
    heading: "Legal Consultation",
    title: "Legal",
    description:
      "Find jobs, create trackable resumes and enrich your applications. Carefully crafted after analyzing the needs of industries.",
    image: legal,
    link: "#",
  },
];

const Carousel = () => {
  return (
    <div className="carousel-container">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="carousel-slide"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="carousel-content">
                <h3 className="carousel-heading">{slide.heading}</h3>
                <h2 className="carousel-title">{slide.title}</h2>
                <p className="carousel-description">{slide.description}</p>
                <hr />
                <a href={slide.link} className="carousel-button">
                  KNOW MORE
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
