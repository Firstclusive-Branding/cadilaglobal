import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "../../styles/Admin Styles/RecruiterForm.css";
import { MdDelete } from "react-icons/md";

const baseURL = import.meta.env.VITE_API_URL;

const RecruiterForm = () => {
  const [entries, setEntries] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");

  const role = JSON.parse(localStorage.getItem("userData"))?.role;

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  const fetchEntries = async () => {
    try {
      const route =
        role === "manager"
          ? `${baseURL}/api/manager/dashboard/getalltalent/`
          : `${baseURL}/api/admin/hiretalent/`;

      const res = await axios.post(
        route,
        {
          pageno: page,
          search,
          sortby: { createdAt: "desc" },
        },
        getAuthHeaders()
      );
      setEntries(res.data.data.talenthire);
      setTotalPages(res.data.data.totalPages);
    } catch (err) {
      setError("Failed to fetch recruiter form data.");
    }
  };

  useEffect(() => {
    fetchEntries();
  }, [page, search]);

  const handleDelete = async (_id) => {
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: "This entry will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirmResult.isConfirmed) return;

    try {
      await axios.post(
        `${baseURL}/api/admin/hiretalent/delete`,
        { _id },
        getAuthHeaders()
      );
      toast.success("Recruiter form deleted successfully!");
      fetchEntries();
    } catch (err) {
      toast.error("Failed to delete entry.");
    }
  };

  return (
    <div className="recruiter-form-container">
      <h2 className="recruiter-form-title">Find Talent Form Submission</h2>

      <div className="recruiter-form-search">
        <input
          type="text"
          placeholder="Search by company, role, email or mobile..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {error && <p className="recruiter-form-error">{error}</p>}

      {entries.length === 0 ? (
        <p className="recruiter-form-no-data">No entries found.</p>
      ) : (
        <div className="recruiter-form-table-wrapper">
          <table className="recruiter-form-table">
            <thead>
              <tr>
                <th>Company</th>
                <th>Job Role</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Terms Accepted</th>
                <th>Created</th>
                {role === "Admin" && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {entries.map((entry) => (
                <tr key={entry._id}>
                  <td>{entry.companyname}</td>
                  <td>{entry.jobrole}</td>
                  <td>{entry.email}</td>
                  <td>{entry.mobile}</td>
                  <td>{entry.termsaccepted ? "Accepted" : "Not accepted"}</td>
                  <td>{new Date(entry.createdAt).toLocaleDateString()}</td>
                  {role === "Admin" && (
                    <td>
                      <button
                        className="recruiter-form-delete-btn"
                        onClick={() => handleDelete(entry._id)}
                      >
                        <MdDelete size={25} style={{ display: "flex" }} />
                      </button>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="recruiter-form-pagination">
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
    </div>
  );
};

export default RecruiterForm;
