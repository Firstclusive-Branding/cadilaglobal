import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBriefcase,
  FaUsers,
  FaEnvelope,
  FaUserTie,
  FaUserShield,
  FaUserFriends,
} from "react-icons/fa";
import "../../styles/Admin Styles/AdminSidebar.css";

const AdminSidebar = ({ role }) => {
  return (
    <div className={`universal-sidebar ${role}-sidebar`}>
      <h2 className="sidebar-logo">
        {role === "admin"
          ? "Admin Panel"
          : role === "manager"
          ? "Manager Panel"
          : "Recruiter Panel"}
      </h2>

      <ul>
        {/* Common Links */}
        <li>
          <Link to={`/fb/${role}-dashboard`}>
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/fb/jobs">
            <FaBriefcase />{" "}
            {role === "recruiter" ? "My Job Postings" : "Job Postings"}
          </Link>
        </li>
        <li>
          <Link to="/fb/job-applicants">
            <FaUsers />{" "}
            {role === "recruiter" ? "My Job Applicants" : "Job Applicants"}
          </Link>
        </li>

        {/* Admin & Manager */}
        {role !== "recruiter" && (
          <>
            <li>
              <Link to="/fb/contact-forms">
                <FaEnvelope /> Contact Form Submissions
              </Link>
            </li>
            <li>
              <Link to="/fb/recruiter-forms">
                <FaUserTie /> Recruiter Form Submissions
              </Link>
            </li>
          </>
        )}

        {/* Only Admin */}
        {role === "admin" && (
          <>
            <li>
              <Link to="/fb/users">
                <FaUserFriends /> Users
              </Link>
            </li>
          </>
        )}

        {/* Only Manager */}
        {role === "manager" && (
          <li>
            <Link to="/fb/recruiters">
              <FaUserFriends /> Recruiters
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default AdminSidebar;
