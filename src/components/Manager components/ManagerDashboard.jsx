import React from "react";
import { useLocation } from "react-router-dom";

const ManagerDashboard = () => {
  const location = useLocation();
  const role = location.state?.role || "Unknown";

  return (
    <div>
      <h2>{role} Dashboard</h2>
      <p>
        Welcome! Your role is: <strong>{role}</strong>
      </p>
    </div>
  );
};

export default ManagerDashboard;
