import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../../styles/Mainpage Styles/JobForm.css";
import Swal from "sweetalert2";
import jobFormImage from "../../assets/Job form assets/job-form.jpg";
import { motion } from "framer-motion";
import axios from "axios";

const JobForm = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const jobTitle = queryParams.get("title") || "";
  const jobLocation = queryParams.get("location") || "";
  const jobId = queryParams.get("jobid") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    experience: "",
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

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume) {
      Swal.fire("Please upload your CV", "", "warning");
      return;
    }

    try {
      // Step 1: Submit applicant basic info
      const createRes = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/user/jobapplicants/create`,
        {
          jobid: jobId,
          name: formData.name,
          email: formData.email,
          mobile: formData.contact,
          yearofexperience: formData.experience,
        }
      );

      const applicantId = createRes.data.data._id;

      // Step 2: Upload resume
      const cvForm = new FormData();
      cvForm.append("resume", formData.resume);

      await axios.post(
        `${
          import.meta.env.VITE_API_URL
        }/api/user/jobapplicants/upload/${applicantId}`,
        cvForm,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Success message
      Swal.fire({
        title: "Application Submitted!",
        text: "We have received your application.",
        icon: "success",
        confirmButtonText: "OK",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        contact: "",
        experience: "",
        resume: null,
      });
      e.target.reset();
    } catch (err) {
      console.error("Application error:", err);
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
          <p>Fill in your details and upload your CV.</p>
          <form onSubmit={onSubmit} className="job-form">
            <input
              type="text"
              name="jobDetails"
              value={`${jobTitle} - ${jobLocation}`}
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
              type="number"
              name="experience"
              placeholder="Years of Experience"
              onChange={handleChange}
              required
            />
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
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
