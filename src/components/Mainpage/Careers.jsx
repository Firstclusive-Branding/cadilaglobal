import React, { useEffect, useState } from "react";
import "../../styles/Mainpage Styles/Careers.css";
import { FaBriefcase, FaMoneyCheckAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const Careers = () => {
  const [jobListings, setJobListings] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/user/jobs/getall`
      );
      const { data } = response.data;
      const approvedJobs = data.filter((job) => job.approved === true);
      setJobListings(approvedJobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    if (location.hash) {
      const jobId = location.hash.substring(1);
      const element = document.getElementById(jobId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 200);
      }
    }
  }, [location, jobListings]);

  return (
    <div className="careers-container">
      <div className="careers-header">
        <p className="careers-subtitle">CURRENT OPENINGS</p>
        <h2 className="careers-title">Join Our Team</h2>
      </div>

      {loading ? (
        <div className="careers-spinner-container">
          <div className="careers-spinner"></div>
        </div>
      ) : (
        <div className="careers-list">
          {jobListings.map((job, index) => (
            <div className="careers-card" id={job._id} key={job._id || index}>
              <h3 className="careers-jobtitle">{job.jobtitle}</h3>
              <div className="careers-details">
                <span>
                  <FaBriefcase size={20} className="careers-icon" />
                  {job.experience}
                </span>
                <span>
                  <FaMoneyCheckAlt size={20} className="careers-icon" />$
                  {job.salary}
                </span>
                <span>
                  <FaLocationDot size={20} className="careers-icon" />
                  {job.location}
                </span>
              </div>
              <pre className="careers-description">{job.jobdescription}</pre>
              <Link
                to={`/find-jobs/apply?title=${job.jobtitle}&location=${job.location}&jobid=${job._id}`}
                className="careers-apply-button"
              >
                Apply Now <FaArrowRight />
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Careers;
