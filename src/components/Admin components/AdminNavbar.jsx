import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/Admin Styles/AdminNavbar.css";

const AdminNavbar = ({ role }) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");

  const roleSettings = {
    Admin: { authKey: "adminAuthenticated", className: "admin" },
    Manager: { authKey: "managerAuthenticated", className: "manager" },
    Recruiter: { authKey: "recruiterAuthenticated", className: "recruiter" },
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    setFirstName(userData.firstname);

    if (userData?.role === role) {
      setFirstName(userData.firstname);
    }
  }, [role]);

  if (!roleSettings[role]) {
    console.error("Invalid role:", role);
    return null;
  }

  const authKey = roleSettings[role];

  const handleSignOut = (e) => {
    e.preventDefault(true);
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
    <div className="admin-navbar">
      <h2 className="admin-title">Welcome {firstName}</h2>
      <div className="admin-nav-items">
        <button className="admin-signout" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default AdminNavbar;
