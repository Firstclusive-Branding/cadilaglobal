import { Outlet } from "react-router-dom";
import "../../styles/Recruiter Styles/RecruiterLayout.css";
import AdminNavbar from "../Admin components/AdminNavbar";
import AdminSidebar from "../Admin components/AdminSidebar";

const RecruiterLayout = ({ role }) => {
  return (
    <div className="recruiter-layout">
      <AdminSidebar role={role} />

      <div className="recruiter-content">
        <AdminNavbar role="Recruiter" />
        <div className="recruiter-page-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default RecruiterLayout;
