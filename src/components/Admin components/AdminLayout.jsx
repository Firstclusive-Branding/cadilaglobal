// AdminLayout.jsx
import { Outlet } from "react-router-dom";
import AdminSidebar from "./AdminSidebar";
import AdminNavbar from "./AdminNavbar";
import "../../styles/Admin Styles/AdminLayout.css";

const AdminLayout = () => {
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
