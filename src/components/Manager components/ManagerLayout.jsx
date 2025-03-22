import { Outlet } from "react-router-dom";
import "../../styles/Manager Styles/ManagerLayout.css";
import AdminNavbar from "../Admin components/AdminNavbar";
import AdminSidebar from "../Admin components/AdminSidebar";

const ManagerLayout = ({ role }) => {
  return (
    <div className="manager-layout">
      <AdminSidebar role={role} />

      <div className="manager-content">
        <AdminNavbar role="Manager" />
        <div className="manager-page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ManagerLayout;
