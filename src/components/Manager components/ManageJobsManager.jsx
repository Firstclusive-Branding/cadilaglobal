import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/Admin Styles/ManageJobs.css";

const baseURL = "http://localhost:4000";

const ManageJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [form, setForm] = useState({
    jobtitle: "",
    experience: "",
    salary: "",
    location: "",
    jobdescription: "",
  });
  const [editingJobId, setEditingJobId] = useState(null);
  const [error, setError] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  const fetchJobs = async () => {
    try {
      const res = await axios.post(
        `${baseURL}/api/manager/jobposting/getall`,
        {
          pageno: page,
          search,
          sortby: { updatedAt: "desc" },
        },
        getAuthHeaders()
      );
      setJobs(res.data.data.jobs);
      setTotalPages(res.data.data.totalPages);
    } catch (err) {
      setError("Failed to load jobs.");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [page, search]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();
    const endpoint = editingJobId ? "update" : "create";
    const payload = editingJobId ? { _id: editingJobId, ...form } : form;

    try {
      await axios.post(
        `${baseURL}/api/manager/jobposting/${endpoint}`,
        payload,
        getAuthHeaders()
      );
      setForm({
        jobtitle: "",
        experience: "",
        salary: "",
        location: "",
        jobdescription: "",
      });
      setEditingJobId(null);
      fetchJobs();
    } catch (err) {
      setError("Failed to submit job.");
    }
  };

  const handleEdit = (job) => {
    setForm(job);
    setEditingJobId(job._id);
  };

  const handleDelete = async (_id) => {
    try {
      await axios.post(
        `${baseURL}/api/manager/jobposting/delete`,
        { _id },
        getAuthHeaders()
      );
      fetchJobs();
    } catch (err) {
      setError("Failed to delete job.");
    }
  };
  const handleApproveToggle = async (jobId, approved) => {
    try {
      await axios.post(
        `${baseURL}/api/manager/jobposting/approved/${jobId}`,
        { approved },
        getAuthHeaders()
      );
      fetchJobs();
    } catch (err) {
      setError("Failed to update approval status.");
    }
  };

  return (
    <div className="manage-jobs-container">
      <h2 className="manage-jobs-title">Manage Job Postings</h2>
      <div className="manage-jobs-search-bar">
        <input
          type="text"
          placeholder="Search job title, salary, or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <form className="manage-jobs-form" onSubmit={handleCreateOrUpdate}>
        <input
          name="jobtitle"
          value={form.jobtitle}
          onChange={handleChange}
          placeholder="Job Title"
          required
        />
        <input
          name="experience"
          value={form.experience}
          onChange={handleChange}
          placeholder="Experience"
          required
        />
        <input
          name="salary"
          value={form.salary}
          onChange={handleChange}
          placeholder="Salary"
          required
        />
        <input
          name="location"
          value={form.location}
          onChange={handleChange}
          placeholder="Location"
          required
        />
        <textarea
          name="jobdescription"
          value={form.jobdescription}
          onChange={handleChange}
          placeholder="Job Description"
          required
        ></textarea>
        <button type="submit" className="manage-jobs-submit">
          {editingJobId ? "Update Job" : "Create Job"}
        </button>
      </form>

      {error && <p className="manage-jobs-error">{error}</p>}

      <div className="manage-jobs-list">
        {jobs.map((job) => (
          <div key={job._id} className="manage-jobs-item">
            <h4>{job.jobtitle}</h4>
            <p>
              {job.experience} experience | {job.salary} | {job.location}
            </p>
            <p>{job.jobdescription}</p>

            <p className="job-dates">
              <strong>Created:</strong>{" "}
              {new Date(job.createdAt).toLocaleString()}
              <br />
              <strong>Updated:</strong>{" "}
              {new Date(job.updatedAt).toLocaleString()}
            </p>

            <div className="manage-jobs-actions">
              <button onClick={() => handleEdit(job)}>Edit</button>
              <button onClick={() => handleDelete(job._id)}>Delete</button>

              <button
                className="approve-btn"
                onClick={() => handleApproveToggle(job._id, true)}
                disabled={job.approved}
              >
                Approved
              </button>

              <button
                className="deny-btn"
                onClick={() => handleApproveToggle(job._id, false)}
                disabled={!job.approved}
              >
                Deny
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="manage-jobs-pagination">
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

export default ManageJobs;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import "../../styles/Admin Styles/ManageJobs.css";

// const baseURL = "http://localhost:4000";

// const ManageJobs = ({ role }) => {
//   const [jobs, setJobs] = useState([]);
//   const [form, setForm] = useState({
//     jobtitle: "",
//     experience: "",
//     salary: "",
//     location: "",
//     jobdescription: "",
//   });
//   const [editingJobId, setEditingJobId] = useState(null);
//   const [error, setError] = useState("");
//   const [page, setPage] = useState(0);
//   const [totalPages, setTotalPages] = useState(1);
//   const [search, setSearch] = useState("");

//   const isAdmin = role === "Admin";
//   const isManager = role === "manager";

//   // If recruiter, block access
//   if (role === "recruiter") {
//     return (
//       <div className="manage-jobs-container">
//         <h2 className="manage-jobs-title">Access Denied</h2>
//         <p>You are not authorized to view this page.</p>
//       </div>
//     );
//   }

//   const getAuthHeaders = () => {
//     const token = localStorage.getItem("token");
//     return { headers: { Authorization: `Bearer ${token}` } };
//   };

//   const endpointPrefix = isAdmin ? "admin" : "manager";

//   // const fetchJobs = async () => {
//   //   try {
//   //     const res = await axios.post(
//   //       `${baseURL}/api/${endpointPrefix}/jobposting/getall`,
//   //       {
//   //         pageno: page,
//   //         search,
//   //         sortby: { updatedAt: "desc" },
//   //       },
//   //       getAuthHeaders()
//   //     );
//   //     const jobList = isAdmin ? res.data.data.jobs : res.data.data.jobposting;
//   //     setJobs(jobList);
//   //     setTotalPages(res.data.data.totalPages);
//   //   } catch (err) {
//   //     setError("Failed to load jobs.");
//   //   }
//   // };
//   const fetchJobs = async () => {
//     try {
//       const res = await axios.post(
//         `${baseURL}/api/${endpointPrefix}/jobposting/getall`,
//         {
//           pageno: page,
//           search,
//           sortby: { updatedAt: "desc" },
//         },
//         getAuthHeaders()
//       );

//       // Correctly extract jobs based on role
//       const data = res.data.data;
//       const jobList = data.jobs || data.jobposting || [];
//       console.log("API response:", res.data);
//       setJobs(jobList);
//       setTotalPages(data.totalPages || 1);
//     } catch (err) {
//       setError("Failed to load jobs.");
//     }
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, [page, search]);

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleCreateOrUpdate = async (e) => {
//     e.preventDefault();
//     const endpoint = editingJobId ? "update" : "create";
//     const payload = editingJobId ? { _id: editingJobId, ...form } : form;

//     try {
//       await axios.post(
//         `${baseURL}/api/${endpointPrefix}/jobposting/${endpoint}`,
//         payload,
//         getAuthHeaders()
//       );
//       setForm({
//         jobtitle: "",
//         experience: "",
//         salary: "",
//         location: "",
//         jobdescription: "",
//       });
//       setEditingJobId(null);
//       fetchJobs();
//     } catch (err) {
//       setError("Failed to submit job.");
//     }
//   };

//   const handleEdit = (job) => {
//     setForm(job);
//     setEditingJobId(job._id);
//   };

//   const handleDelete = async (_id) => {
//     try {
//       await axios.post(
//         `${baseURL}/api/${endpointPrefix}/jobposting/delete`,
//         { _id },
//         getAuthHeaders()
//       );
//       fetchJobs();
//     } catch (err) {
//       setError("Failed to delete job.");
//     }
//   };

//   const handleApproveToggle = async (jobId, approved) => {
//     try {
//       await axios.post(
//         `${baseURL}/api/${endpointPrefix}/jobposting/approved/${jobId}`,
//         { approved },
//         getAuthHeaders()
//       );
//       fetchJobs();
//     } catch (err) {
//       setError("Failed to update approval status.");
//     }
//   };

//   return (
//     <div className="manage-jobs-container">
//       <h2 className="manage-jobs-title">Manage Job Postings</h2>

//       <div className="manage-jobs-search-bar">
//         <input
//           type="text"
//           placeholder="Search job title, salary, or location..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       <form className="manage-jobs-form" onSubmit={handleCreateOrUpdate}>
//         <input
//           name="jobtitle"
//           value={form.jobtitle}
//           onChange={handleChange}
//           placeholder="Job Title"
//           required
//         />
//         <input
//           name="experience"
//           value={form.experience}
//           onChange={handleChange}
//           placeholder="Experience"
//           required
//         />
//         <input
//           name="salary"
//           value={form.salary}
//           onChange={handleChange}
//           placeholder="Salary"
//           required
//         />
//         <input
//           name="location"
//           value={form.location}
//           onChange={handleChange}
//           placeholder="Location"
//           required
//         />
//         <textarea
//           name="jobdescription"
//           value={form.jobdescription}
//           onChange={handleChange}
//           placeholder="Job Description"
//           required
//         />
//         <button type="submit" className="manage-jobs-submit">
//           {editingJobId ? "Update Job" : "Create Job"}
//         </button>
//       </form>

//       {error && <p className="manage-jobs-error">{error}</p>}

//       <div className="manage-jobs-list">
//         {jobs.map((job) => (
//           <div key={job._id} className="manage-jobs-item">
//             <h4>{job.jobtitle}</h4>
//             <p>
//               {job.experience} experience | {job.salary} | {job.location}
//             </p>
//             <p>{job.jobdescription}</p>

//             <p className="job-dates">
//               <strong>Created:</strong>{" "}
//               {new Date(job.createdAt).toLocaleString()}
//               <br />
//               <strong>Updated:</strong>{" "}
//               {new Date(job.updatedAt).toLocaleString()}
//             </p>

//             <div className="manage-jobs-actions">
//               <button onClick={() => handleEdit(job)}>Edit</button>
//               <button onClick={() => handleDelete(job._id)}>Delete</button>

//               {isAdmin && (
//                 <>
//                   <button
//                     className="approve-btn"
//                     onClick={() => handleApproveToggle(job._id, true)}
//                     disabled={job.approved}
//                   >
//                     Approved
//                   </button>
//                   <button
//                     className="deny-btn"
//                     onClick={() => handleApproveToggle(job._id, false)}
//                     disabled={!job.approved}
//                   >
//                     Deny
//                   </button>
//                 </>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="manage-jobs-pagination">
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

// export default ManageJobs;
