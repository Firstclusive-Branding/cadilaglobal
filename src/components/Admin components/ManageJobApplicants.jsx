import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/Admin Styles/JobApplicants.css";
import { FaFilePdf } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";

const baseURL = import.meta.env.VITE_API_URL;

const ManageJobApplicants = () => {
  const [applicants, setApplicants] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const encoded_token = localStorage.getItem("token");

  // const role = JSON.parse(localStorage.getItem("userData"))?.role || "Admin";
  // const endpointPrefix = role === "manager" ? "manager" : "admin";

  const role = JSON.parse(localStorage.getItem("userData"))?.role || "Admin";
  let endpointPrefix = "admin";
  console.log("role", role);

  if (role === "manager") endpointPrefix = "manager";
  else if (role === "recruiter") endpointPrefix = "recruiter";

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  const fetchApplicants = async () => {
    try {
      setLoading(true);
      let res;

      if (role === "recruiter") {
        res = await axios.get(
          `${baseURL}/api/recruiter/jobposting/viewjobform`,
          getAuthHeaders()
        );
        setApplicants(res.data.data);
        setTotalPages(1);
      } else {
        res = await axios.post(
          `${baseURL}/api/${endpointPrefix}/jobapplicants/getall`,
          {
            pageno: page,
            search,
            sortby: { createdAt: "desc" },
          },
          getAuthHeaders()
        );
        setApplicants(res.data.data.applicants);
        setTotalPages(res.data.data.totalPages);
      }

      setLoading(false);
    } catch (err) {
      setError("Failed to load job applicants.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, [page, search]);

  const handleDelete = async (_id) => {
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirmResult.isConfirmed) return;

    try {
      await axios.post(
        `${baseURL}/api/${endpointPrefix}/jobapplicants/delete`,
        { _id },
        getAuthHeaders()
      );
      toast.success("Applicant deleted successfully!");
      fetchApplicants();
    } catch (err) {
      toast.error("Error deleting applicant.");
    }
  };

  return (
    <div className="job-applicants-container">
      <h2 className="job-applicants-title">Manage Job Applicants</h2>

      <div className="job-applicants-search">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {error && <p className="job-applicants-error">{error}</p>}

      {loading ? (
        <p>Loading...</p>
      ) : applicants.length === 0 ? (
        <p className="job-applicants-no-data">No job applicants found.</p>
      ) : (
        <div className="job-applicants-table-wrapper">
          <table className="job-applicants-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Experience</th>
                <th>Job Title</th>
                <th>Location</th>
                <th>Applied On</th>
                {role !== "recruiter" && <th>Posted By</th>}
                {role !== "recruiter" && <th>Role</th>}
                <th>Resume</th>
                {role === "Admin" && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {applicants.map((applicant) => (
                <tr key={applicant._id}>
                  <td>{applicant.name}</td>
                  <td>
                    <a
                      href={`mailto:${applicant.email}`}
                      style={{ color: "#0c7dbd", textDecoration: "none" }}
                    >
                      {applicant.email}
                    </a>
                  </td>
                  <td>{applicant.mobile}</td>
                  <td>{applicant.yearofexperience}</td>
                  <td>{applicant.jobtitle}</td>
                  <td>{applicant.location}</td>
                  <td>{new Date(applicant.createdAt).toLocaleDateString()}</td>

                  {role !== "recruiter" && <td>{applicant.postedBy}</td>}
                  {role !== "recruiter" && (
                    <td>
                      <span className={`role-badge ${applicant.role}`}>
                        {applicant.role}
                      </span>
                    </td>
                  )}
                  <td>
                    {applicant.resume ? (
                      <a
                        href={`${baseURL}/api/pdf/${applicant.resume}?token=Bearer ${encoded_token}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                      >
                        <FaFilePdf size={25} color="#114769" />
                      </a>
                    ) : (
                      "-"
                    )}
                  </td>
                  {role === "Admin" ? (
                    <td>
                      <button
                        onClick={() => handleDelete(applicant._id)}
                        className="applicant-delete-btn"
                      >
                        <MdDelete size={25} />
                      </button>
                    </td>
                  ) : null}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {role !== "recruiter" && (
        <div className="job-applicants-pagination">
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
      )}
    </div>
  );
};

export default ManageJobApplicants;
