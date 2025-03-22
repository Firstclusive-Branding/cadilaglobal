import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/Admin Styles/AdminUsers.css";

const baseURL = "http://localhost:4000";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(null);
  const [resettingUser, setResettingUser] = useState(null);
  const [newPasswords, setNewPasswords] = useState({});

  const fetchUsers = async () => {
    try {
      const requestData = {
        pageno: page,
        sortby: { createdAt: "asc" },
        filterBy: roleFilter === "all" ? {} : { role: roleFilter },
        search: search,
      };

      const res = await axios.post(
        `${baseURL}/api/admin/dashboard/getallusers`,
        requestData,
        getAuthHeaders()
      );
      setUsers(res.data.data.users);
      setTotalPages(res.data.data.totalPages);
    } catch (err) {
      setError("Failed to load users.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page, search, roleFilter]);

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  const handleApprove = async (userId) => {
    setLoading(userId);
    try {
      await axios.post(
        `${baseURL}/api/admin/dashboard/approve/${userId}`,
        { approved: true },
        getAuthHeaders()
      );
      fetchUsers();
    } catch (err) {
      setError("Failed to approve user.");
    } finally {
      setLoading(null);
    }
  };

  const handleReject = async (userId) => {
    setLoading(userId);
    try {
      await axios.post(
        `${baseURL}/api/admin/dashboard/reject/${userId}`,
        { reject: true },
        getAuthHeaders()
      );
      fetchUsers();
    } catch (err) {
      setError("Failed to reject user.");
    } finally {
      setLoading(null);
    }
  };

  const handleResetPasswordToggle = (userId) => {
    setResettingUser(resettingUser === userId ? null : userId);
  };

  const handlePasswordChange = (userId, value) => {
    setNewPasswords({ ...newPasswords, [userId]: value });
  };

  const handleUpdatePassword = async (email) => {
    if (!newPasswords[email]) {
      setError("Enter a new password before updating.");
      return;
    }

    setLoading(email);
    try {
      await axios.post(
        `${baseURL}/api/admin/dashboard/resetpassword`,
        { email, password: newPasswords[email] },
        getAuthHeaders()
      );
      setResettingUser(null);
      setNewPasswords({});
      alert("Password reset successfully");
    } catch (err) {
      setError("Failed to reset password.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="admin-users-container">
      <h2 className="admin-users-title">Manage Users</h2>

      <div className="admin-users-controls">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          value={roleFilter}
          onChange={(e) => setRoleFilter(e.target.value)}
        >
          <option value="all">All Users</option>
          <option value="manager" selected>
            Managers
          </option>
          <option value="recruiter">Recruiters</option>
        </select>
      </div>

      {error && <p className="admin-users-error">{error}</p>}

      <div className="admin-users-list">
        {users.length === 0 ? (
          <p className="admin-users-no-data">No users found.</p>
        ) : (
          users.map((user) => (
            <div key={user._id} className="admin-users-item">
              <h4>
                {user.firstname} {user.lastname}
              </h4>
              <p>Email: {user.email}</p>
              <p>
                Role:{" "}
                <span className={`role-badge ${user.role}`}>{user.role}</span>
              </p>
              <p>Joined On: {new Date(user.createdAt).toLocaleDateString()}</p>

              {/* <div className="admin-users-actions">
                {user.approved ? (
                  <button className="users-approved-btn" disabled>
                    Approved
                  </button>
                ) : (
                  <button
                    className="users-approve-btn"
                    onClick={() => handleApprove(user._id)}
                    disabled={loading === user._id}
                  >
                    {loading === user._id ? "Approving..." : "Approve"}
                  </button>
                )}
                <button
                  className="users-reject-btn"
                  onClick={() => handleReject(user._id)}
                  disabled={loading === user._id}
                >
                  {loading === user._id ? "Rejecting..." : "Reject"}
                </button>
              </div> */}
              <div className="admin-users-actions">
                <button
                  className="users-approve-btn"
                  onClick={() => handleApprove(user._id)}
                  disabled={user.approved || loading === user._id}
                >
                  {user.approved
                    ? "Approved"
                    : loading === user._id
                    ? "Approving..."
                    : "Approve"}
                </button>

                <button
                  className="users-reject-btn"
                  onClick={() => handleReject(user._id)}
                  disabled={!user.approved || loading === user._id}
                >
                  {loading === user._id ? "Rejecting..." : "Deny"}
                </button>
              </div>

              {/* Reset Password Feature */}
              <div className="admin-users-reset-password">
                {resettingUser === user._id ? (
                  <>
                    <input
                      type="password"
                      placeholder="Enter new password"
                      value={newPasswords[user.email] || ""}
                      onChange={(e) =>
                        handlePasswordChange(user.email, e.target.value)
                      }
                    />
                    <button
                      className="update-password-btn"
                      onClick={() => handleUpdatePassword(user.email)}
                      disabled={loading === user.email}
                    >
                      {loading === user.email
                        ? "Updating..."
                        : "Update Password"}
                    </button>
                  </>
                ) : (
                  <button
                    className="reset-password-btn"
                    onClick={() => handleResetPasswordToggle(user._id)}
                  >
                    Reset Password
                  </button>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminUsers;
