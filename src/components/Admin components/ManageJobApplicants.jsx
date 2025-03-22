// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../../styles/Admin Styles/JobApplicants.css";

// const baseURL = "http://localhost:4000";

// const ManageJobApplicants = () => {
//   const [applicants, setApplicants] = useState([]);
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(0);
//   const [totalPages, setTotalPages] = useState(1);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(false);

//   const getAuthHeaders = () => {
//     const token = localStorage.getItem("token");
//     return { headers: { Authorization: `Bearer ${token}` } };
//   };

//   const fetchApplicants = async () => {
//     try {
//       setLoading(true);
//       const res = await axios.post(
//         `${baseURL}/api/admin/jobapplicants/getall`,
//         {
//           pageno: page,
//           search,
//           sortby: { createdAt: "desc" },
//         },
//         getAuthHeaders()
//       );
//       setApplicants(res.data.data.applicants);
//       setTotalPages(res.data.data.totalPages);
//       setLoading(false);
//     } catch (err) {
//       setError("Failed to load job applicants.");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchApplicants();
//   }, [page, search]);

//   const handleDelete = async (_id) => {
//     const confirmDelete = window.confirm(
//       "Are you sure you want to delete this applicant?"
//     );
//     if (!confirmDelete) return;

//     try {
//       await axios.post(
//         `${baseURL}/api/admin/jobapplicants/delete`,
//         { _id },
//         getAuthHeaders()
//       );
//       fetchApplicants();
//     } catch (err) {
//       alert("Error deleting applicant.");
//     }
//   };

//   return (
//     <div className="job-applicants-container">
//       <h2 className="job-applicants-title">Manage Job Applicants</h2>

//       <div className="job-applicants-search">
//         <input
//           type="text"
//           placeholder="Search by name, email, or job title..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {error && <p className="job-applicants-error">{error}</p>}

//       <div className="job-applicants-list">
//         {loading ? (
//           <p>Loading...</p>
//         ) : applicants.length === 0 ? (
//           <p className="job-applicants-no-data">No job applicants found.</p>
//         ) : (
//           applicants.map((applicant) => (
//             <div key={applicant._id} className="job-applicants-item">
//               <h4>{applicant.name}</h4>
//               <p>
//                 <strong>Email:</strong> {applicant.email}
//               </p>
//               <p>
//                 <strong>Mobile:</strong> {applicant.mobile}
//               </p>
//               <p>
//                 <strong>Experience:</strong> {applicant.yearofexperience}
//               </p>
//               <p>
//                 <strong>Job Title:</strong> {applicant.jobtitle}
//               </p>
//               <p>
//                 <strong>Location:</strong> {applicant.location}
//               </p>
//               <p>
//                 <strong>Recruiter:</strong> {applicant.recruitername}
//               </p>
//               {applicant.coverletter && (
//                 <p>
//                   <strong>Cover Letter:</strong> {applicant.coverletter}
//                 </p>
//               )}

//               <div className="job-applicant-actions">
//                 <button
//                   onClick={() => handleDelete(applicant._id)}
//                   className="delete-applicant-btn"
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))
//         )}
//       </div>

//       <div className="job-applicants-pagination">
//         <button
//           onClick={() => setPage((p) => Math.max(p - 1, 0))}
//           disabled={page === 0}
//         >
//           Previous
//         </button>
//         <span>
//           Page {page + 1} of {totalPages}
//         </span>
//         <button
//           onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
//           disabled={page + 1 >= totalPages}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default ManageJobApplicants;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/Admin Styles/JobApplicants.css";

const baseURL = "http://localhost:4000";

const ManageJobApplicants = () => {
  const [applicants, setApplicants] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Get role from localStorage
  const role = JSON.parse(localStorage.getItem("userData"))?.role || "admin";
  const endpointPrefix = role === "manager" ? "manager" : "admin";

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  const fetchApplicants = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
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
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this applicant?"
    );
    if (!confirmDelete) return;

    try {
      await axios.post(
        `${baseURL}/api/${endpointPrefix}/jobapplicants/delete`,
        { _id },
        getAuthHeaders()
      );
      fetchApplicants();
    } catch (err) {
      alert("Error deleting applicant.");
    }
  };

  return (
    <div className="job-applicants-container">
      <h2 className="job-applicants-title">Manage Job Applicants</h2>

      <div className="job-applicants-search">
        <input
          type="text"
          placeholder="Search by name, email, or job title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {error && <p className="job-applicants-error">{error}</p>}

      <div className="job-applicants-list">
        {loading ? (
          <p>Loading...</p>
        ) : applicants.length === 0 ? (
          <p className="job-applicants-no-data">No job applicants found.</p>
        ) : (
          applicants.map((applicant) => (
            <div key={applicant._id} className="job-applicants-item">
              <h4>{applicant.name}</h4>
              <p>
                <strong>Email:</strong> {applicant.email}
              </p>
              <p>
                <strong>Mobile:</strong> {applicant.mobile}
              </p>
              <p>
                <strong>Experience:</strong> {applicant.yearofexperience}
              </p>
              <p>
                <strong>Job Title:</strong> {applicant.jobtitle}
              </p>
              <p>
                <strong>Location:</strong> {applicant.location}
              </p>
              <p>
                <strong>Recruiter:</strong> {applicant.recruitername}
              </p>
              {applicant.coverletter && (
                <p>
                  <strong>Cover Letter:</strong> {applicant.coverletter}
                </p>
              )}

              <div className="job-applicant-actions">
                <button
                  onClick={() => handleDelete(applicant._id)}
                  className="delete-applicant-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

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
    </div>
  );
};

export default ManageJobApplicants;
