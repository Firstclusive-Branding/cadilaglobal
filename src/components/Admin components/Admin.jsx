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
import "../../styles/Admin Styles/Admin.css";

const Admin = () => {
  const navigate = useNavigate();
  const [username] = useState("Cadila Admin");
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleSignOut = () => {
    localStorage.removeItem("adminAuthenticated");
    navigate("/fb");
  };

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  // Handle screen resizing
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setSidebarCollapsed(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <div
        className={`sidebar ${isSidebarCollapsed ? "collapsed" : ""} ${
          isMobile ? "mobile" : ""
        }`}
      >
        <div className="sidebar-header">
          {!isSidebarCollapsed && <h3>Admin Panel</h3>}
          <button className="toggle-btn" onClick={toggleSidebar}>
            <FaBars />
          </button>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <NavLink to="/fb/dashboard" activeClassName="active">
                <FaTachometerAlt />
                {!isSidebarCollapsed && <span>Dashboard</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/fb/content-management" activeClassName="active">
                <FaClipboardList />
                {!isSidebarCollapsed && <span>Content Management</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/fb/careers" activeClassName="active">
                <FaClipboardList />
                {!isSidebarCollapsed && <span>Careers</span>}
              </NavLink>
            </li>
            <li>
              <NavLink to="/fb/job-applicants" activeClassName="active">
                <FaClipboardList />
                {!isSidebarCollapsed && <span>Manage Job Applicants</span>}
              </NavLink>
            </li>{" "}
            <li>
              <NavLink to="/fb/jobs" activeClassName="active">
                <FaClipboardList />
                {!isSidebarCollapsed && <span>Manage Jobs</span>}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Content Area */}
      <div className="dashboard-container">
        <div className="admin-navbar">
          <button className="toggle-btn mobile-toggle" onClick={toggleSidebar}>
            <FaBars />
          </button>
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
