import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/Admin Styles/RecruiterForm.css";

const baseURL = "http://localhost:4000";

const RecruiterForm = () => {
  const [entries, setEntries] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  const fetchEntries = async () => {
    try {
      const res = await axios.post(
        `${baseURL}/api/admin/hiretalent/`,
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
    try {
      await axios.post(
        `${baseURL}/api/admin/talenthire/delete`,
        { _id },
        getAuthHeaders()
      );
      fetchEntries();
    } catch (err) {
      setError("Failed to delete entry.");
    }
  };

  return (
    <div className="recruiter-form-container">
      <h2 className="recruiter-form-title">Recruiter Form Submissions</h2>

      <div className="recruiter-form-search">
        <input
          type="text"
          placeholder="Search by company name, job role, email, or mobile..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {error && <p className="recruiter-form-error">{error}</p>}

      <div className="recruiter-form-list">
        {entries.length === 0 ? (
          <p className="recruiter-form-no-data">No entries found.</p>
        ) : (
          entries.map((entry) => (
            <div key={entry._id} className="recruiter-form-item">
              <h4>{entry.companyname}</h4>
              <p>
                <strong>Job Role:</strong> {entry.jobrole}
              </p>
              <p>
                <strong>Email:</strong> {entry.email}
              </p>
              <p>
                <strong>Mobile:</strong> {entry.mobile}
              </p>
              <p>
                <strong>Created:</strong>{" "}
                {new Date(entry.createdAt).toLocaleString()}
              </p>
              <button
                className="recruiter-form-delete-btn"
                onClick={() => handleDelete(entry._id)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>

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
