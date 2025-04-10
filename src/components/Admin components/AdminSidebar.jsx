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
import Logo from "../../assets/Logo.png";

const AdminSidebar = ({ role }) => {
  const isAdmin = role === "admin";

  return (
    <div className={`universal-sidebar ${role}-sidebar`}>
      {/* <h2 className="sidebar-logo">
        {role === "admin"
          ? "Admin Panel"
          : role === "manager"
          ? "Manager Panel"
          : "Recruiter Panel"}
      </h2> */}
      <img src={Logo} alt={Logo} />

      <ul>
        {/* Common Links */}
        <li>
          <Link to={`/admin/${role}-dashboard`}>
            <FaTachometerAlt /> Dashboard
          </Link>
        </li>
        <li>
          <Link to="/admin/jobs">
            <FaBriefcase />{" "}
            {role === "recruiter" ? "My Job Postings" : "Job Postings"}
          </Link>
        </li>
        <li>
          <Link to="/admin/job-applicants">
            <FaUsers />{" "}
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

        {/* Only Admin */}
        {/* {role === "admin" && (
          <>
            <li>
              <Link to="/admin/users">
                <FaUserFriends /> Users
              </Link>
            </li>
          </>
        )} */}

        {/* Only Manager */}
        {/* {role === "manager" && (
          <li>
            <Link to="/admin/recruiters">
              <FaUserFriends /> Recruiters
            </Link>
          </li>
        )} */}
      </ul>
    </div>
  );
};

export default AdminSidebar;
