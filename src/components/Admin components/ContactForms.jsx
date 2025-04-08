import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/Admin Styles/ContactForms.css";
import { MdDelete } from "react-icons/md";

const baseURL = import.meta.env.VITE_API_URL;

const ContactForms = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");

  const role = JSON.parse(localStorage.getItem("userData"))?.role;
  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  const fetchContacts = async () => {
    try {
      const route =
        role === "manager"
          ? `${baseURL}/api/manager/dashboard/getallcontact`
          : `${baseURL}/api/admin/contactus`;

      const res = await axios.post(
        route,
        { pageno: page, search },
        getAuthHeaders()
      );

      setContacts(res.data.data.contacts);
      setTotalPages(res.data.data.totalPages);
    } catch (err) {
      setError("Failed to load contact forms.");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [page, search]);

  const handleDelete = async (_id) => {
    const confirmResult = await Swal.fire({
      title: "Are you sure?",
      text: "You won’t be able to recover this submission!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirmResult.isConfirmed) return;

    try {
      await axios.post(
        `${baseURL}/api/admin/contactus/delete`,
        { _id },
        getAuthHeaders()
      );
      toast.success("Contact form deleted successfully!");
      fetchContacts();
    } catch (err) {
      toast.error("Failed to delete contact.");
    }
  };

  return (
    <div className="contact-forms-container">
      <h2 className="contact-forms-title">Contact Us Form Submissions</h2>

      <div className="contact-forms-search">
        <input
          type="text"
          placeholder="Search by name, email, or message..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {error && <p className="contact-forms-error">{error}</p>}

      {contacts.length === 0 ? (
        <p className="contact-forms-no-data">No contact forms found.</p>
      ) : (
        <div className="contact-forms-table-wrapper">
          <table className="contact-forms-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Message</th>
                {role === "Admin" && <th>Actions</th>}
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr key={contact._id}>
                  <td>
                    {contact.firstname} {contact.lastname}
                  </td>
                  <td>{contact.mobile}</td>
                  <td>{contact.email}</td>
                  <td style={{ textAlign: "left" }}>{contact.message}</td>
                  {role === "Admin" ? (
                    <td>
                      <button
                        onClick={() => handleDelete(contact._id)}
                        className="contact-delete-btn"
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

      <div className="contact-forms-pagination">
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

export default ContactForms;
