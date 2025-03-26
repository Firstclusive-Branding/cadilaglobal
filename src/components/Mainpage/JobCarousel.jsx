// import React, { useRef, useEffect } from "react";
// import "../../styles/Mainpage Styles/JobCarousel.css";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import {
//   FaMoneyBill,
//   FaMoneyCheckAlt,
//   FaArrowRight,
//   FaChevronRight,
//   FaChevronLeft,
//   FaBriefcase,
// } from "react-icons/fa";
// import { FaLocationDot } from "react-icons/fa6";

// import { Link } from "react-router-dom";

// const jobListings = [
//   {
//     jobtitle: "Full Stack Developer",
//     experience: "2",
//     salary: "$3500",
//     location: "Hyderabad, India",
//     jobdescription: "Build end-to-end scalable web applications.",
//   },
//   {
//     jobtitle: "UI/UX Designer",
//     experience: "1",
//     salary: "$2800",
//     location: "Remote",
//     jobdescription: "Design intuitive and user-friendly interfaces.",
//   },
//   {
//     jobtitle: "Project Manager",
//     experience: "4",
//     salary: "$5000",
//     location: "Dubai, UAE",
//     jobdescription: "Oversee project timelines and team collaboration.",
//   },
//   {
//     jobtitle: "DevOps Engineer",
//     experience: "3",
//     salary: "$4200",
//     location: "Hybrid - Bangalore",
//     jobdescription: "Maintain CI/CD pipelines and cloud infrastructure.",
//   },
//   {
//     jobtitle: "Mobile App Developer",
//     experience: "2",
//     salary: "$3600",
//     location: "Berlin, Germany",
//     jobdescription: "Develop cross-platform mobile applications.",
//   },
//   {
//     jobtitle: "Digital Marketing Specialist",
//     experience: "2",
//     salary: "$3000",
//     location: "Mumbai, India",
//     jobdescription: "Create and execute digital marketing strategies.",
//   },
//   {
//     jobtitle: "Data Scientist",
//     experience: "3",
//     salary: "$6000",
//     location: "New York, USA",
//     jobdescription: "Leverage data for actionable business decisions.",
//   },
//   {
//     jobtitle: "Backend Developer",
//     experience: "2",
//     salary: "$3700",
//     location: "Chennai, India",
//     jobdescription: "Build robust APIs and server-side logic.",
//   },
//   {
//     jobtitle: "Content Writer",
//     experience: "1",
//     salary: "$2000",
//     location: "Remote",
//     jobdescription: "Craft compelling content for digital platforms.",
//   },
//   {
//     jobtitle: "Cybersecurity Analyst",
//     experience: "3",
//     salary: "$4800",
//     location: "Singapore",
//     jobdescription: "Safeguard systems and data from threats.",
//   },
// ];

// const JobCarousel = () => {
//   const swiperRef = useRef(null);
//   const prevRef = useRef(null);
//   const nextRef = useRef(null);

//   useEffect(() => {
//     if (swiperRef.current) {
//       swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
//       swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
//       swiperRef.current.swiper.navigation.init();
//       swiperRef.current.swiper.navigation.update();
//     }
//   }, []);

//   return (
//     <div className="job-carousel">
//       <div className="job-carousel-header">
//         <div className="job-carousel-header-content">
//           <p className="job-carousel-subtitle">FEATURED JOB OPENINGS</p>
//           <h2 className="job-carousel-title">
//             Explore Our Handpicked Selection Of Job Openings
//           </h2>
//         </div>
//         <div className="job-carousel-nav-buttons">
//           <button ref={prevRef} className="job-carousel-prev-button">
//             <FaChevronLeft />
//           </button>
//           <button ref={nextRef} className="job-carousel-next-button">
//             <FaChevronRight />
//           </button>
//         </div>
//       </div>

//       <Swiper
//         ref={swiperRef}
//         modules={[Navigation, Pagination, Autoplay]}
//         spaceBetween={20}
//         slidesPerView={3}
//         navigation={{
//           prevEl: prevRef.current,
//           nextEl: nextRef.current,
//         }}
//         pagination={{ clickable: true }}
//         loop={true}
//         breakpoints={{
//           1024: { slidesPerView: 3 },
//           768: { slidesPerView: 2 },
//           480: { slidesPerView: 1 },
//           0: { slidesPerView: 1 },
//         }}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         className="job-carousel-cards"
//       >
//         {jobListings.map((job, index) => (
//           <SwiperSlide key={index}>
//             <div className="job-carousel-card">
//               <div className="job-carousel-content">
//                 <h3 className="job-carousel-title">{job.jobtitle}</h3>
//                 <div className="job-carousel-details">
//                   <span>
//                     <FaBriefcase className="job-carousel-details-icon" />{" "}
//                     {job.experience}+ yrs
//                   </span>
//                   <span>
//                     <FaMoneyCheckAlt className="job-carousel-details-icon" />{" "}
//                     {job.salary}
//                   </span>
//                   <span>
//                     <FaLocationDot className="job-carousel-details-icon" />{" "}
//                     {job.location}
//                   </span>
//                 </div>
//                 <p className="job-carousel-description">{job.jobdescription}</p>
//                 <Link
//                   to={`/find-jobs/apply?title=${job.jobtitle}&location=${job.location}`}
//                   className="job-carousel-apply-button"
//                 >
//                   Apply Now <FaArrowRight />
//                 </Link>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default JobCarousel;

import React, { useRef, useEffect, useState } from "react";
import "../../styles/Mainpage Styles/JobCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  FaMoneyCheckAlt,
  FaArrowRight,
  FaChevronRight,
  FaChevronLeft,
  FaBriefcase,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import axios from "axios";

const JobCarousel = () => {
  const [jobListings, setJobListings] = useState([]);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // API call to fetch jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/user/jobs/getall`
        );
        const { data } = response.data;
        // Only show approved jobs
        const approvedJobs = data.filter((job) => job.approved === true);
        setJobListings(approvedJobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  // Swiper navigation
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.params.navigation.prevEl = prevRef.current;
      swiperRef.current.swiper.params.navigation.nextEl = nextRef.current;
      swiperRef.current.swiper.navigation.init();
      swiperRef.current.swiper.navigation.update();
    }
  }, [jobListings]);

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
          480: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="job-carousel-cards"
      >
        {jobListings.map((job, index) => (
          <SwiperSlide key={job._id || index}>
            <div className="job-carousel-card">
              <div className="job-carousel-content">
                <h3 className="job-carousel-title">{job.jobtitle}</h3>
                <div className="job-carousel-details">
                  <span>
                    <FaBriefcase className="job-carousel-details-icon" />
                    {job.experience}
                  </span>
                  <span>
                    <FaMoneyCheckAlt className="job-carousel-details-icon" />
                    {job.salary}
                  </span>
                  <span>
                    <FaLocationDot className="job-carousel-details-icon" />
                    {job.location}
                  </span>
                </div>
                <p className="job-carousel-description">{job.jobdescription}</p>
                <Link
                  to={`/find-jobs/apply?title=${job.jobtitle}&location=${job.location}&jobid=${job._id}`}
                  className="job-carousel-apply-button"
                >
                  Apply Now <FaArrowRight />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default JobCarousel;
