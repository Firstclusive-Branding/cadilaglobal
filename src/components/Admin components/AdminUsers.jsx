import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/Admin Styles/AdminUsers.css";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { MdEdit, MdDelete } from "react-icons/md";

const baseURL = import.meta.env.VITE_API_URL;

const AdminUsers = ({ role }) => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState(
    role === "Admin" ? "manager" : "recruiter"
  );
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(null);
  const [resettingUser, setResettingUser] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [newPasswords, setNewPasswords] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [createForm, setCreateForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    mobile: "",
    password: "",
    role: "",
  });

  const isAdmin = role === "Admin";
  const isManager = role === "manager";

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  const fetchUsers = async () => {
    try {
      const requestData = {
        pageno: page,
        sortby: { createdAt: "desc" },
        filterBy: roleFilter === "all" ? {} : { role: roleFilter },
        search: search,
      };

      const endpoint = isAdmin
        ? "/api/admin/dashboard/getallusers"
        : "/api/manager/recruiter/getall";

      const res = await axios.post(
        `${baseURL}${endpoint}`,
        requestData,
        getAuthHeaders()
      );

      const data = isAdmin ? res.data.data.users : res.data.data.recruiters;
      const pages = res.data.data.totalPages;

      setUsers(data);
      setTotalPages(pages);
    } catch (err) {
      toast.error("Failed to load users.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [page, search, roleFilter]);

  const handleApprove = async (userId) => {
    setLoading(userId);
    try {
      const url = isManager
        ? `${baseURL}/api/manager/dashboard/approved/${userId}`
        : `${baseURL}/api/admin/dashboard/approve/${userId}`;

      await axios.post(url, { approved: true }, getAuthHeaders());
      toast.success("User approved!");
      fetchUsers();
    } catch (err) {
      toast.error("Failed to approve user.");
    } finally {
      setLoading(null);
    }
  };

  const handleReject = async (userId) => {
    setLoading(userId);
    try {
      const url = isManager
        ? `${baseURL}/api/manager/dashboard/approved/${userId}`
        : `${baseURL}/api/admin/dashboard/reject/${userId}`;

      await axios.post(url, { reject: true }, getAuthHeaders());
      toast.info("User rejected!");
      fetchUsers();
    } catch (err) {
      toast.error("Failed to reject user.");
    } finally {
      setLoading(null);
    }
  };

  const handleEditToggle = (user) => {
    if (editingUser === user._id) {
      setEditingUser(null);
      setEditForm({});
    } else {
      setEditingUser(user._id);
      setEditForm({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        mobile: user.mobile,
      });
    }
  };

  const handleEditChange = (field, value) => {
    setEditForm({ ...editForm, [field]: value });
  };

  const handleEditSubmit = async () => {
    try {
      const endpoint = isAdmin
        ? "/api/admin/user/update"
        : "/api/manager/recruiter/update";

      await axios.post(`${baseURL}${endpoint}`, editForm, getAuthHeaders());
      toast.success("User updated successfully!");
      fetchUsers();
      setEditingUser(null);
      setEditForm({});
    } catch (err) {
      toast.error("Failed to update user.");
    }
  };

  const handleDelete = async (userId) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const endpoint = isAdmin
          ? "/api/admin/user/delete"
          : "/api/manager/recruiter/delete";

        await axios.post(
          `${baseURL}${endpoint}`,
          { _id: userId },
          getAuthHeaders()
        );

        toast.success("User deleted successfully!");
        fetchUsers();
      } catch (err) {
        toast.error("Failed to delete user.");
      }
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
      toast.error("Enter a new password before updating.");
      return;
    }

    setLoading(email);
    try {
      const endpoint = isAdmin
        ? "/api/admin/dashboard/resetpassword"
        : "/api/manager/recruiter/resetpassword";

      await axios.post(
        `${baseURL}${endpoint}`,
        { email, password: newPasswords[email] },
        getAuthHeaders()
      );
      setResettingUser(null);
      setNewPasswords({});
      // alert("Password reset successfully");
      toast.success("Password reset successfully!");
    } catch (err) {
      toast.error("Failed to reset password.");
    } finally {
      setLoading(null);
    }
  };

  const handleCreateInput = (field, value) => {
    setCreateForm({ ...createForm, [field]: value });
  };

  const handleCreateUser = async () => {
    const { firstname, lastname, email, mobile, password, role } = createForm;

    // Basic validation
    if (!firstname || !lastname || !email || !mobile || !password) {
      toast.error("All fields are required!");

      return;
    }

    if (isAdmin && !role) {
      toast.error("Please select a role");

      return;
    }

    try {
      const endpoint = isAdmin
        ? "/api/admin/user/create"
        : "/api/manager/recruiter/create";

      const payload = {
        firstname,
        lastname,
        email,
        mobile,
        password,
      };

      if (isAdmin) {
        payload.role = role;
        payload.approved = true;
      }

      await axios.post(`${baseURL}${endpoint}`, payload, getAuthHeaders());
      setShowModal(false);
      setCreateForm({
        firstname: "",
        lastname: "",
        email: "",
        mobile: "",
        password: "",
        role: "",
      });
      toast.success("User created successfully!");
      fetchUsers();
    } catch (err) {
      const msg =
        err?.response?.data?.message || "Something went wrong. Try again.";
      toast.error(msg);
    }
  };

  return (
    <div className="admin-users-container">
      <div className="admin-users-controls">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {isAdmin && (
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="all">All Users</option>
            <option value="manager">Managers</option>
            <option value="recruiter">Recruiters</option>
          </select>
        )}
        <button className="add-user-btn" onClick={() => setShowModal(true)}>
          {isAdmin ? "Add users" : "Add recruiter"}
        </button>
      </div>

      <div className="admin-users-table-wrapper">
        <table className="admin-users-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Role</th>
              <th>Joined</th>
              <th>Status</th>
              <th>Actions</th>
              <th>Password</th>
            </tr>
          </thead>
          <tbody>
            {users.length === 0 ? (
              <tr>
                <td colSpan="9" className="admin-users-no-data">
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user._id}>
                  <td>
                    {editingUser === user._id ? (
                      <input
                        value={editForm.firstname}
                        onChange={(e) =>
                          handleEditChange("firstname", e.target.value)
                        }
                      />
                    ) : (
                      user.firstname
                    )}
                  </td>
                  <td>
                    {editingUser === user._id ? (
                      <input
                        value={editForm.lastname}
                        onChange={(e) =>
                          handleEditChange("lastname", e.target.value)
                        }
                      />
                    ) : (
                      user.lastname
                    )}
                  </td>
                  <td>
                    {editingUser === user._id ? (
                      <input
                        value={editForm.email}
                        onChange={(e) =>
                          handleEditChange("email", e.target.value)
                        }
                      />
                    ) : (
                      user.email
                    )}
                  </td>
                  <td>
                    {editingUser === user._id ? (
                      <input
                        value={editForm.mobile}
                        onChange={(e) =>
                          handleEditChange("mobile", e.target.value)
                        }
                      />
                    ) : (
                      user.mobile
                    )}
                  </td>
                  <td>
                    <span className={`role-badge ${user.role}`}>
                      {user.role}
                    </span>
                  </td>
                  <td>{new Date(user.createdAt).toLocaleDateString()}</td>
                  <td>
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
                  </td>
                  <td>
                    {editingUser === user._id ? (
                      <>
                        <button
                          className="update-btn"
                          onClick={handleEditSubmit}
                        >
                          Save
                        </button>
                        <button
                          className="cancel-btn"
                          onClick={() => setEditingUser(null)}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="edit-btn"
                          onClick={() => handleEditToggle(user)}
                        >
                          <MdEdit size={20} style={{ display: "flex" }} />
                        </button>
                        <button
                          className="delete-btn"
                          onClick={() => handleDelete(user._id)}
                        >
                          <MdDelete size={20} style={{ display: "flex" }} />
                        </button>
                      </>
                    )}
                  </td>
                  <td>
                    {resettingUser === user._id ? (
                      <>
                        <input
                          className="new-password-input"
                          type="password"
                          placeholder="New password"
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
                          {loading === user.email ? "Updating..." : "Update"}
                        </button>
                        <button
                          className="cancel-password-btn"
                          onClick={() => handleResetPasswordToggle(user._id)}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <button
                        className="reset-password-btn"
                        onClick={() => handleResetPasswordToggle(user._id)}
                      >
                        Reset
                      </button>
                    )}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <div className="admin-users-pagination">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 0))}
          disabled={page === 0}
        >
          Previous
        </button>
        <span>
          Page {page + 1} of {totalPages}
        </span>
        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
          disabled={page + 1 >= totalPages}
        >
          Next
        </button>
      </div>
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button
              className="modal-close-btn"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <h3>Add New User</h3>

            <input
              type="text"
              placeholder="First Name"
              value={createForm.firstname}
              onChange={(e) => handleCreateInput("firstname", e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={createForm.lastname}
              onChange={(e) => handleCreateInput("lastname", e.target.value)}
            />
            <input
              type="email"
              placeholder="Email"
              value={createForm.email}
              onChange={(e) => handleCreateInput("email", e.target.value)}
            />
            <input
              type="tel"
              placeholder="Mobile"
              value={createForm.mobile}
              onChange={(e) => handleCreateInput("mobile", e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={createForm.password}
              onChange={(e) => handleCreateInput("password", e.target.value)}
            />

            {isAdmin && (
              <div className="create-user-role">
                <label>
                  <input
                    type="radio"
                    value="manager"
                    checked={createForm.role === "manager"}
                    onChange={(e) =>
                      setCreateForm({ ...createForm, role: e.target.value })
                    }
                  />
                  Manager
                </label>
                <label>
                  <input
                    type="radio"
                    value="recruiter"
                    checked={createForm.role === "recruiter"}
                    onChange={(e) =>
                      setCreateForm({ ...createForm, role: e.target.value })
                    }
                  />
                  Recruiter
                </label>
              </div>
            )}

            <button className="submit-user-btn" onClick={handleCreateUser}>
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminUsers;
