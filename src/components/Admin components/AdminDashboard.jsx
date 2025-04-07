import "../../styles/Admin Styles/AdminDashboard.css";

const AdminDashboard = () => {
  const storedUser = JSON.parse(localStorage.getItem("userData"));

  const capitalize = (str) =>
    str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  const role = capitalize(storedUser?.role || "User");
  const firstName = capitalize(storedUser?.firstname || "Guest");

  return (
    <div className="admin-dashboard">
      <h1>Hello, {firstName}</h1>
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
  );
};

export default AdminDashboard;
