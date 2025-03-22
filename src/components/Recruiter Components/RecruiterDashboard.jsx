import React from "react";
import { useLocation } from "react-router-dom";

const RecruiterDashboard = () => {
  const location = useLocation();
  const role = location.state?.role || "Unknown";

  return (
    <div>
      <h2>Recruiter Dashboard</h2>
      <p>
        Welcome! Your role is: <strong>{role}</strong>
      </p>
    </div>
  );
};

export default RecruiterDashboard;
