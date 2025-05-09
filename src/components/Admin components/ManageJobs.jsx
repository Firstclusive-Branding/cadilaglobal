import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/Admin Styles/ManageJobs.css";
import { MdEdit, MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Country, State, City } from "country-state-city";
import Select from "react-select";
import { IoIosCloseCircleOutline } from "react-icons/io";

const baseURL = import.meta.env.VITE_API_URL;

const ManageJobs = ({ role }) => {
  const [jobs, setJobs] = useState([]);

  const [form, setForm] = useState({
    jobtitle: "",
    experience: "",
    experienceMin: "",
    experienceMax: "",
    salary: "",
    location: "",
    jobdescription: "",
  });

  const [editingJobId, setEditingJobId] = useState(null);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(null);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const countryOptions = countries.map((c) => ({
    value: c.name,
    label: c.name,
  }));
  const stateOptions = states.map((s) => ({
    value: s.name,
    label: s.name,
  }));

  const isAdmin = role === "Admin";
  const isManager = role === "manager";
  const isRecruiter = role === "recruiter";

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  const endpointPrefix = isAdmin
    ? "admin"
    : isManager
    ? "manager"
    : "recruiter";

  const fetchJobs = async () => {
    try {
      const res = await axios.post(
        `${baseURL}/api/${endpointPrefix}/jobposting/getall`,
        {
          pageno: page,
          search,
          sortby: { createdAt: "desc" },
        },
        getAuthHeaders()
      );

      const jobList = res.data.data.jobs || res.data.data.jobposting || [];

      setJobs(jobList);
      setTotalPages(res.data.data.totalPages || 1);
    } catch (err) {
      toast.error("Failed to fetch job postings.");
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [page, search]);

  useEffect(() => {
    const allCountries = Country.getAllCountries();
    setCountries(allCountries);
  }, []);

  useEffect(() => {
    if (selectedCountry && countries.length) {
      const found = countries.find((c) => c.name === selectedCountry);
      const isoCode = found?.isoCode;
      if (isoCode) {
        const allStates = State.getStatesOfCountry(isoCode);
        setStates(allStates);
      } else {
        setStates([]);
      }
    }
  }, [selectedCountry, countries]);

  useEffect(() => {
    if (selectedCountry && selectedState && countries.length && states.length) {
      const countryObj = countries.find((c) => c.name === selectedCountry);
      const stateObj = states.find((s) => s.name === selectedState);

      if (countryObj?.isoCode && stateObj?.isoCode) {
        const allCities = City.getCitiesOfState(
          countryObj.isoCode,
          stateObj.isoCode
        );
        setCities(allCities);
      } else {
        setCities([]);
      }
    }
  }, [selectedCountry, selectedState, countries, states]);

  useEffect(() => {
    if (selectedCountry && selectedState && selectedCity) {
      setForm((prev) => ({
        ...prev,
        location: `${selectedCity}, ${selectedState}, ${selectedCountry}`,
      }));
    }
  }, [selectedCountry, selectedState, selectedCity]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => {
    setIsModalOpen(false);

    setForm({
      jobtitle: "",
      experience: "",
      experienceMin: "",
      experienceMax: "",
      salary: "",
      location: "",
      jobdescription: "",
    });

    setSelectedCountry("");
    setSelectedState("");
    setSelectedCity("");
    setStates([]);
    setCities([]);
    setEditingJobId(null);
  };

  const handleCreateOrUpdate = async (e) => {
    e.preventDefault();
    const endpoint = editingJobId ? "update" : "create";
    const experienceFormatted = `${form.experienceMin}-${form.experienceMax} years`;
    const payload = editingJobId
      ? { _id: editingJobId, ...form, experience: experienceFormatted }
      : { ...form, experience: experienceFormatted };

    try {
      const response = await axios.post(
        `${baseURL}/api/${endpointPrefix}/jobposting/${endpoint}`,
        payload,
        getAuthHeaders()
      );
      closeModal();
      fetchJobs();
      const msg = "Job updated successfully.";
      toast.success(msg);
    } catch (err) {
      toast.error("Failed to submit the job.");
    }
  };

  const handleEdit = (job) => {
    const locationParts = job.location
      ? job.location.split(",").map((s) => s.trim())
      : [];

    let city = "";
    let state = "";
    let country = "";

    if (locationParts.length === 3) {
      [city, state, country] = locationParts;
    } else if (locationParts.length === 2) {
      [state, country] = locationParts;
    } else if (locationParts.length === 1) {
      [country] = locationParts;
    }

    const [minExp = "", maxExp = ""] = job.experience
      ? job.experience.replace(" years", "").split("-")
      : ["", ""];

    const matchedCountry = countries.find((c) => c.name === country);
    const countryCode = matchedCountry?.isoCode || "";

    const matchedStates = countryCode
      ? State.getStatesOfCountry(countryCode)
      : [];
    const matchedState = matchedStates.find((s) => s.name === state);
    const stateCode = matchedState?.isoCode || "";

    const matchedCities =
      countryCode && stateCode
        ? City.getCitiesOfState(countryCode, stateCode)
        : [];

    setForm({
      jobtitle: job.jobtitle,
      experience: job.experience,
      experienceMin: minExp,
      experienceMax: maxExp,
      salary: job.salary,
      location: job.location,
      jobdescription: job.jobdescription,
    });

    setSelectedCountry(country);
    setSelectedState(state);
    setSelectedCity(city);
    setStates(matchedStates);
    setCities(matchedCities);
    setEditingJobId(job._id);

    setTimeout(() => openModal(), 0);
  };

  const handleDelete = async (_id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "This job post will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.post(
          `${baseURL}/api/${endpointPrefix}/jobposting/delete`,
          { _id },
          getAuthHeaders()
        );
        toast.success("Deleted successfully!");
        fetchJobs();
      } catch (err) {
        toast.error("Failed to delete the job post.");
      }
    }
  };

  const handleApproveToggle = async (jobId, approved) => {
    if (isRecruiter) return;
    setLoading(jobId);

    try {
      await axios.post(
        `${baseURL}/api/${endpointPrefix}/jobposting/approved/${jobId}`,
        { approved },
        getAuthHeaders()
      );
      fetchJobs();

      if (approved) {
        toast.success("Job approved successfully!");
      } else {
        toast.info("Job disapproved.");
      }
    } catch (err) {
      toast.error("Failed to update approval status.");
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="manage-jobs-container">
      <h2 className="manage-jobs-title">Job Postings</h2>

      <div className="manage-jobs-controls">
        <input
          type="text"
          placeholder="Search job title, salary, or location..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="post-job-button" onClick={openModal}>
          Post Job
        </button>
      </div>

      <table className="jobs-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Experience</th>
            <th>Salary($)</th>
            <th>Location</th>
            <th>Description</th>
            {!isRecruiter && <th>Posted By</th>}
            {!isRecruiter && <th>Role</th>}
            <th>Updated</th>
            {!isRecruiter && <th>Status</th>}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job._id}>
              <td style={{ maxWidth: "150px" }}>{job.jobtitle}</td>
              <td>{job.experience}</td>
              <td>{!job?.salary ? "-" : job.salary}</td>
              <td style={{ maxWidth: "150px" }}>{job.location}</td>
              <td
                style={{ maxWidth: "300px", textAlign: "left" }}
                title={job.jobdescription}
              >
                {job.jobdescription.length > 150
                  ? job.jobdescription.slice(0, 150) + "..."
                  : job.jobdescription}
              </td>

              {!isRecruiter && <td>{job.email}</td>}
              {!isRecruiter && (
                <td>
                  <span className={`role-badge ${job.role}`}>{job.role}</span>
                </td>
              )}
              <td>{new Date(job.updatedAt).toLocaleDateString()}</td>
              {!isRecruiter ? (
                <td>
                  <button
                    className="job-approve-btn"
                    onClick={() => handleApproveToggle(job._id, true)}
                    disabled={job.approved || loading === job._id}
                  >
                    {job.approved
                      ? "Approved"
                      : loading === job._id
                      ? "Approving..."
                      : "Approve"}
                  </button>
                  <button
                    className="job-reject-btn"
                    onClick={() => handleApproveToggle(job._id, false)}
                    disabled={!job.approved || loading === job._id}
                  >
                    {loading === job._id ? "Rejecting..." : "Deny"}
                  </button>
                </td>
              ) : (
                <td>
                  <span
                    className={`job-status-badge ${
                      job.approved ? "approved-badge" : "not-approved-badge"
                    }`}
                  >
                    {job.approved ? "Approved" : "Pending Approval"}
                  </span>
                </td>
              )}

              <td>
                <button
                  className="jobs-action-btns jobs-edit-button"
                  onClick={() => handleEdit(job)}
                >
                  <MdEdit size={25} />
                </button>
                {(isAdmin || isManager) && (
                  <button
                    className="jobs-action-btns jobs-delete-button"
                    onClick={() => handleDelete(job._id)}
                  >
                    <MdDelete size={25} />
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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

      {isModalOpen && (
        <div className="admin-job-modal-overlay">
          <div className="admin-job-modal-content">
            <button className="modal-close-btn" onClick={closeModal}>
              <IoIosCloseCircleOutline size={30} />
            </button>
            <h3>{editingJobId ? "Edit Job" : "Post a New Job"}</h3>
            <form
              className="admin-job-modal-form"
              onSubmit={handleCreateOrUpdate}
            >
              <input
                type="text"
                name="jobtitle"
                value={form.jobtitle}
                onChange={handleChange}
                placeholder="Job Title *"
                required
              />

              <div className="experience-range-group">
                <input
                  type="number"
                  name="experienceMin"
                  value={form.experienceMin}
                  onChange={handleChange}
                  placeholder="Min Experience *"
                  required
                />
                <span className="experience-to"> - </span>
                <input
                  type="number"
                  name="experienceMax"
                  value={form.experienceMax}
                  onChange={handleChange}
                  placeholder="Max Experience *"
                  required
                />
              </div>

              <input
                type="number"
                name="salary"
                value={form.salary}
                onChange={handleChange}
                placeholder="Salary"
              />

              <Select
                className="location-options"
                options={countryOptions}
                value={countryOptions.find((c) => c.value === selectedCountry)}
                required
                onChange={(selected) => {
                  setSelectedCountry(selected.value);
                  if (form.location.includes(",")) {
                    const state = form.location.split(",")[0].trim();
                    setForm({
                      ...form,
                      location: `${state}, ${selected.value}`,
                    });
                  } else {
                    setForm({ ...form, location: `, ${selected.value}` });
                  }
                }}
                placeholder="Select Country *"
                menuPlacement="auto"
                menuShouldScrollIntoView
                styles={{
                  menu: (provided) => ({
                    ...provided,
                    maxHeight: "250px",
                    overflowY: "auto",
                  }),
                }}
              />

              <Select
                className="location-options"
                options={stateOptions}
                required
                value={stateOptions.find((s) => s.value === selectedState)}
                onChange={(selected) => {
                  setSelectedState(selected.value);
                  if (form.location.includes(",")) {
                    const country = form.location.split(",")[1]?.trim() || "";
                    setForm({
                      ...form,
                      location: `${selected.value}, ${country}`,
                    });
                  } else {
                    setForm({ ...form, location: `${selected.value},` });
                  }
                }}
                placeholder="Select State *"
                menuPlacement="auto"
                menuShouldScrollIntoView
                styles={{
                  menu: (provided) => ({
                    ...provided,
                    maxHeight: "250px",
                    overflowY: "auto",
                  }),
                }}
              />
              <Select
                className="location-options"
                options={cities.map((city) => ({
                  value: city.name,
                  label: city.name,
                }))}
                value={
                  cities.find((c) => c.name === selectedCity)
                    ? { value: selectedCity, label: selectedCity }
                    : null
                }
                onChange={(selected) => {
                  setSelectedCity(selected.value);
                  setForm((prev) => ({
                    ...prev,
                    location: `${selected.value}, ${selectedState}, ${selectedCountry}`,
                  }));
                }}
                placeholder="Select City"
                isDisabled={cities.length === 0}
                menuPlacement="auto"
                menuShouldScrollIntoView
                styles={{
                  menu: (provided) => ({
                    ...provided,
                    maxHeight: "250px",
                    overflowY: "auto",
                  }),
                }}
              />

              <textarea
                name="jobdescription"
                value={form.jobdescription}
                onChange={handleChange}
                placeholder="Job Description *"
                rows={7}
                required
              />

              <button type="submit" className="submit-user-btn">
                {editingJobId ? "Update Job" : "Post Job"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageJobs;
