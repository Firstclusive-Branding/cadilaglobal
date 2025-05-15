import React, { useEffect, useState } from "react";
import "../../styles/Admin Styles/ManagePolicies.css";
import { FaEdit, FaTrashAlt, FaPlus } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const baseURL = import.meta.env.VITE_API_URL;

const ManagePolicies = () => {
  const [policiesData, setPoliciesData] = useState([]);
  const [docId, setDocId] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSectionEditOpen, setIsSectionEditOpen] = useState(false);

  const [sectionEditData, setSectionEditData] = useState({
    sectionId: "",
    newSection: "",
  });

  const [newPolicy, setNewPolicy] = useState({
    sectionId: "",
    sectionName: "",
    title: "",
    value: "",
    itemId: "",
    isEdit: false,
    isAddOnlyItem: false,
  });

  useEffect(() => {
    fetchPolicies();
  }, []);

  const fetchPolicies = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${baseURL}/api/admin/privacypolicy`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = res.data?.data?.[0];
      setPoliciesData(data?.privacypolicy || []);
      setDocId(data?._id || "");
    } catch (err) {
      console.error("Error fetching policies:", err);
      toast.error("Failed to load privacy policies.");
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
    } = newPolicy;
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
        await axios.put(
          `${baseURL}/api/admin/privacypolicy/update/${docId}/${sectionId}/${itemId}`,
          { title, value },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("Policy updated successfully!");
      } else if (isAddOnlyItem) {
        await axios.post(
          `${baseURL}/api/admin/privacypolicy/${docId}/additems/${sectionId}`,
          { section: sectionId, items: [{ title, value }] },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("Policy added to section!");
      } else {
        await axios.post(
          `${baseURL}/api/admin/privacypolicy/${docId}/addsection`,
          { section: sectionName, items: [{ title, value }] },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        toast.success("New policy section created!");
      }

      setIsModalOpen(false);
      resetForm();
      fetchPolicies();
    } catch (err) {
      console.error("Error saving policy:", err);
      toast.error("Failed to save. Check the API or form data.");
    }
  };

  const handleDeleteItem = async (sectionIndex, itemIndex) => {
    const section = policiesData[sectionIndex];
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
        `${baseURL}/api/admin/privacypolicy/${docId}/deleteitem/${section._id}/${itemId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Item deleted successfully!");
      fetchPolicies();
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
        `${baseURL}/api/admin/privacypolicy/${docId}/deletesection/${sectionId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Section deleted successfully!");
      fetchPolicies();
    } catch (err) {
      console.error("Error deleting section:", err);
      toast.error("Failed to delete section.");
    }
  };

  const handleEdit = (sectionIndex, itemIndex) => {
    const section = policiesData[sectionIndex];
    const item = section.items[itemIndex];
    setNewPolicy({
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
    const section = policiesData.find((s) => s._id === sectionId);
    setNewPolicy({
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
        `${baseURL}/api/admin/privacypolicy/updatesection/${docId}/${sectionEditData.sectionId}`,
        { newsection: sectionEditData.newSection },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      toast.success("Section name updated!");
      setIsSectionEditOpen(false);
      setSectionEditData({ sectionId: "", newSection: "" });
      fetchPolicies();
    } catch (err) {
      console.error("Rename failed:", err);
      toast.error("Failed to rename section.");
    }
  };

  const resetForm = () => {
    setNewPolicy({
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
    <div className="MP-container">
      <h2 className="MP-title">Manage Privacy Policy</h2>
      <button
        className="MP-btn-add-section"
        onClick={() => {
          resetForm();
          setIsModalOpen(true);
        }}
      >
        <FaPlus /> Add Section with Item
      </button>

      {policiesData.map((section, sectionIndex) => (
        <div key={section._id} className="MP-section">
          <h3 className="MP-section-title">
            {section.section}
            <div className="MP-section-controls">
              <button
                className="MP-btn MP-btn-rename"
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
                className="MP-btn MP-btn-delete"
                onClick={() => handleDeleteSection(section._id)}
              >
                <FaTrashAlt /> Delete
              </button>
              <button
                className="MP-btn MP-btn-add"
                onClick={() => handleAddItemToSection(section._id)}
              >
                <FaPlus /> Add Item
              </button>
            </div>
          </h3>

          {section.items.map((item, itemIndex) => (
            <div key={item._id} className="MP-item">
              <div className="MP-item-title">{item.title}</div>
              <div className="MP-item-desc" style={{ whiteSpace: "pre-line" }}>
                {item.value}
              </div>
              <div className="MP-item-actions">
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
        <div className="MP-modal-overlay">
          <div className="MP-modal">
            <h3>
              {newPolicy.isEdit
                ? "Edit Policy"
                : newPolicy.isAddOnlyItem
                ? "Add Item to Section"
                : "Add Section with Item"}
            </h3>
            {!newPolicy.isAddOnlyItem && !newPolicy.isEdit && (
              <input
                className="MP-input"
                type="text"
                placeholder="Section Name"
                value={newPolicy.sectionName}
                onChange={(e) =>
                  setNewPolicy({ ...newPolicy, sectionName: e.target.value })
                }
              />
            )}

            <input
              className="MP-input"
              type="text"
              placeholder="Title"
              value={newPolicy.title}
              onChange={(e) =>
                setNewPolicy({ ...newPolicy, title: e.target.value })
              }
            />
            <textarea
              className="MP-textarea"
              placeholder="Description"
              value={newPolicy.value}
              onChange={(e) =>
                setNewPolicy({ ...newPolicy, value: e.target.value })
              }
            ></textarea>

            <div className="MP-modal-actions">
              <button className="MP-btn-save" onClick={handleAddOrUpdate}>
                Save
              </button>
              <button
                className="MP-btn-cancel"
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
        <div className="MP-modal-overlay">
          <div className="MP-modal">
            <h3>Edit Section Name</h3>
            <input
              className="MP-input"
              type="text"
              value={sectionEditData.newSection}
              onChange={(e) =>
                setSectionEditData({
                  ...sectionEditData,
                  newSection: e.target.value,
                })
              }
            />
            <div className="MP-modal-actions">
              <button className="MP-btn-save" onClick={handleSectionRename}>
                Update
              </button>
              <button
                className="MP-btn-cancel"
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

export default ManagePolicies;
