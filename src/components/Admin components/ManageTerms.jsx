import React, { useEffect, useState } from "react";
import "../../styles/Admin Styles/ManageTerms.css";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const baseURL = import.meta.env.VITE_API_URL;

const ManageTerms = () => {
  const [termsData, setTermsData] = useState([]);
  const [docId, setDocId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSectionEditOpen, setIsSectionEditOpen] = useState(false);

  const [sectionEditData, setSectionEditData] = useState({
    sectionId: "",
    newSection: "",
  });

  const [newTerm, setNewTerm] = useState({
    sectionId: "",
    sectionName: "",
    title: "",
    value: "",
    itemId: "",
    isEdit: false,
    isAddOnlyItem: false,
  });

  useEffect(() => {
    fetchTerms();
  }, []);

  const fetchTerms = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${baseURL}/api/admin/termsandcondition`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res.data?.data?.[0];
      setTermsData(data?.termsandconditions || []);
      setDocId(data?._id || "");
    } catch (err) {
      console.error("Error fetching terms:", err);
      toast.error("Failed to load terms and conditions.");
    }
  };

  const handleAddOrUpdate = async () => {
    const {
      sectionId,
      sectionName,
      title,
      value,
      itemId,
      isEdit,
      isAddOnlyItem,
    } = newTerm;
    const token = localStorage.getItem("token");

    const result = await Swal.fire({
      title: "Confirm Save",
      text: "Are you sure you want to save this?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Save",
    });

    if (!result.isConfirmed) return;

    try {
      if (isEdit) {
        // UPDATE ITEM
        await axios.put(
          `${baseURL}/api/admin/termsandcondition/update/${docId}/${sectionId}/${itemId}`,
          { title, value },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("Item updated successfully!");
      } else if (isAddOnlyItem) {
        // CREATE ITEM
        await axios.post(
          `${baseURL}/api/admin/termsandcondition/${docId}/additems/${sectionId}`,
          { section: sectionId, items: [{ title, value }] },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("Item added to section!");
      } else {
        // CREATE SECTION
        await axios.post(
          `${baseURL}/api/admin/termsandcondition/${docId}/addsection`,
          { section: sectionName, items: [{ title, value }] },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("New section created!");
      }

      setIsModalOpen(false);
      resetForm();
      fetchTerms();
    } catch (err) {
      console.error("Error saving term:", err);
      toast.error("Failed to save. Check the API or form data.");
    }
  };

  const handleDeleteItem = async (sectionIndex, itemIndex) => {
    const section = termsData[sectionIndex];
    const itemId = section.items[itemIndex]._id;
    const token = localStorage.getItem("token");

    const confirm = await Swal.fire({
      title: "Confirm Delete",
      text: "Are you sure you want to delete this item?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
    });

    if (!confirm.isConfirmed) return;

    try {
      await axios.delete(
        `${baseURL}/api/admin/termsandcondition/${docId}/deleteitem/${section._id}/${itemId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Item deleted successfully!");
      fetchTerms();
    } catch (err) {
      console.error("Delete failed:", err);
      toast.error("Failed to delete item.");
    }
  };

  const handleDeleteSection = async (sectionId) => {
    const token = localStorage.getItem("token");

    const confirm = await Swal.fire({
      title: "Confirm Delete Section",
      text: "This will delete the entire section and its items. Continue?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Delete",
    });

    if (!confirm.isConfirmed) return;

    try {
      await axios.delete(
        `${baseURL}/api/admin/termsandcondition/${docId}/deletesection/${sectionId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Section deleted successfully!");
      fetchTerms();
    } catch (err) {
      console.error("Error deleting section:", err);
      toast.error("Failed to delete section.");
    }
  };

  const handleEdit = (sectionIndex, itemIndex) => {
    const section = termsData[sectionIndex];
    const item = section.items[itemIndex];
    setNewTerm({
      sectionId: section._id,
      sectionName: section.section,
      title: item.title,
      value: item.value,
      itemId: item._id,
      isEdit: true,
      isAddOnlyItem: false,
    });
    setIsModalOpen(true);
  };

  const handleAddItemToSection = (sectionId) => {
    const section = termsData.find((s) => s._id === sectionId);
    setNewTerm({
      sectionId,
      sectionName: section.section,
      title: "",
      value: "",
      itemId: "",
      isEdit: false,
      isAddOnlyItem: true,
    });
    setIsModalOpen(true);
  };

  const handleSectionRename = async () => {
    const token = localStorage.getItem("token");

    const confirm = await Swal.fire({
      title: "Rename Section?",
      text: "Are you sure you want to update the section name?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Yes, update",
    });

    if (!confirm.isConfirmed) return;

    try {
      await axios.put(
        `${baseURL}/api/admin/termsandcondition/updatesection/${docId}/${sectionEditData.sectionId}`,
        { newsection: sectionEditData.newSection },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Section name updated!");
      setIsSectionEditOpen(false);
      setSectionEditData({ sectionId: "", newSection: "" });
      fetchTerms();
    } catch (err) {
      console.error("Rename failed:", err);
      toast.error("Failed to rename section.");
    }
  };

  const resetForm = () => {
    setNewTerm({
      sectionId: "",
      sectionName: "",
      title: "",
      value: "",
      itemId: "",
      isEdit: false,
      isAddOnlyItem: false,
    });
  };

  return (
    <div className="MT-container">
      <h2 className="MT-title">Manage Terms and Conditions</h2>
      <button
        className="MT-btn-add-section"
        onClick={() => {
          resetForm();
          setIsModalOpen(true);
        }}
      >
        <FaPlus /> Add Section with Item
      </button>

      {termsData.map((section, sectionIndex) => (
        <div key={section._id} className="MT-section">
          <h3 className="MT-section-title">
            {section.section}
            <div className="MT-section-controls">
              <button
                className="MT-btn MT-btn-rename"
                onClick={() => {
                  setSectionEditData({
                    sectionId: section._id,
                    newSection: section.section,
                  });
                  setIsSectionEditOpen(true);
                }}
              >
                <FaEdit /> Rename
              </button>
              <button
                className="MT-btn MT-btn-delete"
                onClick={() => handleDeleteSection(section._id)}
              >
                <FaTrashAlt /> Delete
              </button>
              <button
                className="MT-btn MT-btn-add"
                onClick={() => handleAddItemToSection(section._id)}
              >
                <FaPlus /> Add Item
              </button>
            </div>
          </h3>

          {section.items.map((item, itemIndex) => (
            <div key={item._id} className="MT-item">
              <div className="MT-item-title">
                {item.title.replace(/_/g, " ")}
              </div>
              <div className="MT-item-desc">{item.value}</div>
              <div className="MT-item-actions">
                <FaEdit onClick={() => handleEdit(sectionIndex, itemIndex)} />
                <FaTrashAlt
                  onClick={() => handleDeleteItem(sectionIndex, itemIndex)}
                />
              </div>
            </div>
          ))}
        </div>
      ))}

      {isModalOpen && (
        <div className="MT-modal-overlay">
          <div className="MT-modal">
            <h3>
              {newTerm.isEdit
                ? "Edit Term"
                : newTerm.isAddOnlyItem
                ? "Add Item to Section"
                : "Add Section with Item"}
            </h3>
            {!newTerm.isAddOnlyItem && !newTerm.isEdit && (
              <input
                className="MT-input"
                type="text"
                placeholder="Section Name"
                value={newTerm.sectionName}
                onChange={(e) =>
                  setNewTerm({ ...newTerm, sectionName: e.target.value })
                }
              />
            )}

            <input
              className="MT-input"
              type="text"
              placeholder="Title"
              value={newTerm.title}
              onChange={(e) =>
                setNewTerm({ ...newTerm, title: e.target.value })
              }
            />
            <textarea
              className="MT-textarea"
              placeholder="Description"
              value={newTerm.value}
              onChange={(e) =>
                setNewTerm({ ...newTerm, value: e.target.value })
              }
            ></textarea>

            <div className="MT-modal-actions">
              <button className="MT-btn-save" onClick={handleAddOrUpdate}>
                Save
              </button>
              <button
                className="MT-btn-cancel"
                onClick={() => {
                  setIsModalOpen(false);
                  resetForm();
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {isSectionEditOpen && (
        <div className="MT-modal-overlay">
          <div className="MT-modal">
            <h3>Edit Section Name</h3>
            <input
              className="MT-input"
              type="text"
              value={sectionEditData.newSection}
              onChange={(e) =>
                setSectionEditData({
                  ...sectionEditData,
                  newSection: e.target.value,
                })
              }
            />
            <div className="MT-modal-actions">
              <button className="MT-btn-save" onClick={handleSectionRename}>
                Update
              </button>
              <button
                className="MT-btn-cancel"
                onClick={() => {
                  setIsSectionEditOpen(false);
                  setSectionEditData({ sectionId: "", newSection: "" });
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageTerms;
