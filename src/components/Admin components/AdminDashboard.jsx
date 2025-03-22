import { useOutletContext } from "react-router-dom";

const AdminDashboard = () => {
  // const { role } = useOutletContext();

  return (
    <div>
      <h1>Dashboard</h1>

      {/* <div>Common Feature: Job Listings</div>

      {role === "admin" && <div>Admin Feature: Manage Managers</div>}

      {role !== "recruiter" && <div>Manager Feature: Approve Recruiters</div>}

      {role === "recruiter" && (
        <div>Recruiter Feature: View My Job Applicants</div>
      )} */}
    </div>
  );
};

export default AdminDashboard;
