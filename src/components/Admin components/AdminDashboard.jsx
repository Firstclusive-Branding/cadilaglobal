import { useState, useEffect } from "react";
import "../../styles/Admin Styles/AdminDashboard.css";

const AdminDashboard = () => {
  const storedUser = JSON.parse(localStorage.getItem("userData"));

  const capitalize = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  const role = capitalize(storedUser?.role || "User");
  const firstName = capitalize(storedUser?.firstname || "Guest");

  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (date, timeZone) =>
    date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
      timeZone,
    });

  return (
    <div className="admin-dashboard">
      <div className="datetime-group">
        <div className="datetime">
          <strong>System time:</strong> {formatTime(dateTime)}
        </div>
        <div className="datetime">
          <strong>CST:</strong> {formatTime(dateTime, "America/Chicago")}
        </div>
        <div className="datetime">
          <strong>EST:</strong> {formatTime(dateTime, "America/New_York")}
        </div>
        <div className="datetime">
          <strong>MST:</strong> {formatTime(dateTime, "America/Denver")}
        </div>
        <div className="datetime">
          <strong>PST:</strong> {formatTime(dateTime, "America/Los_Angeles")}
        </div>
      </div>
      <div className="dashboard-header">
        <div className="greeting">
          <h1>Hello, {firstName}</h1>
        </div>

        <div className="admin-card">
          <h2>{role} Access</h2>
          <p>
            You are logged in as <strong>{role}</strong>
          </p>
          <p>
            This dashboard is your control center. Use the sidebar to manage
            content, users, or settings.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
