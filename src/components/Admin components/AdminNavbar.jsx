import React, { useState, useEffect } from "react";
import "../../styles/Admin Styles/AdminNavbar.css";

const AdminNavbar = ({ role }) => {
  const [firstName, setFirstName] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());

  const normalizedRole = role?.toLowerCase();

  const roleSettings = {
    admin: { className: "admin" },
    manager: { className: "manager" },
    recruiter: { className: "recruiter" },
  };

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
      setFirstName(userData.firstname || "");
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!roleSettings[normalizedRole]) {
    console.error("Invalid role:", role);
    return null;
  }

  return (
    <div className="admin-navbar">
      <div></div>
      <h2 className="admin-title">Welcome, {firstName}</h2>
      <div className="admin-nav-items">
        <span className="admin-clock">
          {currentTime.toLocaleString(undefined, {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
          })}
        </span>
      </div>
    </div>
  );
};

export default AdminNavbar;
