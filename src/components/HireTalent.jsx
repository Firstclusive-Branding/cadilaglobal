import React from "react";
import "../styles/HireTalent.css";
import Hiretalent from "../assets/hire talent assets/hire-talent.jpg";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const HireTalent = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "2a53a327-68d0-450d-92b3-0d4ce175b269");

    formData.append(
      "subject",
      "Hire Talent Form Submission from CadilaGlobal.com"
    );

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Thanks for reaching out!",
        text: "We'll connect with you soon!",
        icon: "success",
        confirmButtonText: "OK",
      });
      event.target.reset();
    } else {
      console.error("Web3Forms Error:", res);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        confirmButtonText: "Try Again",
      });
    }
  };
  return (
    <div className="hire-talent-container">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <img src={Hiretalent} alt="Hire Talent" className="hire-talent-image" />
        <div className="hire-talent-content">
          <div className="hire-talent-left">
            <h3 className="hire-talent-subtitle">Find the Right Candidates</h3>
            <h1 className="hire-talent-title">Hire Top Talent</h1>
            <p className="hire-talent-description">
              Submit your hiring requirements, and we will connect you with
              qualified candidates that match your needs.
            </p>
          </div>
          <div className="hire-talent-right">
            <form className="hire-talent-form" onSubmit={onSubmit}>
              <input
                type="text"
                placeholder="Enter company name"
                name="Company_Name"
                required
              />

              <input
                type="email"
                placeholder="Enter your email"
                name="Email"
                required
              />

              <input
                type="text"
                placeholder="Enter job role"
                name="Job_Role"
                required
              />

              <textarea
                placeholder="Describe job requirements"
                name="Rquirements"
                required
              ></textarea>

              <input
                type="tel"
                placeholder="Enter contact number"
                name="Contact_Number"
                required
              />

              <button type="submit">Submit Requirement</button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HireTalent;
