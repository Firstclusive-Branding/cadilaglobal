import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../styles/Admin Styles/ContactForms.css";

const baseURL = "http://localhost:4000";

const ContactForms = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");

  // Fetch Contacts
  const fetchContacts = async () => {
    try {
      const res = await axios.post(
        `${baseURL}/api/admin/contactus`,
        { pageno: page, search },
        getAuthHeaders()
      );
      setContacts(res.data.data.contact);
      setTotalPages(res.data.data.totalPages);
    } catch (err) {
      setError("Failed to load contact forms.");
    }
  };

  useEffect(() => {
    fetchContacts();
  }, [page, search]);

  const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return { headers: { Authorization: `Bearer ${token}` } };
  };

  // Delete Contact
  const handleDelete = async (_id) => {
    try {
      await axios.post(
        `${baseURL}/api/admin/contactus/delete`,
        { _id },
        getAuthHeaders()
      );
      fetchContacts();
    } catch (err) {
      setError("Failed to delete contact.");
    }
  };

  return (
    <div className="contact-forms-container">
      <h2 className="contact-forms-title">Manage Contact Submissions</h2>

      <div className="contact-forms-search">
        <input
          type="text"
          placeholder="Search by name, email, or message..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {error && <p className="contact-forms-error">{error}</p>}

      <div className="contact-forms-list">
        {contacts.length === 0 ? (
          <p className="contact-forms-no-data">No contact forms found.</p>
        ) : (
          contacts.map((contact) => (
            <div key={contact._id} className="contact-forms-item">
              <h4>
                {contact.firstname} {contact.lastname}
              </h4>
              <p>Mobile: {contact.mobile}</p>
              <p>Email: {contact.email}</p>
              <p>Message: {contact.message}</p>
              <div className="contact-forms-actions">
                <button
                  onClick={() => handleDelete(contact._id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>

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
