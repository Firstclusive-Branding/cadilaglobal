import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../styles/JobCarousel.css";
import {
  FaMoneyBill,
  FaBuilding,
  FaArrowRight,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";

const jobListings = [
  {
    title: "Digital Marketing Senior",
    salary: "Negotiable",
    location: "Work From Office",
    description: "Drive campaigns and brand growth successfully.",
    image: "https://picsum.photos/400/250?random=1",
  },
  {
    title: "Python Developer",
    salary: "Negotiable",
    location: "Work From Office",
    description: "Build innovative solutions with cutting-edge technology.",
    image: "https://picsum.photos/400/250?random=2",
  },
  {
    title: "PHP Developer",
    salary: "Negotiable",
    location: "Work From Office",
    description: "Develop dynamic web applications with expertise.",
    image: "https://picsum.photos/400/250?random=3",
  },
  {
    title: "UI/UX Designer",
    salary: "Negotiable",
    location: "Remote",
    description: "Create seamless and engaging user experiences.",
    image: "https://picsum.photos/400/250?random=4",
  },
  {
    title: "Project Manager",
    salary: "Negotiable",
    location: "Work From Office",
    description: "Manage projects and lead cross-functional teams.",
    image: "https://picsum.photos/400/250?random=5",
  },
  {
    title: "Data Analyst",
    salary: "Negotiable",
    location: "Remote",
    description: "Analyze data trends and provide insights.",
    image: "https://picsum.photos/400/250?random=6",
  },
  {
    title: "Software Engineer",
    salary: "Negotiable",
    location: "Work From Office",
    description: "Develop high-performance software solutions.",
    image: "https://picsum.photos/400/250?random=7",
  },
  {
    title: "DevOps Engineer",
    salary: "Negotiable",
    location: "Hybrid",
    description: "Ensure smooth deployments and CI/CD pipelines.",
    image: "https://picsum.photos/400/250?random=8",
  },
  {
    title: "Cyber Security Specialist",
    salary: "Negotiable",
    location: "Remote",
    description: "Protect and secure business data and networks.",
    image: "https://picsum.photos/400/250?random=9",
  },
];

const JobCarousel = () => {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, []);

  return (
    <div className="job-carousel">
      <div className="job-carousel-header">
        <div className="job-carousel-header-content">
          <p className="job-carousel-subtitle">FEATURED JOB OPENINGS</p>
          <h2 className="job-carousel-title">
            Explore Our Handpicked Selection Of Job Openings
          </h2>
        </div>
        <div className="job-carousel-nav-buttons">
          <button ref={prevRef} className="job-carousel-prev-button">
            <FaChevronLeft />
          </button>
          <button ref={nextRef} className="job-carousel-next-button">
            <FaChevronRight />
          </button>
        </div>
      </div>

      <Swiper
        ref={swiperRef}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        loop={true}
        breakpoints={{
          1024: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          425: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="job-carousel-cards"
      >
        {jobListings.map((job, index) => (
          <SwiperSlide key={index}>
            <div className="job-carousel-card">
              <img
                src={job.image}
                alt={job.title}
                className="job-carousel-image"
              />
              <div className="job-carousel-content">
                <h3 className="job-carousel-title">{job.title}</h3>
                <div className="job-carousel-details">
                  <span className="job-carousel-salary">
                    <FaMoneyBill className="job-carousel-details-icon" />{" "}
                    {job.salary}
                  </span>
                  <span className="job-carousel-location">
                    <FaBuilding className="job-carousel-details-icon" />{" "}
                    {job.location}
                  </span>
                </div>
                <p className="job-carousel-description">{job.description}</p>
                <button className="job-carousel-apply-button">
                  Apply Now <FaArrowRight />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default JobCarousel;
