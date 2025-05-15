import React, { useEffect, useRef, useState } from "react";
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

  const fileInputRef = useRef(null);

  useEffect(() => {
    document.title = `Job Application for ${jobTitle} - Cadila Global LLC`;
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    experience: "",
    resume: null,
    termsaccepted: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === "file") {
      setFormData({ ...formData, resume: files[0] });
    } else if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.resume) {
      Swal.fire("Resume Required", "Please upload your CV.", "warning");
      return;
    }

    setLoading(true);

    try {
      // Step 1: Create applicant
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/user/jobapplicants/create`,
        {
          jobid: jobId,
          name: formData.name,
          email: formData.email,
          mobile: formData.contact,
          yearofexperience: formData.experience,
          termsaccepted: formData.termsaccepted,
        }
      );

      const applicantId = res?.data?.data?._id;
      if (!applicantId) throw new Error("Failed to get applicant ID");

      // Step 2: Upload resume
      const form = new FormData();
      form.append("resume", formData.resume);

      await axios.post(
        `${
          import.meta.env.VITE_API_URL
        }/api/user/jobapplicants/upload/${applicantId}`,
        form,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      Swal.fire("Success", "Application submitted successfully!", "success");

      // Reset form and file
      setFormData({
        name: "",
        email: "",
        contact: "",
        experience: "",
        resume: null,
        termsaccepted: false,
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = null;
      }
    } catch (err) {
      console.error("Application error:", err);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: err.response?.data?.message || err.message,
        confirmButtonText: "Try Again",
      });
    } finally {
      setLoading(false);
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
          <form onSubmit={handleSubmit} className="job-form">
            <input
              type="text"
              name="jobDetails"
              value={`${jobTitle} - ${jobLocation}`}
              readOnly
              className="readonly-input"
            />

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <input
              type="text"
              name="contact"
              placeholder="Enter your contact number"
              value={formData.contact}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <input
              type="number"
              name="experience"
              placeholder="Years of Experience"
              value={formData.experience}
              onChange={handleChange}
              required
              disabled={loading}
            />
            <input
              type="file"
              name="resume"
              accept=".pdf,.doc,.docx"
              onChange={handleChange}
              ref={fileInputRef}
              required
              disabled={loading}
            />

            <div className="job-form-checkbox">
              <input
                type="checkbox"
                id="termsCheckbox"
                name="termsaccepted"
                checked={formData.termsaccepted}
                onChange={handleChange}
                disabled={loading}
              />
              <label htmlFor="termsCheckbox" className="checkbox-label">
                By checking this box, I consent to receive text messages related
                to conversational purposes from Cadila Global LLC. You can reply
                ‘STOP’ at any time to opt out. Message and data rates may apply.
                Message frequency may vary; text HELP for assistance. For more
                information, please visit our{" "}
                <a href="/privacy-policy">Privacy Policy</a> and SMS{" "}
                <a href="/terms-and-conditions"> Terms and Conditions</a>.
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="job-form-submit-button"
            >
              {loading ? (
                <span className="job-form-spinner"></span>
              ) : (
                "Submit Application"
              )}
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default JobForm;
