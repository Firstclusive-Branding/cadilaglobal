import React, { useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
  FaSignOutAlt,
  FaTachometerAlt,
  FaCogs,
  FaUsers,
  FaBars,
  FaClipboardList,
} from "react-icons/fa";
import "../styles/Admin.css";

const Admin = () => {
  const navigate = useNavigate();
  const [username] = useState("Cadila Admin");
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleSignOut = () => {
    localStorage.removeItem("adminAuthenticated");
    navigate("/admin");
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <div className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          <h3 className={`${isSidebarCollapsed ? "hidden" : ""}`}>
            Admin Panel
          </h3>
          <button className="toggle-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <NavLink to="/admin/dashboard" activeClassName="active">
                <FaTachometerAlt />{" "}
                <span className={isSidebarCollapsed ? "hidden" : ""}>
                  Dashboard
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/content-management" activeClassName="active">
                <FaClipboardList />{" "}
                <span className={isSidebarCollapsed ? "hidden" : ""}>
                  Content Management
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/careers" activeClassName="active">
                <FaClipboardList />{" "}
                <span className={isSidebarCollapsed ? "hidden" : ""}>
                  Careers
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/admin/job-applicants" activeClassName="active">
                <FaClipboardList />{" "}
                <span className={isSidebarCollapsed ? "hidden" : ""}>
                  Manage Job Applicants
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Content Area */}
      <div className="dashboard-container">
        <div className="admin-navbar">
          <h1>Welcome, {username}</h1>
          <button className="logout-btn" onClick={handleSignOut}>
            <FaSignOutAlt /> Sign Out
          </button>
        </div>
        <div className="content-section">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
