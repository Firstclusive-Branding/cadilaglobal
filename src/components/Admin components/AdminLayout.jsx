import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import "../../styles/Admin Styles/AdminLayout.css";

const AdminLayout = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isDesktop) {
    return (
      <div
        className="admin-not-desktop"
        style={{ padding: "2rem", textAlign: "center", fontSize: "1.1rem" }}
      >
        This dashboard is best viewed on a desktop or laptop device. Please
        switch to a larger screen to access the dashboard.
      </div>
    );
  }

  const storedUser = localStorage.getItem("userData");
  const role = storedUser ? JSON.parse(storedUser).role.toLowerCase() : "guest";

  return (
    <div className="admin-layout">
      <AdminSidebar role={role} />
      <div className="admin-content">
        <AdminNavbar role={role.charAt(0).toUpperCase() + role.slice(1)} />
        <div className="admin-page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
