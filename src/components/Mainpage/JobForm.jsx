import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/Mainpage Styles/JobForm.css";
import Swal from "sweetalert2";
import jobFormImage from "../../assets/Job form assets/job-form.jpg";
import { motion } from "framer-motion";

const JobForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const jobTitle = queryParams.get("title") || "";
  const jobLocation = queryParams.get("location") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    jobDetails: `${jobTitle} - ${jobLocation}`,
    experience: "",
    contact: "",
    coverLetter: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setFormData({ ...formData, resume: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formDataToSend = new FormData(event.target);
    formDataToSend.append("access_key", "2a53a327-68d0-450d-92b3-0d4ce175b269");
    formDataToSend.append(
      "subject",
      `Job Application for ${jobTitle} at ${jobLocation}`
    );

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Application Submitted!",
        text: "We have received your application. We'll get in touch soon!",
        icon: "success",
        confirmButtonText: "OK",
      });
      event.target.reset();
      setFormData({
        name: "",
        email: "",
        jobDetails: `${jobTitle} - ${jobLocation}`,
        experience: "",
        contact: "",
        coverLetter: "",
        resume: null,
      });
    } else {
      console.error("Web3Forms Error:", res);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "Something went wrong. Please try again.",
        confirmButtonText: "Try Again",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      <div className="job-form-container">
        <div className="job-form-image-container">
          <img src={jobFormImage} alt="apply now" className="job-form-image" />
        </div>
        <div className="job-form-content">
          <h2>Apply for This Job</h2>
          <p>Fill in your details and submit your application.</p>
          <form onSubmit={onSubmit} className="job-form">
            <input
              type="text"
              name="jobDetails"
              value={formData.jobDetails}
              disabled
            />
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="contact"
              placeholder="Enter your contact number"
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="experience"
              placeholder="Years of Experience"
              onChange={handleChange}
              required
            />
            <textarea
              name="coverLetter"
              placeholder="Write a brief cover letter"
              onChange={handleChange}
              required
            />

            <button type="submit">Submit Application</button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default JobForm;
