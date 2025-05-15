import React, { useEffect, useState } from "react";
import "../../styles/Mainpage Styles/HireTalent.css";
import Hiretalent from "../../assets/hire talent assets/hire-talent.jpg";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

const HireTalent = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = `Find Talent - Cadila Global LLC`;
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    const formData = new FormData(event.target);

    const res = await fetch(
      `${import.meta.env.VITE_API_URL}/api/user/talent/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          companyname: formData.get("Company_Name"),
          email: formData.get("Email"),
          jobrole: formData.get("Job_Role"),
          jobdescription: formData.get("Rquirements"),
          mobile: formData.get("Contact_Number"),
          termsaccepted: isChecked,
        }),
      }
    );

    setLoading(false);

    if (res.ok) {
      Swal.fire({
        title: "Thanks for reaching out!",
        text: "We'll connect with you soon!",
        icon: "success",
        confirmButtonText: "OK",
      });
      event.target.reset();
      setIsChecked(false);
    } else {
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
                disabled={loading}
              />
              <input
                type="email"
                placeholder="Enter your email"
                name="Email"
                required
                disabled={loading}
              />
              <input
                type="text"
                placeholder="Enter job role"
                name="Job_Role"
                required
                disabled={loading}
              />
              <textarea
                placeholder="Describe job requirements"
                name="Rquirements"
                required
                disabled={loading}
              ></textarea>
              <input
                type="tel"
                placeholder="Enter contact number"
                name="Contact_Number"
                required
                disabled={loading}
              />

              <div className="hire-talent-checkbox">
                <input
                  type="checkbox"
                  id="hireTermsCheckbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  disabled={loading}
                />

                <label
                  htmlFor="hireTermsCheckbox"
                  className="hire-talent-checkbox-label"
                >
                  By checking this box, I consent to receive text messages
                  related to conversational purposes from Cadila Global LLC. You
                  can reply ‘STOP’ at any time to opt out. Message and data
                  rates may apply. Message frequency may vary; text HELP for
                  assistance. For more information, please visit our{" "}
                  <a href="/privacy-policy">Privacy Policy</a> and SMS{" "}
                  <a href="/terms-and-conditions"> Terms and Conditions</a>.
                </label>
              </div>

              <button type="submit" disabled={loading}>
                {loading ? (
                  <span className="spinner"></span>
                ) : (
                  "Submit Requirement"
                )}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HireTalent;
