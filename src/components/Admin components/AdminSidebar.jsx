import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBriefcase,
  FaUsers,
  FaEnvelope,
  FaUserTie,
  FaUserFriends,
  FaSignOutAlt,
} from "react-icons/fa";
import "../../styles/Admin Styles/AdminSidebar.css";
import Logo from "../../assets/Logo.png";
import profilePic from "../../assets/profile-pic.png";

const AdminSidebar = ({ role }) => {
  const isAdmin = role === "admin";
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");

  const roleSettings = {
    admin: { authKey: "adminAuthenticated", className: "admin" },
    manager: { authKey: "managerAuthenticated", className: "manager" },
    recruiter: { authKey: "recruiterAuthenticated", className: "recruiter" },
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setFirstName(userData.firstname || "");
    }
  }, []);

  if (!roleSettings[role]) {
    console.error("Invalid role:", role);
    return null;
  }

  const authKey = roleSettings[role]?.authKey;

  const handleSignOut = (e) => {
    e.preventDefault();
    localStorage.removeItem(authKey);
    localStorage.removeItem("adminAuthenticated");
    localStorage.removeItem("managerAuthenticated");
    localStorage.removeItem("recruiterAuthenticated");
    localStorage.removeItem("userAuthenticated");
    localStorage.removeItem("userData");
    localStorage.removeItem("userRole");
    navigate("/admin");
  };

  return (
    <div className={`universal-sidebar ${role}-sidebar`}>
      <img src={Logo} alt="Logo" />

      <ul>
        <li>
          <Link to={`/admin/${role}-dashboard`}>
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/jobs">
            <FaBriefcase />
            {role === "recruiter" ? "My Job Postings" : "Job Postings"}
          </Link>
        </li>
        <li>
          <Link to="/admin/job-applicants">
            <FaUsers />
            {role === "recruiter" ? "My Job Applicants" : "Job Applicants"}
          </Link>
        </li>

        {/* Admin & Manager */}
        {role !== "recruiter" && (
          <>
            <li>
              <Link to="/admin/contact-forms">
                <FaEnvelope /> Contact Us Form
              </Link>
            </li>
            <li>
              <Link to="/admin/recruiter-forms">
                <FaUserTie /> Find Talent Form
              </Link>
            </li>
            <li>
              <Link to="/admin/users">
                <FaUserFriends />
                {isAdmin ? "Users" : "Recruiters"}
              </Link>
            </li>
          </>
        )}

        <li onClick={handleSignOut}>
          <a className="sidebar-sign-out-link">
            <FaSignOutAlt /> Sign Out
          </a>
        </li>
      </ul>
      <div className="sidebar-user-container">
        <div>
          <img src={profilePic} alt="profile pic placeholder" />
          <p>{firstName}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminSidebar;
